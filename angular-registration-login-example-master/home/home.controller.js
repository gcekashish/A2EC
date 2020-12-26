(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

        loadMap("");

        function loadMap(mapData) {
            let dataMap = new Map();

            const proxyurl = "http://127.0.0.1:8085/";
            const url = "http://127.0.0.1:3010/retrieveNeo4jData";
              
            fetch(proxyurl + url)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then(data => {
                data.records.map(record => {
                    var name = record._fields[0].properties.name;
                    var location = record._fields[0].properties.dlocation;
                    var status = record._fields[0].properties.dstatus;
                    dataMap.set(location, name+"~"+status);
                });

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
    
                var world;
                var mapSeries = {
                    AE: "United Arab Emirates",
                    AF: "Afghanistan",
                    AG: "Antigua and Barbuda",
                    AI: "Anguilla",
                    AL: "Albania",
                    AM: "Armenia",
                    AO: "Angola",
                    AR: "Argentina",
                    AS: "American Samoa",
                    AT: "Austria",
                    AU: "Australia",
                    AW: "Aruba",
                    AZ: "Azerbaijan",
                    BA: "Bosnia and Herzegovina",
                    BB: "Barbados",
                    BD: "Bangladesh",
                    BE: "Belgium",
                    BF: "Burkina Faso",
                    BG: "Bulgaria",
                    BH: "Bahrain",
                    BI: "Burundi",
                    BJ: "Benin",
                    BL: "Saint-Barthélemy",
                    BM: "Bermuda",
                    BN: "Brunei",
                    BO: "Bolivia",
                    BQBO: "Netherlands",
                    BQSA: "Saba (Netherlands)",
                    BQSE: "St. Eustatius (Netherlands)",
                    BR: "Brazil",
                    BS: "Bahamas",
                    BT: "Bhutan",
                    BW: "Botswana",
                    BY: "Belarus",
                    BZ: "Belize",
                    CA: "Canada",
                    CD: "Democratic Republic of the Congo",
                    CF: "Central African Republic",
                    CG: "Republic of Congo",
                    CH: "Switzerland",
                    CI: "Côte d'Ivoire",
                    CL: "Chile",
                    CM: "Cameroon",
                    CN: "China",
                    CO: "Colombia",
                    CR: "Costa Rica",
                    CU: "Cuba",
                    CV: "Cape Verde",
                    CW: "Curaco (Netherlands)",
                    CY: "Cyprus",
                    CZ: "Czech Republic",
                    DE: "Germany",
                    DJ: "Djibouti",
                    DK: "Denmark",
                    DM: "Dominica",
                    DO: "Dominican Republic",
                    DZ: "Algeria",
                    EC: "Ecuador",
                    EE: "Estonia",
                    EG: "Egypt",
                    EH: "Western Sahara",
                    ER: "Eritrea",
                    ES: "Spain",
                    ET: "Ethiopia",
                    FI: "Finland",
                    FJ: "Fiji",
                    FK: "Falkland Islands",
                    FM: "Micronesia",
                    FO: "Faeroe Islands",
                    FR: "France",
                    GA: "Gabon",
                    GB: "United Kingdom",
                    GD: "Grenada",
                    GE: "Georgia",
                    GF: "France",
                    GH: "Ghana",
                    GL: "Greenland",
                    GM: "The Gambia",
                    GN: "Guinea",
                    GP: "Guadeloupe (France)",
                    GQ: "Equatorial Guinea",
                    GR: "Greece",
                    GT: "Guatemala",
                    GU: "Guam",
                    GW: "Guinea-Bissau",
                    GY: "Guyana",
                    HN: "Honduras",
                    HR: "Croatia",
                    HT: "Haiti",
                    HU: "Hungary",
                    IC: "Canary Islands (Spain)",
                    ID: "Indonesia",
                    IE: "Ireland",
                    IL: "Israel",
                    IN: "India",
                    IQ: "Iraq",
                    IR: "Iran",
                    IS: "Iceland",
                    IT: "Italy",
                    JM: "Jamaica",
                    JO: "Jordan",
                    JP: "Japan",
                    KE: "Kenya",
                    KG: "Kyrgyzstan",
                    KH: "Cambodia",
                    KM: "Comoros",
                    KN: "Saint Kitts and Nevis",
                    KP: "North Korea",
                    KR: "South Korea",
                    KW: "Kuwait",
                    KY: "Cayman Islands",
                    KZ: "Kazakhstan",
                    LA: "Laos",
                    LB: "Lebanon",
                    LC: "Saint Lucia",
                    LK: "Sri Lanka",
                    LR: "Liberia",
                    LS: "Lesotho",
                    LT: "Lithuania",
                    LU: "Luxembourg",
                    LV: "Latvia",
                    LY: "Libya",
                    MA: "Morocco",
                    MD: "Moldova",
                    ME: "Montenegro",
                    MF: "Saint Martin (French)",
                    MG: "Madagascar",
                    MH: "Marshall Islands",
                    MK: "Macedonia",
                    ML: "Mali",
                    MM: "Myanmar",
                    MN: "Mongolia",
                    MP: "Northern Mariana Islands",
                    MQ: "Martinique (France)",
                    MR: "Mauritania",
                    MS: "Montserrat",
                    MT: "Malta",
                    MU: "Mauritius",
                    MV: "Maldives",
                    MW: "Malawi",
                    MX: "Mexico",
                    MY: "Malaysia",
                    MZ: "Mozambique",
                    NA: "Namibia",
                    NC: "New Caledonia",
                    NE: "Niger",
                    NG: "Nigeria",
                    NI: "Nicaragua",
                    NL: "Netherlands",
                    NO: "Norway",
                    NP: "Nepal",
                    NR: "Nauru",
                    NZ: "New Zealand",
                    OM: "Oman",
                    PA: "Panama",
                    PE: "Peru",
                    PF: "French Polynesia",
                    PG: "Papua New Guinea",
                    PH: "Philippines",
                    PK: "Pakistan",
                    PL: "Poland",
                    PR: "Puerto Rico",
                    PS: "Palestine",
                    PT: "Portugal",
                    PW: "Palau",
                    PY: "Paraguay",
                    QA: "Qatar",
                    RE: "Reunion (France)",
                    RO: "Romania",
                    RS: "Serbia",
                    RU: "Russian Federation",
                    RW: "Rwanda",
                    SA: "Saudi Arabia",
                    SB: "Solomon Islands",
                    SC: "Seychelles",
                    SD: "Sudan",
                    SE: "Sweden",
                    SI: "Slovenia",
                    SK: "Slovakia",
                    SL: "Sierra Leone",
                    SN: "Senegal",
                    SO: "Somalia",
                    SR: "Suriname",
                    SS: "South Sudan",
                    ST: "São Tomé and Principe",
                    SV: "El Salvador",
                    SX: "Saint Martin (Dutch)",
                    SY: "Syria",
                    SZ: "Swaziland",
                    TC: "Turks and Caicos Islands",
                    TD: "Chad",
                    TG: "Togo",
                    TH: "Thailand",
                    TJ: "Tajikistan",
                    TL: "Timor-Leste",
                    TM: "Turkmenistan",
                    TN: "Tunisia",
                    TO: "Tonga",
                    TR: "Turkey",
                    TT: "Trinidad and Tobago",
                    TV: "Tuvalu",
                    TW: "Taiwan",
                    TZ: "Tanzania",
                    UA: "Ukraine",
                    UG: "Uganda",
                    US: "United States",
                    UY: "Uruguay",
                    UZ: "Uzbekistan",
                    VC: "Saint Vincent and the Grenadines",
                    VE: "Venezuela",
                    VG: "British Virgin Islands",
                    VI: "United States Virgin Islands",
                    VN: "Vietnam",
                    VU: "Vanuatu",
                    WS: "Samoa",
                    XK: "Kosovo",
                    YE: "Yemen",
                    YT: "Mayotte (France)",
                    ZA: "South Africa",
                    ZM: "Zambia",
                    ZW: "Zimbabwe"
                };
                var settings = {
                    map: "world_mill",
                    container: $("#world-map"),
                    regionsSelectable: true,
                    regionsSelectableOne: true,
                    markersSelectable: true,
                    markersSelectableOne: true,
                    backgroundColor: "#f5f5f5",
                    colors: "#3377CC",
                    zoomOnScroll: false,
                    onMarkerTipShow: function(event, label, code) {
                        var original = label.html();
                        var details = dataMap.get(original);
                        var owner =  details.split('~');
                        var name = owner[0];
                        var deviceStatus = owner[1];
                        var str = original+"<br>"+name+"<br>"+deviceStatus;
                        label.html(str);                
                    },
                    regionStyle: {
                        initial: {
                            fill: '#b5d781',
                            "fill-opacity": 1,
                            stroke: '#f5f5f5',
                            "stroke-width": 0.6,
                            "stroke-opacity": 1
                        },
                        hover: {
                            "fill-opacity": 0.7,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: 'grey'
                        },
                        selectedHover: {
                        }
                    },
                    regionLabelStyle: {
                        initial: {
    
                        },
                        hover: {
                            cursor: 'pointer',
                        }
                    },
                    markerStyle: {
                        initial: {
                            fill: 'grey',
                            stroke: '#505050',
                            "fill-opacity": 1,
                            "stroke-width": 1,
                            "stroke-opacity": 1,
                            r: 3
                        },
                        hover: {
                            stroke: 'black',
                            "stroke-width": 2,
                            cursor: 'pointer'
                        },
                        selected: {
                            fill: 'blue'
                        },
                        selectedHover: {
                        }
                    },
                    series: {
                        regions: [
                            {
                                values: mapSeries,
                                scale: ['#C8EEFF', '#0071A4'],
                                normalizeFunction: "polynomial"
                            }
                        ]
                    },
                    markers: [                        
                    ]
                };
                
                function changeMapColors(fillColor, scale) {
                    world.remove();
                    settings.regionStyle.initial.fill = fillColor;
                    settings.series.regions[0].scale = scale;
                    world = new jvm.Map(settings);
                }
    
                var colorMap = {
                    crimson: "crimson",
                    teal: "#1fb5ad",
                    orange: "#ff503f",
                    purple: "rebeccapurple",
                    twitter: "#55acee"
                };
    
                $(".rad-color-swatch input[type=radio]").change(function (e) {
                    if ($(".rad-chk-pin input[type=checkbox]").is(":checked")) {
                        $("body").removeClass().addClass("flat-theme").addClass(this.value);
                        $(".rad-color-swatch label").removeClass("rad-option-selected");
                        $(this).parent().addClass("rad-option-selected");
                        $(window).scrollTop(0);
    
                        changeMapColors(colorMap[this.value], ["#A8ECFF", "#FA71D4"]);
                    }
                });
    
                $(".rad-notification-item").on("click", function (e) {
                    e.stopPropagation();
                });
    
                $(window).resize(function () {
                    setTimeout(function () {
                        initializeCharts();
                    }, 200);
                });
    
                function initializeCharts() {
    
                }
    
                initializeCharts();
    
                try {
                    $('#world-map').empty();
                    
                    var personSize = dataMap.size;
                    var temp = 0;
                    var tmpStr = "";
                    for (let locationMapDetails of dataMap.keys()) 
                    {
                        console.log(locationMapDetails);
                        var latlng = markerMap.get(locationMapDetails);
                        console.log(latlng)

                        settings.markers.push({name: locationMapDetails, latLng: latlng});
                    }
                    console.log(settings.markers);
                    world = new jvm.Map(settings);
                }
                catch(err) {
                    console.log(err);
                }
            });           
        }
    }

})();