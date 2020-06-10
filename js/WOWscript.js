//Set Up The Map
	var map = L.map('map', {
		zoomControl: false,
		// layers: [cities, cities14]
	})
		.setView([40.715198, -73.994695], 15); 

// Setting up the scrollable boundaries of the Map - silly, you can still pan
  // var p1 = L.latLng(38.078390, -122.808915),
  // p2 = L.latLng(37.697805, -122.079851),
  // myBounds = L.latLngBounds(p1, p2);


//Set Up Basemap Tiles From Stamen
L.tileLayer('https://api.mapbox.com/styles/v1/erinreiss/ckb4enizs1tz81jnw0gren53l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXJpbnJlaXNzIiwiYSI6ImNqOG84NWlnMDAwZnkyd3VtdnF4M2loNnkifQ.wpD0CzpyEpI2Pda7sVhGtw', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 19,
	minZoom: 13
}).addTo(map);
L.control.zoom({position: 'bottomright'}).addTo(map);


//Define my data
var treePoints = {
 
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9992860999999,
          40.7145687
        ]
      },
      "properties": {
        // "siteNumber": "2",
        "photo": "../images/wow_laoshandong_E.jpg",
        "year": "2020",
        "name": "Bonnie Tse",
        "siteType": "Letter",
        "treeCount": "老山東",
        "treeType": "106 Mosco St, New York, NY 10013, USA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9961892,
          40.7187961
        ]
      },
      "properties": {
        // "siteNumber": "2",
        "photo": "../images/wow_kamwo_E.jpg",
        "year": "2020",
        "name": "Emily Siy",
        "siteType": "Letter",
        "treeCount": "Kamwo Meridian Herbs",
        "treeType": "211 Grand St, New York, NY 10013, USA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9998633,
          40.7177018
        ]
      },
      "properties": {
        // "siteNumber": "2",
        "photo": "../images/wow_magicjewelry_E.jpg",
        "year": "2020",
        "name": "Lindsey Keeler",
        "siteType": "Letter",
        "treeCount": "Magic Jewelry",
        "treeType": "238 Canal St #108, New York, NY 10013, USA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9946939,
          40.7180597
        ]
      },
      "properties": {
        // "siteNumber": "2",
        "photo": "../images/wow_tantinhung_E.tiff",
        "year": "2020",
        "name": "Parker Limon",
        "siteType": "Letter",
        "treeCount": "Tan Tin Hung",
        "treeType": "121 Bowery, New York, NY 10002, USA"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.998842,
          40.714988
        ]
      },
      "properties": {
        // "siteNumber": "59",
        "photo": "../images/wow_mottpell_E.jpg",
        "year": "2020",
        "name": "Jade Song",
        "siteType": "Letter",
        "treeCount": "Chinatown",
        "treeType": "Mott & Pell"
      }
    }
  ]
};


//Create My Custom Iconw 
var iconLetter = L.icon({
	iconUrl:      'images/iconLetter.svg',
	iconSize:     [30, 30],
	// iconAnchor:   [15, 15],
	popupAnchor:  [0, -17] 
})

var iconLetterClicked = L.icon({
  iconUrl:      'images/iconLetterClicked.svg',
  iconSize:     [30, 30],
  // iconAnchor:   [15, 15],
  popupAnchor:  [0, -17] 
})

// Add the filtered GeoJSON element to our Map
// starbucksPoints.addTo(map)

//Load External geoJSON but don't add to map
// var myJson = $.getJSON('./js/geoJSON.json',function(data){});

// var panMarkers = L.geoJson(treePoints, {
			// onEachFeature: function (feature, layer) {
			// }
		// });

var markersLayer = new L.LayerGroup(); // NOTE: Layer is created here!

function addMarkersForYearAndSiteType(aYear, aType, anIcon) {
  var geojsonLayer = L.geoJson(treePoints,{
    onEachFeature: makeMarkers,
    filter: function (feature, layer) {
      return feature.properties.siteType == aType && feature.properties.year == aYear; 
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon:anIcon});
    }
  });
  markersLayer.addLayer(geojsonLayer);
}

function addMarkersForSiteType(aType, anIcon) {
  var geojsonLayer = L.geoJson(treePoints,{
    onEachFeature: makeMarkers,
    filter: function (feature, layer) {
      return feature.properties.siteType == aType; 
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon:anIcon});
    }
  });
  markersLayer.addLayer(geojsonLayer);
}

function addMarkersForYear(aYear){
  removeAllLayers();
  addMarkersForYearAndSiteType(aYear, "Letter", iconLetter);
  addMarkersForYearAndSiteType(aYear, "LetterClicked", iconLetterClicked);
  markersLayer.addTo(map);
};

function addMarkers(){
  removeAllLayers();
  addMarkersForSiteType("Letter", iconLetter);
  addMarkersForSiteType("LetterClicked", iconLetterClicked);
  markersLayer.addTo(map);
};

function removeAllLayers(){
  if (map.hasLayer(markersLayer)) {
    map.removeLayer(markersLayer);
  }
  markersLayer = new L.LayerGroup();
}

$(function(){
  addMarkers();
});

//What the fuck is this doing???

function showAll(){
  addMarkers();
}

//All Year Start Highlighted

$(function(){
  $("#buttonAll").addClass('active');
});

//Button Click Events

$( "#button2019" ).click(function() {
  addMarkersForYear(2019);
});

$( "#button2020" ).click(function() {
  addMarkersForYear(2020);
});

$( "#buttonAll" ).click(function() {
  showAll();
});

//Keep button highlighted until a new one is clicked

$(document).ready(function() {
    $("#controls > button").click(function(){
        $("#controls > button").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass('active');
        
    });
});

//Define variables for the modal

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//Marker Clicky and Popup

function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;
  layer.bindPopup();
    layer.on('mouseover', function (e) {
        // console.log(feature.properties.photo);
//experimenting with changing icon
      e.target.setIcon(iconLetterClicked);
      this.openPopup();
          //Define feilds by elements properties
    $('.name').text(feature.properties.name)
    $('.siteType').text(feature.properties.siteType)
    $('.address').text(feature.properties.address)
    $('.year').text(feature.properties.year)
    $('.treeCount').text(feature.properties.treeCount)
    $('.treeType').text(feature.properties.treeType)
      this._popup.setContent("<center>" + "A Love Letter To " + "<strong>" + feature.properties.treeCount + "</strong>" + "</br>" + "</br>" + "<img style = height:155px; src=" + feature.properties.photo + ">" + "</center>")
    });
    layer.on('mouseout', function (e) {
      e.target.setIcon(iconLetter);
      this.closePopup();
    });
  layer.on("click", function(e){
      // console.log(layer);
      // console.log(feature.properties.siteType);
    // Pan map to center clicked icon
		map.panTo(new L.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]), {animate: true, duration: 1.0});
    //Create Modal
    modal.style.display = "block";
    //Does this work? If you click outside the modal, the modal closes
     if (event.target == modal) {
    modal.style.display = "none";
  }
    modalImg.src = this.feature.properties.photo;
    captionText.innerHTML = "A Love Letter to</br>" + this.feature.properties.treeCount + "</br> by " + this.feature.properties.name;
    console.log(modalImg.src);
	});
}; 

// Get the <span> element that closes the modal
var mClose = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
mClose.onclick = function() {
  modal.style.display = "none";
}