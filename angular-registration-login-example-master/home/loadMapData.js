function loadMap(mapData) {
    var meta = "";
    try
    {
        meta = mapData['meta'];
    }
    catch(err)
    {
        //do nothing
    }

   // console.log("metametametameta " + meta);

    if (meta != "" && meta != undefined)
    {
        var operation = meta['operation'];
        if (operation == 'created') 
        {
            var payload = mapData['payload'];
            var after = payload['after'];
            var props = after['properties'];
            var country = props['country'];
            var name = props['name'];          
        } else if (operation == 'updated') 
        {
            var payload = mapData['payload'];
            var after = payload['after'];
            var props = after['properties'];
            var dstatus = props['dstatus'];
            var name = props['name'];
            var email = props['email'];
            var dlocation = props['dlocation'];
            var dsn = props['dsn'];

            console.log(dstatus);

            try 
            {
                let markerMap = new Map();
                markerMap.set('Hamburg',[53.56, 10.00]);
                markerMap.set('Munich',[48.13, 11.56]);
                markerMap.set('Delhi',[28.66,77.23]);
                markerMap.set('Mumbai',[18.9667,72.8333]);
                markerMap.set('Kolkata',[22.5411,88.3378]);
                markerMap.set('Bangalore',[12.9699,77.598]);
                markerMap.set('Chennai',[13.0825,80.275]);
                markerMap.set('Sydney',[-33.865,151.2094]);
                markerMap.set('Melbourne',[-37.8136,144.9631]);
                markerMap.set('Brisbane',[-27.4678,153.0281]);
                markerMap.set('Perth',[-31.9522,115.8589]);
                markerMap.set('Adelaide',[-34.9289,138.6011]);
                markerMap.set('Moscow',[55.7558,37.6178]);
                markerMap.set('Saint Petersburg',[59.95,30.3167]);
                markerMap.set('Novosibirsk',[55.0333,82.9167]);
                markerMap.set('Yekaterinburg',[56.8356,60.6128]);
                markerMap.set('Nizhniy Novgorod',[56.3269,44.0075]);
                markerMap.set('Montréal',[45.5089,-73.5617]);
                markerMap.set('Sarnia',[42.9994,-82.3089]);
                markerMap.set('Duncan',[48.7787,-123.7079]);
                markerMap.set('Nuuk',[64.175,-51.7333]);
                markerMap.set('Mexico City',[19.4333,-99.1333]);
                markerMap.set('Guadalajara',[20.6767,-103.3475]);
                markerMap.set('Monterrey',[25.6667,-100.3]);
                markerMap.set('São Paulo',[-23.5504,-46.6339]);
                markerMap.set('Rio de Janeiro',[-22.9083,-43.1964]);
                markerMap.set('Belo Horizonte',[-19.8917,-43.9478]);
                markerMap.set('London',[51.5072,-0.1275]);
                markerMap.set('Birmingham',[52.48,-1.9025]);
                markerMap.set('Manchester',[53.4794,-2.2453]);
                markerMap.set('Shanghai',[31.1667, 121.4667]);
                markerMap.set('Guangzhou',[23.1288,113.259]);
                markerMap.set('Beijing',[39.905,116.3914]);

                var map = $('#world-map').vectorMap('get', 'mapObject');
                var params = map.params;
                var markers = params.markers;
                // console.log(params);
                // console.log(markers);

                var arrayLength = markers.length;
                console.log(arrayLength);

                if (dstatus == 'offline')
                {
                    var markerToBeRemoved = 0;
                    var bFlag = false;

                    for (var i = 0; i < arrayLength; i++) {
                        console.log(markers[i]);
                        var tmp = markers[i];
                        var name = tmp.name;
                        console.log(name);
                        console.log(dlocation);
                        if (dlocation == name)
                        {
                            bFlag = true;
                            markerToBeRemoved = i;
                        }
                    }
                    if (bFlag)
                        params.markers.splice(markerToBeRemoved, 1);
                }
                else if (dstatus == 'online')
                {
                    var latlng = markerMap.get(dlocation);
                    console.log(latlng)
                    params.markers.push({name: dlocation, latLng: latlng});
                }                

                $('#world-map').empty();
                world = new jvm.Map(params);
            }
            catch(err) {
                //do nothing
            }
            // $("h3").html(dstatus);
        } else if (operation == 'deleted') 
        {
            
        }
        // alert(operation);
    }
}