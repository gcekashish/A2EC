function loadMap (kevent) {
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
		label.html("Ashish"+ label.html());                
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
				cursor: 'pointer',
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
			{latLng: [53.56, 10.00], name: 'Hamburg'},
			{latLng: [48.13, 11.56], name: 'Munich'},
			{latLng: [28.66,77.23], name:'Delhi'},
			{latLng: [18.9667,72.8333], name:'Mumbai'},
			{latLng: [22.5411,88.3378], name:'Kolkata'},
			{latLng: [12.9699,77.598], name:'Bangalore'},
			{latLng: [13.0825,80.275], name:'Chennai'},
			{latLng: [-33.865,151.2094], name:'Sydney'},
			{latLng: [-37.8136,144.9631], name:'Melbourne'},
			{latLng: [-27.4678,153.0281], name:'Brisbane'},
			{latLng: [-31.9522,115.8589], name:'Perth'},
			{latLng: [-34.9289,138.6011], name:'Adelaide'},
			{latLng: [55.7558,37.6178], name:'Moscow'},
			{latLng: [59.95,30.3167], name:'Saint Petersburg'},
			{latLng: [55.0333,82.9167], name:'Novosibirsk'},
			{latLng: [56.8356,60.6128], name:'Yekaterinburg'},
			{latLng: [56.3269,44.0075], name:'Nizhniy Novgorod'},
			{latLng: [45.5089,-73.5617], name:'Montréal'},
			{latLng: [42.9994,-82.3089], name:'Sarnia'},
			{latLng: [48.7787,-123.7079], name:'Duncan'},
			{latLng: [64.175,-51.7333], name:'Nuuk'},
			{latLng: [19.4333,-99.1333], name:'Mexico City'},
			{latLng: [20.6767,-103.3475], name:'Guadalajara'},
			{latLng: [25.6667,-100.3], name:'Monterrey'},
			{latLng: [-23.5504,-46.6339], name:'São Paulo'},
			{latLng: [-22.9083,-43.1964], name:'Rio de Janeiro'},
			{latLng: [-19.8917,-43.9478], name:'Belo Horizonte'},
			{latLng: [51.5072,-0.1275], name:'London'},
			{latLng: [52.48,-1.9025], name:'Birmingham'},
			{latLng: [53.4794,-2.2453], name:'Manchester'},
			{latLng: [31.1667,121.4667], name:'Shanghai'},
			{latLng: [23.1288,113.259], name:'Guangzhou'},
			{latLng: [39.905,116.3914], name:'Beijing'}
		]
	};

	function setFlatTheme() {
		$("body").toggleClass("flat-theme");
		$("#rad-color-opts").toggleClass("hide");
		$(".rad-chk-pin input[type=checkbox]").prop("checked", true);
	}

	setFlatTheme();

	$(window).on("scroll", function (e) {
		if ($(window).scrollTop() > 50) {
			$("body").addClass("sticky");
		} else {
			$("body").removeClass("sticky");
		}
	});

	$(document).on("click", function (e) {
		e.preventDefault();
		var $item = $(".rad-dropmenu-item");
		if ($item.hasClass("active")) {
			$item.removeClass("active");
		}
	});

	$(".rad-sidebar a").on("click", function (e) {
		e.stopPropagation();
	});

	$(".rad-chat-body").slimScroll({
		height: "450px",
		color: "#c6c6c6"
	});

	$(".rad-timeline-body").slimScroll({
		height: "450px",
		color: "#c6c6c6"
	});

	$(".rad-activity-body").slimScroll({
		height: "250px",
		color: "#c6c6c6"
	});

	$(".rad-toggle-btn").on("click", function () {
		$(".rad-logo-container").toggleClass("rad-nav-min");
		$(".rad-sidebar").toggleClass("rad-nav-min");
		$(".rad-body-wrapper").toggleClass("rad-nav-min");
		setTimeout(function () {
			initializeCharts();
		}, 200);
	});

	$("li.rad-dropdown > a.rad-menu-item").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".rad-dropmenu-item").removeClass("active");
		$(this).next(".rad-dropmenu-item").toggleClass("active");
	});

	$(".fa-chevron-down").on("click", function () {
		var $ele = $(this).parents(".panel-heading");
		$ele.siblings(".panel-footer").toggleClass("rad-collapse");
		$ele.siblings(".panel-body").toggleClass("rad-collapse", function () {
			setTimeout(function () {
				initializeCharts();
			}, 200);
		});
	});

	$(".fa-close").on("click", function () {
		var $ele = $(this).parents(".panel");
		$ele.addClass("panel-close");
		setTimeout(function () {
			$ele.parent().remove();
		}, 210);
	});

	$(".fa-rotate-right").on("click", function () {
		var $ele = $(this).parents(".panel-heading").siblings(".panel-body");
		$ele.append(
			'<div class="overlay"><div class="overlay-content"><i class="fa fa-refresh fa-2x fa-spin"></i></div></div>'
		);
		setTimeout(function () {
			$ele.find(".overlay").remove();
		}, 2000);
	});

	$("#rad-chat-send").on("click", function () {
		var value = $("#rad-chat-txt").val();
		var $ele = $(".rad-chat-body");
		var img =
			"https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg";
		
		if (value) {
			$("#rad-chat-txt").val("");
			$ele.append(getTempl(img, value, "left"));
			
			setTimeout(function () {
				img = "http://www.gravatar.com/avatar/9099c2946891970eb4739e6455400913.png";
				$ele.append(getTempl(img, "Cool!!!", "right"));
				$ele.slimScroll({
					scrollTo: $ele[0].scrollHeight
				});
			}, 2000);

			$ele.slimScroll({
				scrollTo: $ele[0].scrollHeight
			});
		}
	});

	$(".rad-chk-pin input[type=checkbox]").change(function (e) {
		$("body").toggleClass("flat-theme");
		$("#rad-color-opts").toggleClass("hide");
		var selectedTheme = $(".rad-color-swatch input[type=radio]:checked");
		var fillColor = '#C6C6C6';
		var scale = ["#C8EEFF", "#0071A4"];

		if (this.checked) {
			scale = ["#A8ECFF", "#FA71D4"];
			fillColor = colorMap[selectedTheme.val()];
		}
		
		changeMapColors(fillColor, scale);
	});
	
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

	function getTempl(img, text, position) {
		return (
			'<div class="rad-list-group-item ' +
			position +
			'"><span class="rad-list-icon pull-' +
			position +
			'"><img class="rad-list-img" src=' +
			img +
			' alt="me" /></span><div class="rad-list-content rad-chat"><span class="lg-text">Me</span><span class="sm-text"><i class="fa fa-clock-o"></i> ' +
			formatTime(new Date()) +
			'</span><div class="rad-chat-msg">' +
			text +
			"</div>"
		);
	}

	function formatTime(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? "pm" : "am";
		
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		
		return hours + ":" + minutes + " " + ampm;
	}

	initializeCharts();
	$('#world-map').empty();
	world = new jvm.Map(settings);
}