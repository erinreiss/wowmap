//Set Up The Map
	var map = L.map('map', {
		zoomControl: false,
		// layers: [cities, cities14]
	})
		.setView([40.714471, -73.996044], 17);  


// Setting up the scrollable boundaries of the Map - silly, you can still pan
  // var p1 = L.latLng(38.078390, -122.808915),
  // p2 = L.latLng(37.697805, -122.079851),
  // myBounds = L.latLngBounds(p1, p2);


//Set Up Basemap Tiles From Stamen
L.tileLayer('https://api.mapbox.com/styles/v1/erinreiss/ckb4enizs1tz81jnw0gren53l/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXJpbnJlaXNzIiwiYSI6ImNqOG84NWlnMDAwZnkyd3VtdnF4M2loNnkifQ.wpD0CzpyEpI2Pda7sVhGtw', {
	attribution: '<a href="http://mapbox.com/about/maps">Mapbox ©</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap ©</a> | <a href="https://apps.mapbox.com/feedback/">Improve this map</a>',
  maxZoom: 19,
	minZoom: 13
}).addTo(map);
L.control.zoom({position: 'bottomright'}).addTo(map);


//Define my data
var myPoints = {

   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9992861,40.7145687 ]
    },
    "properties": {
    "titleL":"老山東",
    "name":"Bonnie Tse",
    "photo":"images/wow_laoshandong_E.jpg",
    "year":"2020",
    "address":"106 Mosco St, New York, NY 10013, USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9961892,40.7187961 ]
    },
    "properties": {
    "titleL":"Kamwo Meridian Herbs",
    "name":"Emily Siy",
    "photo":"images/wow_kamwo_E.jpg",
    "year":"2020",
    "address":"211 Grand St, New York, NY 10013, USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998842,40.714988 ]
    },
    "properties": {
    "titleL":"Chinatown",
    "name":"Jade Song",
    "photo":"images/wow_mottpell_E.jpg",
    "year":"2020",
    "address":"123 Bowery 2nd fl, New York, NY 10002",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9998633,40.7177018 ]
    },
    "properties": {
    "titleL":"Magic Jewelry",
    "name":"Lindsey Keeler",
    "photo":"images/wow_magicjewelry_E.jpg",
    "year":"2020",
    "address":"238 Canal St #108, New York, NY 10013, USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9946939,40.7180597 ]
    },
    "properties": {
    "titleL":"Tan Tin Hung",
    "name":"Parker Limon",
    "photo":"images/wow_tantinhung_E.jpg",
    "year":"2020",
    "address":"121 Bowery, New York, NY 10002, USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9981417,40.7154034 ]
    },
    "properties": {
    "titleL":"Chinatown Ice Cream Factory",
    "name":"Ying Cai1",
    "photo":"images/wow_icecreamfactory_E.jpg",
    "year":"2020",
    "address":"65 Bayard St, New York, NY 10013 USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9928845,40.7136987 ]
    },
    "properties": {
    "titleL":"Xin Zhong Shen Market",
    "name":"Ying Cai2",
    "photo":"images/wow_xinzhongshen_E.jpg",
    "year":"2020",
    "address":"109 E Broadway, New York, NY 10002 USA",
    "siteType":"Letter",
    "translation":"親愛的新中華超市，<br><br>當我去年剛搬到紐約的時候，我最喜歡的日常之一就是在週日早上早早起來，在空氣還清爽街道還安靜的時候，乘F線從布魯克林到東百老匯。我會背著兩個布袋快步走到你們的超市，然後下台階。剛進門水缸裡的活魚、螃蟹、跟其他新鮮海鮮就和我打招呼，但我徑直走向蔬菜的部分。那總有充足的蔬菜，豐滿的西紅柿可以做番茄炒蛋，新鮮的大白菜和香菇做湯，閃閃發光的茄子炒菜，都被你們辛勤的工作人員分成一捆捆的。最後，我會上樓，試圖不被一排排的童年最愛零食餅乾誘惑，但總會戴著一盒小熊餅幹或者一包花生糖離開。<br>我其實一直不喜歡做飯，但是我會因為想念我媽媽住的飯和小時候家的口味（也為了省錢，哈哈⋯⋯）做飯。多虧了你們超市，我能買到熟悉的食材來嘗試複製那些口味。每次我帶便當去上班，同事們總會說看起來很好吃，但這都多虧了我在你們那裏買的菜。<br><br>        我現在不住在紐約了，但是如果我還住在那邊的話，我肯定還是每週會在新中華超市買菜。我相信你們的力量和你們努力工作的能量一定可以祝你們度過這段困難的時間。當危機結束之後，我相信更多的客人會很激動地到你們超市，尋找給親人朋友做一頓熱呼呼的美味飯餐所需要的原料。謝謝您通過賣新鮮的菜給我們帶來這麼多幸福，希望你們永遠健康！<br><br>祝你們都有正能量！加油！！<br>蔡穎<br>2020.04.11"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9984927,40.7142315 ]
    },
    "properties": {
    "titleL":"Hop Lee ",
    "name":"Sara Graham",
    "photo":"images/wow_hoplee_E.jpg",
    "year":"2020",
    "address":"16 Mott St, New York, NY 10013 USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9944643,40.718143 ]
    },
    "properties": {
    "titleL":"Good Century Cafe",
    "name":"Rachel Skipor",
    "photo":"images/wow_goodcenturycafe_E.jpg",
    "year":"2020",
    "address":"243 Grand St, New York, NY 10002 USA",
    "siteType":"Letter",
    "translation":"親愛的好世紀大餅屋，<br><br>您的店是第一家我在唐人街吃的點心屋，而現在變成我在紐約的最愛之一。紅豆芝麻球是我的必點—— 完美的脆皮、柔軟的內餡以及令人驚豔的甜地如此剛好的紅豆餡。當我第一次點它時，我是從來沒有吃過這種點心，因此當我一口咬下時讓我非常吃驚：爽脆外皮的口感瞬間轉化為如此美味的黃金內餡！我因我的驚嚇而笑了出來，而現在我可以說紅豆芝麻球是我最喜歡的點心呢。<br><br>您的店證明了各行各業的人都能品嚐且愛上一種未知美味。當我一走進去，馬上有笑臉與通明的霓虹燈來問候迎接，雖然我不認識任何人，但我跟其他的顧客比鄰而坐，彷彿回家與親人聚餐一般。您的餐點無與倫比，且更重要的是，您的精神亦是如此無與倫比。我看著各式各樣的人帶著燦爛的笑容走進店來，這正是證明了在好世紀大餅屋中蓬勃的人性之美。我遇見了京劇的歌唱、孩子的笑聲及回家的感覺。我告訴所有的親朋好友們，如果你們來拜訪我，我們一定得去好世紀大餅屋。您的店增添我一日的歡樂，當隔離結束後，將是我第一個駐足之地。<br><br>從哈林致上我的愛！<br><br>祝您平安喜樂健康，<br>瑞秋\n"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.993694,40.7141225 ]
    },
    "properties": {
    "titleL":"Fong Inn Too",
    "name":"Gordon Ng",
    "photo":"images/wow_fongintoo_E.jpg",
    "year":"2020",
    "address":"81 Division St, New York, NY 10002",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9969739,40.7125434 ]
    },
    "properties": {
    "titleL":"Mei Yu Spring Restaurant",
    "name":"P. Wong",
    "photo":"images/wow_meiyuspring_E.jpg",
    "year":"2020",
    "address":"29 Catherine St, New York, NY 10038 USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9983645,40.7162248 ]
    },
    "properties": {
    "titleL":"Big Wong",
    "name":"Cindy Tsang",
    "photo":"images/wow_bigwong_Ejpg",
    "year":"2020",
    "address":"67 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9904984,40.7141913 ]
    },
    "properties": {
    "titleL":"Happy Star Bakery",
    "name":"D Zhou",
    "photo":"images/wow_happystarbakery_E.jpg",
    "year":"2020",
    "address":"160 E Broadway, New York, NY 10002",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9949693,40.7174809 ]
    },
    "properties": {
    "titleL":"",
    "name":"Ko Im",
    "photo":"images/wow_KoIm_E.jpg",
    "year":"2020",
    "address":"101 Bowery, New York, NY 10002, USA",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9985519,40.714614 ]
    },
    "properties": {
    "titleL":"Forsyth Street",
    "name":"Clara Nguyen",
    "photo":"images/wow_forsythstreet_E.jpg",
    "year":"2020",
    "address":"28 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9961892,40.7187961 ]
    },
    "properties": {
    "titleL":"TCM Pharmacy",
    "name":"Elizabeth Grady",
    "photo":"images/wow_tcmpharmacy_E.jpg",
    "year":"2020",
    "address":"211 Grand St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.999160, 40.717942 ]
    },
    "properties": {
    "titleL":"Kam Hing",
    "name":"King Saturday",
    "photo":"images/wow_kamhing_E.jpg",
    "year":"2020",
    "address":"118 Baxter St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"" , 
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9992513,40.7180353 ]
    },
    "properties": {
    "titleL":"Kam Hing",
    "name":"Aaron Reiss",
    "photo":"images/wow_AaronReiss_E.jpg",
    "year":"2020",
    "address":"118 Baxter St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"尊敬的費爾南多 和麵包店的各位先生,<br><br>我和我的妻子 在墨西哥城住了六個月。 現在整個城市都已關閉，我們正在隔離-我們不離開房子。<br><br>這些天，我在想我在紐約，唐人街的生活……當我們住在您的麵包店上的時侯。 每天我都閱讀紐約市的新聞，我知道這座城市和我們附近的居民都在痛苦中。 我只想寫信告訴你，我想念每天去商店買咖啡和蛋糕的地方。 您是否可以購買任何東西（例如禮券、襯衫或帽子）來支持這家商店？<br><br>我希望您和您的家人都安全健康，這與現在的所有人一樣多。<br><br>擁抱，<br>李然（Aaron Reiss)<br><br>Dear Fernando and all the gentlemen of the bakery,<br><br>My wife (Lizzie) and I have been in Mexico City for six months. Now the entire city is closed, and we are in quarantine - we do not leave the house.<br><br>These days, I am thinking about my life in New York, in Chinatown ... when we lived above your bakery. Every day I read NYC news and I know that the city and our specific neighborhood is in pain. I just want to write to tell you that I miss going to the store every day to buy a coffee and a cake. Do you have anything (like gift certificates, shirts, or caps) that we can buy to support the store from here?<br><br>I hope that all of you and your family are safe and healthy ... as much as anyone can be these days.<br><br>With hugs,<br>Aaron Reiss"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9965698,40.7195166 ]
    },
    "properties": {
    "titleL":"Pho Bang Restaurant",
    "name":"Peter Luo",
    "photo":"images/wow_phobang_E.jpg",
    "year":"2020",
    "address":"157 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9984128,40.7154157 ]
    },
    "properties": {
    "titleL":"New Shanghai Deluxe",
    "name":"Michelle Ling",
    "photo":"images/wow_shanghaideluxe_C.jpg",
    "year":"2020",
    "address":"50 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9934222,40.7170028 ]
    },
    "properties": {
    "titleL":"Spicy Village",
    "name":"Joyce Keokham",
    "photo":"images/wow_spicyvillage_E.jpg",
    "year":"2020",
    "address":"68 Forsyth St B, New York, NY 10002",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9933339,40.7150682 ]
    },
    "properties": {
    "titleL":"Super Taste Gallery ",
    "name":"Mimi",
    "photo":"images/wow_supertastegallery_E.jpg",
    "year":"2020",
    "address":"26 Eldridge St, New York, NY 10002",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9981417,40.7154034 ]
    },
    "properties": {
    "titleL":"Chinatown Ice Cream Factory",
    "name":"Jenny Chang",
    "photo":"images/wow_icecreamfactory2_C.jpg",
    "year":"2020",
    "address":"65 Bayard St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9979923,40.7155666 ]
    },
    "properties": {
    "titleL":"Mei Li Wah ",
    "name":"Jenny Chang ",
    "photo":"images/wow_meilwah_C.jpg",
    "year":"2020",
    "address":"64 Bayard St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998186,40.714509 ] 
    },
    "properties": {
    "titleL":"Nom Wah Tea Parlor ",
    "name":"Jenny Chang ",
    "photo":"images/wow_nomwahteaparlor_C.jpg",
    "year":"2020",
    "address":"13 Doyers St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9982591,40.7144578 ]
    },
    "properties": {
    "titleL":"Nom Wah Tea Parlor 2",
    "name":"Wendy Amengual Wark",
    "photo":"images/wow_nomwahteaparlor2_E.jpg",
    "year":"2020",
    "address":"13 Doyers St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9993157,40.7175486 ]
    },
    "properties": {
    "titleL":"Baxter and Canal St",
    "name":"Anvita Pandit",
    "photo":"images/wow_baxtercanal_E.jpg",
    "year":"2020",
    "address":"Baxter St and Canal St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.8250952,40.7359744 ]
    },
    "properties": {
    "titleL":"Flushing Chinatown",
    "name":"Clara J Lu",
    "photo":"images/wow_mainst_E.jpg",
    "year":"2020",
    "address":"Main St, Flushing, NY 11367",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9988635,40.7138556 ]
    },
    "properties": {
    "titleL":"Buddha Bodai Restaurant",
    "name":"Vincent Chong",
    "photo":"images/wow_buddhabodai_C.jpg",
    "year":"2020",
    "address":"5 Mott St, New York, NY 10012",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9982153,40.7164064 ]
    },
    "properties": {
    "titleL":"Ten Ren's Tea Time",
    "name":"Joey La Bella",
    "photo":"images/wow_tenren_E.jpg",
    "year":"2020",
    "address":"75 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9969545,40.7155894 ]
    },
    "properties": {
    "titleL":"88 Lan Zhou Handmade Noodles",
    "name":"Apimanee Bulsombut",
    "photo":"images/wow_88lanzhou_E.jpg",
    "year":"2020",
    "address":"40 Bowery, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9988604,40.71489 ]
    },
    "properties": {
    "titleL":"Harold L. Lee & Sons Inc.",
    "name":"Rebecca Lee",
    "photo":"images/wow_haroldllee_E.jpg",
    "year":"2020",
    "address":"67 Pell St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
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

// var panMarkers = L.geoJson(myPoints, {
			// onEachFeature: function (feature, layer) {
			// }
		// });

var markersLayer = new L.LayerGroup(); // NOTE: Layer is created here!

function addMarkersForYearAndSiteType(aYear, aType, anIcon) {
  var geojsonLayer = L.geoJson(myPoints,{
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
  var geojsonLayer = L.geoJson(myPoints,{
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
var translationText = document.getElementById("translationM");


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
    $('.translation').text(feature.properties.translation)
    $('.year').text(feature.properties.year)
    $('.titleL').text(feature.properties.titleL)
    $('.address').text(feature.properties.address)

  //Pop ups on mousein
    this._popup.setContent("<center>" + "<strong>" + feature.properties.titleL + "</strong>" + "</br>" + feature.properties.address + "</br>" + "</br>" + "<img style = height:155px; src=" + feature.properties.photo + ">" + "</center>")
    });
    layer.on('mouseout', function (e) {
      e.target.setIcon(iconLetter);
      this.closePopup();
    });
 
  //On Click
	layer.on("click", function(e){
    // console.log(layer);
    // console.log(feature.properties.siteType);
    // Pan map to center clicked icon
      // map.panTo(new L.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]), {animate: true, duration: 1.0});
    //Create Modal
      modal.style.display = "block";
      modalImg.src = this.feature.properties.photo;
      captionText.innerHTML = "A Love Letter to " + this.feature.properties.titleL + "</br> by " + this.feature.properties.name + "</br> Year Posted: " + this.feature.properties.year+ "</br> Address: " + this.feature.properties.address;
      translationText.innerHTML = "<center>" + "<strong>" + "Translations / " + "</strong>" + "翻譯" + " </center>" + "</br>" + this.feature.properties.translation;
      console.log(modalImg.src);
	});
}; 

// Get the elements that closes the modal
var mClose = document.getElementsByClassName("close")[0];
var mModal = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
  mClose.onclick = function() {
    modal.style.display = "none";
  }

//Does this work? If you click outside the modal, the modal closes
  mModal.onclick = function() {
    modal.style.display = "none";
  }