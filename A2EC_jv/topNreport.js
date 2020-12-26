/*
This program serves a static HTML file (through the Express framework on top of Node). The browser that loads this HTML document registers itself as an SSE client with this program.
This program consumes Kafka messages from topic Top3CountrySizePerContinent to which the Running Top3 (size of countries by continent) is produced.
This program reports to all its SSE clients the latest update (or potentially a periodice top 3 largest countries per continent (with a configurable interval))
 
*/

var express = require('express')
  , http = require('http')
  , sseMW = require('./sse');

var kafka = require('kafka-node')
var Consumer = kafka.Consumer;
var client = new kafka.KafkaClient({idleConnection: 24 * 60 * 60 * 1000,  kafkaHost: "localhost:9092"});
var countriesTopic = "consumeFromNeo4j";

var app = express();
var server = http.createServer(app);

var PORT = process.env.PORT || 3015;
var APP_VERSION = '0.0.4.06';

server.listen(PORT, function () {
  console.log('Server running, version '+APP_VERSION+', Express is listening... at '+PORT+" ");
});

 // Realtime updates
var sseClients = new sseMW.Topic();


app.use(express.static(__dirname + '/public'))
app.get('/about', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Version "+APP_VERSION+". No Data Requested, so none is returned");
    res.write("Supported URLs:");
    res.write("/public , /public/index.html ");
    res.write("incoming headers" + JSON.stringify(req.headers)); 
    res.end();
});
app.use(sseMW.sseMiddleware)

// initial registration of SSE Client Connection 
app.get('/topn/updates', function(req,res){
    var sseConnection = res.sseConnection;
    sseConnection.setup();
    sseClients.add(sseConnection);
} );

// Login Page 
app.get('/login', function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Version "+APP_VERSION+". No Data Requested, so none is returned");
    res.write("Supported URLs:");
    res.write("/public , /public/index.html ");
    res.write("incoming headers" + JSON.stringify(req.headers)); 
    res.end();
} );


var m;
//send message to all registered SSE clients
updateSseClients = function(message) {
    var msg = message;
    console.log("in updateSseClients");
    this.m=message;
    sseClients.forEach( 
      function(sseConnection) {
        sseConnection.send(this.m); 
      }
      , this // this second argument to forEach is the thisArg (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 
    ); //forEach
}// updateSseClients

// send a heartbeat signal to all SSE clients, once every interval seconds (or every 3 seconds if no interval is specified)
initHeartbeat = function(interval) {
    setInterval(function()  {
        var msg = {"label":"The latest", "time":new Date()}; 
        updateSseClients( JSON.stringify(msg));
      }//interval function
    , interval?interval*1000:3000
    ); // setInterval 
}//initHeartbeat

// initialize heartbeat at 10 second interval
initHeartbeat(10); 


var consumer = new Consumer(
  client,
    [{ topic: "consumeFromNeo4j", partition: 0 }],
    {
        autoCommit: true,
        fetchMaxWaitMs: 1000,
        fetchMaxBytes: 1024 * 1024,
        encoding: 'utf8',
        fromOffset: true
    }
);

consumer.on('message', function (message) {
  handleMessage(message);
});

consumer.addTopics([
  { topic: countriesTopic, partition: 0, offset: 0}
], () => console.log("topic "+countriesTopic+" added to consumer for listening"));

function handleMessage(message) {
    var top3 = JSON.parse(message.value);
    console.log("Ashish");
    console.log(top3);
    updateSseClients( top3);
}// handleMessage