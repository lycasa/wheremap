/*var L = require('leaflet');
var Geocoder = require('leaflet-control-geocoder');
var LRM = require('leaflet-routing-machine');
var locate = require('leaflet.locatecontrol');
var ls = require('local-storage');*/


	var mymap = L.map('mapid').setView([31.30924, 121.50725], 15);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGJhZ2JpbmdvIiwiYSI6ImNqNmJ4cXM4ZzFqcmozNHIwYnNudTJncDAifQ.HgRKpBhFONFASzJBqON2Hg', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
		//id: 'mapbox.satellite'
	}).addTo(mymap);


	var popup = L.popup();

	function onMapClick(e) {
	  //alert("You clicked the map at " + e.latlng);
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);



var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(31.30993, 121.50292),
		L.latLng(31.31079, 121.51097)
	],
	//geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true
	/*reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}*/
})).addTo(mymap);

L.Routing.errorControl(control).addTo(mymap);











	//L.marker([51.5, -0.09]).addTo(mymap)
		//.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
	/*L.marker([31.30924, 121.50725]).addTo(mymap);*/
	/*	.bindPopup("<b>Hello world!</b><br />I am lyc.").openPopup();*/

	/*L.circle([31.30924, 121.50725], 500, {
		color: 'blue',
		fillColor: 'blue',
		fillOpacity: 0.2
	}).addTo(mymap)*//*.bindPopup("I am a circle.")*/;

	
	/*<!-- L.polygon([ -->
		<!-- [33.30924, 121.40725], -->
		<!-- [30.30924, 121.70725], -->
		<!-- [32.30924, 121.60725] -->
	<!-- ]).addTo(mymap).bindPopup("I am a polygon."); -->*/



/* OSRM setup */
/*var ReversablePlan = L.Routing.Plan.extend({
  createGeocoders: function() {
    var container = L.Routing.Plan.prototype.createGeocoders.call(this);
    return container;
  }
});*/
	/* Setup markers */
/*function makeIcon(i, n) {
  var url = 'images/marker-via-icon-2x.png';
  var markerList = ['images/marker-start-icon-2x.png', 'images/marker-end-icon-2x.png'];
  if (i === 0) {
    return L.icon({
      iconUrl: markerList[0],
      iconSize: [20, 56],
      iconAnchor: [10, 28]
    });
  }
  if (i === n - 1) {
    return L.icon({
      iconUrl: markerList[1],
      iconSize: [20, 56],
      iconAnchor: [10, 28]
    });
  } else {
    return L.icon({
      iconUrl: url,
      iconSize: [20, 56],
      iconAnchor: [10, 28]
    });
  }
}*/