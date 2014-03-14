var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
zoom: 13, // The larger the zoom number, the bigger the zoom
center: me,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;

function init()
{
map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
getMyLocation();
}

var closeststation;
var closestdist = 99999;
var closest;

function readline(){
request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
request.send();
request.onreadystatechange = function()
	{
       if (request.readyState==4) 
	   {
		str = request.responseText;
		parsed = JSON.parse(str);
				
		if (str == '{"error":"So much fail"}')
			alert("Error!");
		 else{
				if (parsed.line == 'blue'){
					blueline();
					}
				else if (parsed.line == 'red'){
					redline();
					}
				else if (parsed.line == 'orange'){
					orangeline();
					}
			}
		};
	}
}

function blueline(){
var blueline = new Array();
var bluepositions = new Array();
var bluemarker = 'blueline.png';

var airport = new google.maps.LatLng(42.37426, -71.0304);
blueline.push(new google.maps.Marker({position: airport, title: "Airport", icon: bluemarker}));

var aquarium = new google.maps.LatLng(42.35978, -71.0517);
blueline.push(new google.maps.Marker({position: aquarium, title: "Aquarium", icon: bluemarker}));

var beachmont = new google.maps.LatLng(42.39754, -70.9923);
blueline.push(new google.maps.Marker({position: beachmont, title: "Beachmont", icon: bluemarker}));

var bowdoin = new google.maps.LatLng(42.36137, -71.062);
blueline.push(new google.maps.Marker({position: bowdoin, title: "Bowdoin", icon: bluemarker}));

var govcenter = new google.maps.LatLng(42.35971, -71.0592);
blueline.push(new google.maps.Marker({position: govcenter, title: "Government Center", icon: bluemarker}));

var maverick = new google.maps.LatLng(42.36912, -71.0395);
blueline.push(new google.maps.Marker({position: maverick, title: "Maverick", icon: bluemarker}));

var orienthgts = new google.maps.LatLng(42.38687, -71.0047);
blueline.push(new google.maps.Marker({position: orienthgts, title: "Orient Heights", icon: bluemarker}));

var revbeach = new google.maps.LatLng(42.40784, -70.9925);
blueline.push(new google.maps.Marker({position: revbeach, title: "Revere Beach", icon: bluemarker}));

var statest = new google.maps.LatLng(42.35898, -71.0576);
blueline.push(new google.maps.Marker({position: statest, title: "State Street", icon: bluemarker}));

var suffolkdowns = new google.maps.LatLng(42.3905, -70.9971);
blueline.push(new google.maps.Marker({position: suffolkdowns, title: "Suffolk Downs", icon: bluemarker}));

var wonderland = new google.maps.LatLng(42.41342, -70.9916);
blueline.push(new google.maps.Marker({position: wonderland, title: "Wonderland", icon: bluemarker}));

var woodisland = new google.maps.LatLng(42.37964, -71.0229);
blueline.push(new google.maps.Marker({position: woodisland, title: "Wood Island", icon: bluemarker}));

bluepositions = [
	bowdoin, govcenter, statest, aquarium, maverick, airport, woodisland, orienthgts, suffolkdowns, beachmont, revbeach, wonderland
	];
	
var bluepath = new google.maps.Polyline({
	path: bluepositions,
	geodesic: true,
	strokeColor: '#0000FF',
	strokeOpacity: 1.0,
	strokeWeight: 2
	});
	
bluepath.setMap(map);	

for(var i = 0; i< blueline.length; i++)
{
//stationinfo(blueline[i]);
blueline[i].setMap(map);
findNearest(blueline[i]);
};
}

function orangeline(){
var orangeline = new Array();
var orangemarker = 'orangeline.png';
var orangepositions = new Array();

var backbay = new google.maps.LatLng(42.34735, -71.0757);
orangeline.push(new google.maps.Marker({position: backbay, title: "Back Bay", icon: orangemarker}));

var chinatown = new google.maps.LatLng(42.35255, -71.0628);
orangeline.push(new google.maps.Marker({position: chinatown, title: "Chinatown", icon: orangemarker}));

var commcollege = new google.maps.LatLng(42.37362, -71.0695);
orangeline.push(new google.maps.Marker({position: commcollege, title: "Community College", icon: orangemarker}));

var dtownxing = new google.maps.LatLng(42.35552, -71.0602);
orangeline.push(new google.maps.Marker({position: dtownxing, title: "Downtown Crossing", icon: orangemarker}));

var foresthills = new google.maps.LatLng(42.30052, -71.1137);
orangeline.push(new google.maps.Marker({position: foresthills, title: "Forest Hills", icon: orangemarker}));

var greenst = new google.maps.LatLng(42.31053, -71.1074);
orangeline.push(new google.maps.Marker({position: greenst, title: "Green Street", icon: orangemarker}));

var haymarket = new google.maps.LatLng(42.36302, -71.0583);
orangeline.push(new google.maps.Marker({position: haymarket, title: "Haymarket", icon: orangemarker}));

var jacksonsq = new google.maps.LatLng(42.32313, -71.0996);
orangeline.push(new google.maps.Marker({position: jacksonsq, title: "Jackson Square", icon: orangemarker}));

var maldencenter = new google.maps.LatLng(42.42663, -71.0741);
orangeline.push(new google.maps.Marker({position: maldencenter, title: "Malden Center", icon: orangemarker}));

var massave = new google.maps.LatLng(42.34151, -71.0834);
orangeline.push(new google.maps.Marker({position: massave, title: "Mass Ave", icon: orangemarker}));

var northstation = new google.maps.LatLng(42.36558, -71.0613);
orangeline.push(new google.maps.Marker({position: northstation, title: "North Station", icon: orangemarker}));

var oakgrove = new google.maps.LatLng(42.43668, -71.0711);
orangeline.push(new google.maps.Marker({position: oakgrove, title: "Oak Grove", icon: orangemarker}));

var roxburyxing = new google.maps.LatLng(42.3314, -71.0955);
orangeline.push(new google.maps.Marker({position: roxburyxing, title: "Roxbury Crossing", icon: orangemarker}));

var ruggles = new google.maps.LatLng(42.33638, -71.089);
orangeline.push(new google.maps.Marker({position: ruggles, title: "Ruggles", icon: orangemarker}));

var statest = new google.maps.LatLng(42.35898, -71.0576);
orangeline.push(new google.maps.Marker({position: statest, title: "State Street", icon: orangemarker}));

var stonybrook = new google.maps.LatLng(42.31706, -71.1042);
orangeline.push(new google.maps.Marker({position: stonybrook, title: "Stony Brook", icon: orangemarker}));

var sullivan = new google.maps.LatLng(42.38398, -71.077);
orangeline.push(new google.maps.Marker({position: sullivan, title: "Sullivan", icon: orangemarker}));

var tuftsmed = new google.maps.LatLng(42.34966, -71.0639);
orangeline.push(new google.maps.Marker({position: tuftsmed, title: "Tufts Medical", icon: orangemarker}));

var wellington = new google.maps.LatLng(42.40237, -71.0771);
orangeline.push(new google.maps.Marker({position: wellington, title: "Wellington", icon: orangemarker}));

orangepositions = [
	oakgrove, maldencenter, wellington, sullivan, commcollege, northstation, haymarket, statest, dtownxing, chinatown, tuftsmed, backbay, massave, ruggles, roxburyxing, jacksonsq, stonybrook, greenst, foresthills
		];
		
var orangepath = new google.maps.Polyline({
	path: orangepositions,
	geodesic: true,
	strokeColor: '#FF8C00',
	strokeOpacity: 1.0,
	strokeWeight: 2
	});
	
orangepath.setMap(map);	

for(var j = 0; j< orangeline.length; j++)
{
//stationinfo(orangeline);
orangeline[j].setMap(map);
findNearest(orangeline[j]);
};
}

function redline(){

var redline= new Array();
var redmarker = 'redline.png';
var redpositions = new Array();

var alewife = new google.maps.LatLng(42.39543, -71.1425);
redline.push(new google.maps.Marker({position:alewife, title: "Alewife", icon: redmarker}));

var andrew = new google.maps.LatLng(42.33015, -71.0577);
redline.push(new google.maps.Marker({position:andrew, title: "Andrew", icon: redmarker}));

var ashmont = new google.maps.LatLng(42.28465, -71.0645);
redline.push(new google.maps.Marker({position:ashmont, title: "Ashmont", icon: redmarker}));

var braintree = new google.maps.LatLng(42.20785, -71.0011);
redline.push(new google.maps.Marker({position:braintree, title: "Braintree", icon: redmarker}));

var broadway = new google.maps.LatLng(42.34262, -71.057);
redline.push(new google.maps.Marker({position:broadway, title: "Broadway", icon: redmarker}));

var centralsq = new google.maps.LatLng(42.36549, -71.1038);
redline.push(new google.maps.Marker({position:centralsq, title: "Central Square", icon: redmarker}));

var charlesmgh = new google.maps.LatLng(42.36117, -71.0706);
redline.push(new google.maps.Marker({position:charlesmgh, title: "Charles/MGH", icon: redmarker}));

var davissq = new google.maps.LatLng(42.39674, -71.1218);
redline.push(new google.maps.Marker({position:davissq, title: "Davis", icon: redmarker}));

var dtownxing = new google.maps.LatLng(42.35552, -71.0602);
redline.push(new google.maps.Marker({position:dtownxing, title: "Downtown Crossing", icon: redmarker}));

var fieldscorner = new google.maps.LatLng(42.30009, -71.0617);
redline.push(new google.maps.Marker({position:fieldscorner, title: "Fields Corner", icon: redmarker}));

var harvardsq = new google.maps.LatLng(42.37336, -71.119);
redline.push(new google.maps.Marker({position:harvardsq, title: "Harvard Square", icon: redmarker}));

var jfkumass = new google.maps.LatLng(42.32069, -71.0524);
redline.push(new google.maps.Marker({position:jfkumass, title: "JFK/UMass", icon: redmarker}));

var kendallmit = new google.maps.LatLng(42.36249, -71.0862);
redline.push(new google.maps.Marker({position:kendallmit, title: "Kendall/MIT", icon: redmarker}));

var northquincy = new google.maps.LatLng(42.27528, -71.0296);
redline.push(new google.maps.Marker({position:northquincy, title: "North Quincy", icon: redmarker}));

var parkst = new google.maps.LatLng(42.35639, -71.0624);
redline.push(new google.maps.Marker({position:parkst, title: "Park Street", icon: redmarker}));

var portersq = new google.maps.LatLng(42.3884, -71.1191);
redline.push(new google.maps.Marker({position:portersq, title: "Porter Square", icon: redmarker}));

var quincyadams = new google.maps.LatLng(42.23339, -71.0072);
redline.push(new google.maps.Marker({position:quincyadams, title: "Quincy Adams", icon: redmarker}));

var quincycenter = new google.maps.LatLng(42.25181, -71.0054);
redline.push(new google.maps.Marker({position:quincycenter, title: "Quincy Center", icon: redmarker}));

var savinhill = new google.maps.LatLng(42.31129, -71.0533);
redline.push(new google.maps.Marker({position:savinhill, title: "Savin Hill", icon: redmarker}));

var shawmut = new google.maps.LatLng(42.29313, -71.0657);
redline.push(new google.maps.Marker({position:shawmut, title: "Shawmut", icon: redmarker}));

var southst = new google.maps.LatLng(42.35227, -71.0552);
redline.push(new google.maps.Marker({position:southst, title: "South Street", icon: redmarker}));

var wollaston = new google.maps.LatLng(42.26651, -71.0203);
redline.push(new google.maps.Marker({position:wollaston, title: "Wollaston", icon: redmarker}));

redpositions = [
	braintree, quincyadams, quincycenter, wollaston, northquincy, jfkumass, andrew, broadway, southst, dtownxing, parkst, charlesmgh, kendallmit, centralsq, harvardsq, portersq, davissq, alewife, ashmont, shawmut, fieldscorner, savinhill
		];
redpositions1 = [
	braintree, quincyadams, quincycenter, wollaston, northquincy, jfkumass, andrew, broadway, southst, dtownxing, parkst, charlesmgh, kendallmit, centralsq, harvardsq, portersq, davissq, alewife
		];
redpositions2 = [
	ashmont, shawmut, fieldscorner, savinhill, jfkumass
		];		
		
var redpath1 = new google.maps.Polyline({
	path: redpositions1,
	geodesic: true,
	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
	});
	
var redpath2 = new google.maps.Polyline({
	path: redpositions2,
	geodesic: true,
	strokeColor: '#FF0000',
	strokeOpacity: 1.0,
	strokeWeight: 2
	});
	
redpath1.setMap(map);	
redpath2.setMap(map);

for(var k = 0; k< redline.length; k++)
{
//stationinfo(redline);
redline[k].setMap(map);
findNearest(redline[k]);
};
}

function findNearest(station)
{

Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}
var R = 6371; // km

var stationlat = station['position'].lat();
var stationlng = station['position'].lng();

var Lat = myLat;
var Lng = myLng;

var dLat = (Lat-stationlat).toRad();
var dLon = (Lng-stationlng).toRad();
var Lat = Lat.toRad();
var stationlat = stationlat.toRad();

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(Lat) * Math.cos(stationlat); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c;

if (d < closestdist){
	closestdist = d;
	closeststation = station['title'];
	closest = station;
	}

	renderMap();
  }

function getMyLocation()
{
if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
navigator.geolocation.getCurrentPosition(function(position) {
myLat = position.coords.latitude;
myLng = position.coords.longitude;
readline();
});
}
else {
alert("Geolocation is not supported by your web browser. What a shame!");
}
}


function renderMap()
{
me = new google.maps.LatLng(myLat, myLng);

// Update map and go there...
map.panTo(me);

// Create a marker
marker = new google.maps.Marker({
position: me,
title: "Here I Am!"
});
marker.setMap(map);

var contentString = "Nearest Station: " + closest['title'] + " Distance: " + closestdist;

var infowindow = new google.maps.InfoWindow({
      content: contentString,
	  });

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

/*
function stationinfo(station){
scheduleData = JSON.parse(str);

for (i = 0; i < scheduleData["schedule"].length; i++) {
// One "trip" will have the fields "TripID", "Destination", and "Predictions"
  trip = scheduleData["schedule"][i];

	for (j = 0; j < trip["Predictions"].length; j++) {
		s = trip["Predictions"][j];
		if (s["Stop"]==station['title'])
			time = s["Stop"]["Seconds"];
		
var contentString = "Station Name: " + station['title'] + " Arrival Schedule: " + s['Stop']['Seconds'];
var infowindow = new google.maps.InfoWindow({
      content: contentString,
	  });

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
}
}

}*/