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
	minZoom: 15
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
       "coordinates":  [ -73.9983645,40.7162248 ]
    },
    "properties": {
    "titleL":"Big Wong",
    "name":"Cindy Tsang",
    "photo":"images/wow_bigwong_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"67 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的唐人街，<br><br>我在紐約沒有親戚，但是我有你。每次和家人去紐約都會去到唐人街，去到我們最喜歡的店。感覺彷彿是在和大旺（Big Wong）叔叔、金興（Kam Hing）爺爺還有可可   （Coco）表妹打招呼。<br><br>我上大學的時候，沒辦法坐四小時的巴士回家，所以我會搭四十分鐘的火車去找你，讓廣東話的聲音撫慰我想家的情緒。有時我會和我的朋友一起去找你，他們也會把我介紹給他們的親戚們，比如阿里麻麻（Alimama）阿姨和龍門（Lung Moon）婆婆。每次水果攤都給我太多，讓我拿不下。<br><br>謝謝你給了我一個家也給了我愛。我們可以把現在稱做是前所未聞的時刻，但唐人街曾經渡過過數不清的困難。我知道你也會渡過這次的。我們支持你！<br><br>與愛，<br>曾詠思（Cindy Tsang)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998232,40.71619 ]
    },
    "properties": {
    "titleL":"Big Wong",
    "name":"Charlene Wang",
    "photo":"images/wow_bigwong2_E.jpg",
    "photoPost":"images/wow_CharleneWang_P.jpg",
    "year":2020,
    "address":"67 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"大旺 「Big Wong」，<br> 我想念你们的雲吞麵。每次媽媽來紐約市時，她都想去大旺因為你们的雲吞麵有家的味道。現在我吃那碗雲吞麵也會想到我的媽媽。<br><br>有一次我一個人去大旺，你們的一個服務員 「我叫他叔叔」記得我，記得前一次我是和爸爸、妈妈、姐姐一起去的，也記得我們點了什麼菜。<br><br>我很驚訝你們雖然一天有幾千個客人，可是還是認得我。我很感動因為我覺得我又被注意到也成為了大旺所有顧客中的一位。<br><br>我上一次去大旺是三月七號，也是在所有店都關掉之前。我點了一碗皮蛋瘦肉粥，我的先生點了烤鴨湯麵，我們還分了一份叉燒。我看到牆上的海報推的是薦龍蝦伊麵。本來想點的，可是當時感覺有點奢華而且我們也點很多別的了。<br><br>在我們傍邊的常規客人不是中國人有疑問一位叫「阿叔」的服務員在那裡。他說每個禮拜都會帶他的女兒到大旺 吃飯，很意外沒有看到「阿叔」。另外一位服務員說十四年沒有休過假的「阿叔」因為疫情導致生意不是很好，終於決定休息一下。<br><br>我聽著有點難過，可是也為「阿叔」開心。我和我的先生三月七號去大旺吃飯就是為了支持被疫情在種種方面影響到的華人生意。<br><br>我很愛大旺的環境氣氛，感覺很像家，很舒適。它就像紐約城的一個避風港，在這裡我能夠享受一頓美味的飯。<br><br>我很迫不及待想再到大旺吃飯，想見「阿叔」，而且我會點一碗雲吞麵、一份叉燒、一些炸兩、還有龍蝦伊麵。<br><br>愛，<br>汪曉寧<br>Charlene"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998498,40.716284 ]
    },
    "properties": {
    "titleL":"Big Wong",
    "name":"Anonymous",
    "photo":"images/wow_bigwong3_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"67 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.996165,40.718846 ]
    },
    "properties": {
    "titleL":"Kamwo Meridian Herbs",
    "name":"Emily Siy",
    "photo":"images/wow_kamwo_E.jpg",
    "photoPost":"images/wow_EmilySiy_P.jpg",
    "year":2020,
    "address":"211 Grand St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的加味：<br>語言不能表達我對你們所有人和你們在這段時間來所付出的一切的感激。我想念來店裡拿我定期的草藥和針灸用材。我想念你們所有人的臉！感謝你們辛苦的勞動！"
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
    "photoPost":"",
    "year":2020,
    "address":"211 Grand St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的唐人街，<br><br>我想你！從我最喜歡的在中草藥行——葛蘭街上的Kamwo Meridian Herbs，到我最常去的越南餐廳——巴士特街上的Nha Trang One，我很難過你們經歷的困難。我的心還想到在美華人博物館，他們接連經受了一個又一個毀滅性的損失。<br><br>自從我搬到紐約以來，唐人街一直是我和我來遊覽的家人必去的地方。那種活力、文化、美食、街頭生活於世界上任何一個地方都不一樣。當W.O.W.計畫在永安和啟動了的時候，那感覺如同兩個幻想世界合二為一了：社會參與藝術和唐人街特有的華裔文化。<br><br>我等不及去見你了，去漫步你的街道，和你的居民寒暄，最重要的是光顧你的商鋪。<br><br>堅持住！你被深深地愛著！<br><br>你真誠的，<br>伊莉莎白"
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
    "name":"Ying Cai",
    "photo":"images/wow_icecreamfactory_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"65 Bayard St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的華埠雪糕行，<br><br>我最快樂的夏天裡有您的芋頭冰的滋味。<br><br>我在密西根長大，我的雙親也在密西根。當我的母親來紐約市探望我時，那是她第一次能在美國嚐到芋頭冰。<br><br>當我們吃著您的芋頭冰，她說真是美味！<br><br>Ying Cai"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998178,40.715356 ]
    },
    "properties": {
    "titleL":"Chinatown Ice Cream Factory",
    "name":"Jenny Chang",
    "photo":"images/wow_icecreamfactory2_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"65 Bayard St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"我們愛華埠雪糕行！"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.999159,40.717998 ]
    },
    "properties": {
    "titleL":"Kam Hing",
    "name":"King Saturday",
    "photo":"images/wow_kamhing_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"118 Baxter St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"給唐人街的情書<br><br>致擺也街金興小吃店的人們<br>他們有“全城最好吃的海綿蛋糕”<br><br>致平記，他妙極了的牛肉乾，<br>在巨大的玻璃罐裡儲存著，<br>櫃檯後一張全家福，<br>摩比利街上一道紗窗門<br><br>致北方鍋貼的阿姨，她臉上有顆痣，<br>她餵飽放學後的小朋友們，<br>她好心地讓我用了廚房裡的衛生間<br><br>致且林士果希臘餐廳的拉裔服務生，<br>看到我帶了自己的楓糖漿的時候她放聲大笑<br><br>致美麗華的工作人員，穿著他們橙色的上衣，<br>從天花板上拽下一條條絲帶，來包裝西餅的盒子，<br>並跟唱粵語強力芭樂<br><br>致東百老匯街上的日本便利店，<br>蒸紅薯和，<br>炎熱夏日裡的新鮮西瓜汁<br><br>致12街角（12 Corners）咖啡店的害羞咖啡師，<br>一片在蔬果生鮮混亂中的綠洲<br><br>致K&K折扣店的老夫妻，<br>他們微笑著幫我們找到了我們新公寓<br>所需要的一切<br><br>致勿街上可愛的文具店，<br>整牆的紅信封，<br>還有適合任何場合的問候卡<br><br>致巴士特街上的芽莊越南餐廳<br>完美的湯底，真的<br>讓我屏息<br><br>致新有機花園（Sun’s Organic Garden)，<br>她乳香四溢的烏龍<br>和數不盡的菊花<br><br>致在中央預訂（Central Booking）前聚集的無家可歸的人們，<br>盡最大的努力在人行道格柵上保持溫暖<br><br>致哥倫布公園裡的一隻連著一隻抽煙的老年人圈子<br>致那個把她嬰兒推車抬上五層台階的女人<br><br>致那對還住在六層的老夫妻<br><br>致那個夜裡獨自坐白色校車的孑身囚徒<br><br>致那些互相問候的鳴鳥，<br>黎明時從籠中被放出，<br>在企李士提街和科西街之間的公園裡<br><br>致唐人街<br><br>我場合會永遠愛你。"
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
    "photoPost":"images/wow_AaronReiss_P.jpg",
    "year":2020,
    "address":"118 Baxter St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"尊敬的費爾南多 和麵包店的各位先生,<br><br>我和我的妻子 在墨西哥城住了六個月。 現在整個城市都已關閉，我們正在隔離-我們不離開房子。<br><br>這些天，我在想我在紐約，唐人街的生活……當我們住在您的麵包店上的時侯。 每天我都閱讀紐約市的新聞，我知道這座城市和我們附近的居民都在痛苦中。 我只想寫信告訴你，我想念每天去商店買咖啡和蛋糕的地方。 您是否可以購買任何東西（例如禮券、襯衫或帽子）來支持這家商店？<br><br>我希望您和您的家人都安全健康，這與現在的所有人一樣多。<br><br>擁抱，<br>李然（Aaron Reiss)<br><br>Dear Fernando and all the gentlemen of the bakery,<br><br>My wife (Lizzie) and I have been in Mexico City for six months. Now the entire city is closed, and we are in quarantine - we do not leave the house.<br><br>These days, I am thinking about my life in New York, in Chinatown ... when we lived above your bakery. Every day I read NYC news and I know that the city and our specific neighborhood is in pain. I just want to write to tell you that I miss going to the store every day to buy a coffee and a cake. Do you have anything (like gift certificates, shirts, or caps) that we can buy to support the store from here?<br><br>I hope that all of you and your family are safe and healthy ... as much as anyone can be these days.<br><br>With hugs,<br>Aaron Reiss"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998183,40.71447 ]
    },
    "properties": {
    "titleL":"Nom Wah Tea Parlor ",
    "name":"Jenny Chang ",
    "photo":"images/wow_nomwahteaparlor_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"13 Doyers St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"我們愛南華茶室！"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9982591,40.7144578 ]
    },
    "properties": {
    "titleL":"Nom Wah Tea Parlor",
    "name":"Wendy Amengual Wark",
    "photo":"images/wow_nomwahteaparlor2_E.jpg",
    "photoPost":"images/wow_WendyAWark_P.jpg",
    "year":2020,
    "address":"13 Doyers St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"給唐人街的情書<br><br>我會說話或走路之前（即使我仍然在人體內的時候），我的母親經常帶我們到唐人街。她不是中國人，也不是中國血統，但她是一個喜愛中國的人。她會說和讀一點普通話，練習《易經》，畫中國古典風格的水彩畫，並且會做很多中式飯菜跟我們9個小孩子當作過擔任副廚師長。<br><br>在唐人街的餐館吃飯飯的時候，店主和廚師總是出來熱情地問候她。我們從來沒有得到過菜單，而是飽嚐了飯店的房子的特色菜。 （70年代初，她在紐約市勞工部唐人街人力項目工作而、因此聞名。她反對了血汗工廠的工人虐待，並與雇主合作開發和僱用唐人街的熟練員工。）其他就餐者當我的母親（一個高大，白色，草莓金發）與中文工作人員交談和她的孩子們用筷子吃（大部分的）菜 的時後，會驚訝地看著我們。<br><br>購物後的一種享受是去南華茶室（Nom Wah Tea Parlor) 品嚐驚人的甜點（我最喜歡的是蓮蓉包！）。這是南華茶室成為一家時尚的連鎖店之前！我也喜歡和她一起去中醫買中藥。儘管我聽不懂他們說的話，但我母親對醫生的忠告和真誠的敬意使我印象深刻。<br><br>時至今日，我在唐人街的時後很舒適，我從地鐵站出來的那一刻的熟悉，並受到餐館，路邊攤和露天魚市場發出的強烈氣味的歡迎。我想要一切！我希望居民知道我並不是遊客，而是一位將唐人街視為我的特殊地方之一的地道的紐約人，即使遊客爭相購買「仿製」錢包，也擋住了我的忙碌去買一點北京烤鴨、叫化雞或點心。<br><br>我個人為無知大膽地攻擊我們的鄰居的種族主義者和仇恨者的冒犯和激怒。在任何時候，尤其現在這場危機之中，這都是應受譴責的。在COVID-19大流行期間，至關重要的一點是，我們所有人必須團結在一起，在安全，遠離社會的空間中相互支持，包容和同情。不要以這種病毒為藉口成為我們最糟糕的自己。<br><br>溫迪（Wendy Amengual Wark）<br><br>2020年4月14日<br><br>紐約市"
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
    "photo":"images/wow_haroldllee_E.jpg ",
    "photoPost":"",
    "year":2020,
    "address":"67 Pell St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的唐人街，<br><br> 您是，並將永遠是我的第一個家。 成長的是時間，我的家人住在 165 Park Row。 我的唐人街就是莫特街。<br><br>（Mott ）和鮑里街（Bowery）之間的幾個街區，就在河岸和直到運河上。小時候，唐人街是我的遊樂場，我的家園，整個宇宙。早上，我們從站在莫斯科街（Mosco Street）頭的小吃攤那個女人買香港蛋糕。 我喜歡看她將麵糊倒入模具中，期待著等到麵糊烤好為止。 我品嚐了每個甜甜的麵團，外皮酥脆，內裡又熱又蓬鬆，一一撕下來. 然後，我們步行到佩爾街（Pell Street）上的我家的旅行社哈羅德·李父子（Harold L. Lee＆Sons），人們更稱其為Lee Travel。 儘管為我設置了一個遊樂區，但我還是喜歡和大人在一起，並做好一天的工作。不到六歲的時候，我會盡力計算剩餘的零錢，並自豪地向老闆，我的祖母，宣布總數。 我最喜歡的工作是從打印機取回仍然溫暖，新鮮打印的票證，然後自己將其交付給客戶。<br><br> 在旅行社中長大，這個世界在字面上和形像上都觸手可及，就像您可以將手指劃過一條飛行路線並進入另一個國家一樣。 我夢想著長大後成為旅行社，幫助人們在不同的地方和文化之間無縫移動。<br><br>在一天中的某個時候，我會把手寫的便條交給我的祖母 ‘I AM HANGRY’，它可以輕鬆地翻譯為「我們吃飯吧！」<br><br>我們會過馬路，在上海喬（Joe Shangai) 吃午餐，一下雞蛋麵湯，耐心地等我們的小籠包冷卻下來。 多年後，我想到我仍然不知道如何在一家中國餐館點菜。 我一生都和祖母一起在中國餐館吃飯，任何認識祖母的人都知道她會點菜，付款，這也不例外。<br><br>午餐後，我們將前往 Bayard街上的唐人街冰淇淋工廠（Chinatown Ice Cream Factory）。我最喜歡的冰淇淋口味是南瓜，而且現在將永遠是南瓜。我媽媽說這是因為她懷著我的時候喝了南瓜奶昔。我想我只是在跟隨她的領導。下午，我們可能會去美國華人博物館，有一次我的家人在這裡做了一個完整的展覽，專門展示了我們在紐約唐人街的百年曆史。有時，我們會走到桑樹葬場（Mulberry），那裡是所有儀館的地方，然後去馬路對面的操場，看著年長的孩子打籃球，成排的老人打多米諾骨牌。<br><br>也許我們會拜訪Wing＆Wo的朋友。擁有這家商店的Lum家族是我們在Park Row的鄰居，和我年齡相仿。或者我們去位於Doyers的Ting的禮品店，在那裡我和店主的孫女一起逛逛。儘管我們倆看上去都更像黃色騎兵，但我們會看著Power Rangers並爭奪成為粉紅色騎兵的人。<br><br>有時候，祖母會帶我整個下午去美容院。 我喜歡閉上眼睛，向後傾斜，洗頭，雙手保持節律平穩，揉捏頭皮，仔細清洗耳朵後面的感覺，感受溫暖，肥皂水的感覺。 我喜歡閱讀青少年雜誌，很少有英文雜誌適合我。 即使我聽不懂任何東西，我也喜歡和理髮師一起聽我的祖母八卦。 這是我最早的一種儀式，一種冥想方式。<br><br>我7歲那年，我的家人搬到了海灘附近的新澤西州（New Jersey)，我父親曾經在那裡度過家庭假期。 突然之間，不是每個人都是中國人。 並非所有人都積聚塑料袋子以便以後再使用。 不是每個人都有一個電飯鍋！<br><br>我們經常回到唐人街。 我們在宴會上慶祝農曆新年，舞龍舞，大型懶惰的蘇珊和太多的蛋撻。 我仍然和祖母在同一家美容院剪頭髮。 我在莫特街（Mott) 和佩爾街 (Pell) 的拐角處的裁縫處改了初中的舞會禮服。<br><br>多年後，我大學畢業後，搬回紐約市。 我在北京烤鴨慶飯店 (Beijing Kaoya) 祝生日，邀請我的大學朋友去見祖母。 她喜歡主持所有人，在每個地點設置帶有信封的清晰可見的5美元鈔票的紅包，一個又一個地訂購直到我們連一個菜都看不到為止，再把剩下的剩菜送到我們家，這將持續一周。<br><br>我不能給唐人街寫情書，更不用說我只有一半的中國人。有趣的是，當您的任何部分都感覺不到一半時，您只是‘一半’。當人們問我是否是中國人時，這仍然讓我感到驚訝。對我來說，感覺是如此顯而易見，就像我無法做到的那樣。<br><br>我當然是中國人。不，我不會說中文。不，我從未在中國居住過。但是我有一個筷子抽屜。我把現金放在床頭櫃的紅色信封裡。我在葬禮上鞠躬三次。對於表單上的「亞洲」選項，我不會三思而後行。當人們取笑中國口音時，我的胸口被刺傷。我姓李。我多次被問到我是否與李小龍有關係。這還不夠嗎？當我20多歲時，我的整個大家庭與祖母一起前往上海，看看她在法租界里長大的地方。從人口密度到對個人空間和情感的不同定義，來到中國立刻感到如此陌生和熟悉。我可能不懂該語言，但是在某種程度上，我了解了這種文化。<br><br>成為中國人可能總是讓我感到陌生，但是來自唐人街是我找到家的身份。今天，我發現自己回到了另一個「唐人街。」 我住在舊金山，日落在外地（Outer Sunset)，中國人口眾多 的鄰里。 角落裡有中國報紙，圖書館後面是太極拳的婦女，我這一天最艱難的決定是去吃川菜還是去餃子館。最近，當我在附近逛街時，偶然發現了一家出售香港蛋糕的咖啡館。 在街上稍遠處是一個叫 Polly Ann's 的冰淇淋店。 當我瀏覽廣泛的菜單時，我感到一陣懷舊之情湧向我。<br><br>’請給一個南瓜冰淇淋。"
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
    "photoPost":"images/wow_ParkerLimon_P.jpg",
    "year":2020,
    "address":"121 Bowery, New York, NY 10002",
    "siteType":"Letter",
    "translation":"信興超級市場，<br>我想念你！<br><br>致上我的愛，希望很快與你相會。"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998842,40.714988 ]
    },
    "properties": {
    "titleL":"Save Our Chinatowns",
    "name":"Paulina Ho ",
    "photo":"images/wow_PaulinaHo_E.jpg",
    "photoPost":"images/wow_PaulinaHo_P.jpg",
    "year":2020,
    "address":"Mott St & Pell St, New York, NY, 10013",
    "siteType":"Letter",
    "translation":"保存我們的唐人街！<br><br>外賣！<br><br>世界上還剩下那一些地方有齊小籠包，紅毛丹，和波羅蜜賣？世界上還剩下幾個髮型師真的能了解我的髮質呢？世界上還剩下那一個地方能給我所有前面提到的，還有一顆非常強的環保心？"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9993157,40.7175486 ]
    },
    "properties": {
    "titleL":"Nha Trang One",
    "name":"Anvita Pandit",
    "photo":"images/wow_nhatrangone_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"87 Baxter St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"至茅莊越南餐館 (Nha Trang One)<br><br>在中央公園（Central Park）的我 <br>站在一塊荒凉的石頭上<br>像一只大的鴿子，把頭包裹在外套裡<br>烟雨蒙蒙的天氣，如此的灰與冷<br>而我不能宅在室內<br>因為只有三天能夠享受紐約的生活<br><br>一位年輕的男子像我而來<br>只比我大幾歲的他問我有沒有事 （我沒事）<br>於是邀請我去同他共享晚餐<br><br>我隨著他來到了 巴士特街和堅尼街 的交叉口（Baxtor and Canal Street）<br>（我當時记住了路名）<br>到了他最愛的越南河粉店<br>當時，那裡對我並沒有重要性<br>現在，那也成為了我最愛的河粉店<br><br>我們看著對方，吃著面前大碗的豬排河粉<br>當然是我燙到了自己的舌頭<br>坦率地說<br>他好像對我的無趣有點失望<br>我是他在雨中從石頭上挽救的陌生女孩<br>可能是因為他悲慘的分手了<br>想像一個自殺的意念<br>「少女從中央公園的石頭上墜落」<br>他通過越南河粉救了我的命<br>不幸的是我們沒有共同語言<br><br>他提先走了<br>我吃完了我的河粉<br>也偷偷的吃了他的豬肉<br>和最初一樣，我還是一個人<br>但是暖了很多，很多。<br><br>avita pandit"
    }
  },
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
    "photoPost":"images/wow_BonnieTse_P.jpg",
    "year":2020,
    "address":"106 Mosco St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"送给在莫斯科街上的一间水饺店（它以往曾经常的关顾我们）：<br><br>感谢你在我和我的哥哥在儿时常为我们张开关懷的大门。我们那时大概是九岁与十二岁，仍在显圣客天主教学校上学。在六时放学后，我们自己步行到你的水饺店中，享用你的美味饺子，豆浆，酸辣汤。在那年纪，我们还未能够自己步行回家，我们只能在食完饺子后，停留在你的店中，等待我们的父母来接我们回家。<br><br>我记得我们经常地到你的店中等待。有一段长日子。在那时，我们时常看着你跟厨子们努力地弄饺子。回忆中，我们呆坐你店中都有一段长时间，但你从来都没有叫我们离去，好让我们安全留在你店中等侯父母。为此，我们万分感谢你们。<br><br>近日疫情中，你的饺子店及你附近的店铺都关门了，但这对你及你的员工的健康及安全都较好！在疫情下，健康最重要！<br><br>你的忠实顾客敬上"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.994808,40.718141 ]
    },
    "properties": {
    "titleL":"Chinatown",
    "name":"Jade Song",
    "photo":"images/wow_mottpell_E.jpg",
    "photoPost":"images/wow_JadeSong_P.jpg",
    "year":2020,
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
    "photoPost":"",
    "year":2020,
    "address":"238 Canal St #108, New York, NY 10013",
    "siteType":"Letter",
    "translation":"我們支持您！<br>「芳」改運風水珠寶水晶店<br>—— 一直惦記著您"
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
    "name":"Ying Cai",
    "photo":"images/wow_xinzhongshen_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"109 E Broadway, New York, NY 10002",
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
    "photoPost":"",
    "year":2020,
    "address":"16 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"親愛的合利大飯店，<br><br>我喜愛貴店的粉紅包廂和霓虹燈。店裡牆上的誘人食物照片、消防員與紐約市警察局的徽章都讓我欣喜，我相信他們也深愛著您。裝有鏡子的入口與水族箱跟植物們充滿魅力地招呼著我，透露著這是一個特別之地。<br><br>謝謝您讓我自帶酒精飲料。感謝您的優質服務—— 服務人員身著制式的紅外套，時刻關注著大家。美味營養的食物，我總是無法一餐享用完，帶著打包餐盒離去代表我還能再一次回味。貴店從來不令我失望，我等不及要盡快回去飽餐一頓。我的信念不變。<br><br>愛您的，<br>莎拉葛拉漢"
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
    "photoPost":"",
    "year":2020,
    "address":"243 Grand St, New York, NY 10002",
    "siteType":"Letter",
    "translation":"親愛的好世紀大餅屋，<br><br>您的店是第一家我在唐人街吃的點心屋，而現在變成我在紐約的最愛之一。紅豆芝麻球是我的必點—— 完美的脆皮、柔軟的內餡以及令人驚豔的甜地如此剛好的紅豆餡。當我第一次點它時，我是從來沒有吃過這種點心，因此當我一口咬下時讓我非常吃驚：爽脆外皮的口感瞬間轉化為如此美味的黃金內餡！我因我的驚嚇而笑了出來，而現在我可以說紅豆芝麻球是我最喜歡的點心呢。<br><br>您的店證明了各行各業的人都能品嚐且愛上一種未知美味。當我一走進去，馬上有笑臉與通明的霓虹燈來問候迎接，雖然我不認識任何人，但我跟其他的顧客比鄰而坐，彷彿回家與親人聚餐一般。您的餐點無與倫比，且更重要的是，您的精神亦是如此無與倫比。我看著各式各樣的人帶著燦爛的笑容走進店來，這正是證明了在好世紀大餅屋中蓬勃的人性之美。我遇見了京劇的歌唱、孩子的笑聲及回家的感覺。我告訴所有的親朋好友們，如果你們來拜訪我，我們一定得去好世紀大餅屋。您的店增添我一日的歡樂，當隔離結束後，將是我第一個駐足之地。<br><br>從哈林致上我的愛！<br><br>祝您平安喜樂健康，<br>瑞秋"
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
    "photoPost":"",
    "year":2020,
    "address":"81 Division St, New York, NY 10002",
    "siteType":"Letter",
    "translation":"親愛的唐人街，我與妳有關。或者更準確地說，作為一個第二代華裔美國人，我努力與妳有關。<br><br>家人恆定地在背景裡存在，這太容易被當成理所當然。你叛逆，你推離，而最終，有時太晚了才意識到，他們是你不可或缺的組成部分。然後一場重建聯繫、理解、學習你迫切的想要延續的傳統和習俗的賽跑開始了。<br><br>我的外婆曾作為一名裁縫在唐人街工作，幾十年之後，我的母親曾在幾個街區之外作為一名旅行社職員工作。我母親現在已經退休並搬到了市郊，而我的外婆於去年去世了。我有很多事情都沒來得及向我外婆學習，那些永遠也不會自己向我找上門的知識和菜譜還有迷信。我為了融入，與我的母親、外婆、從而和唐人街保持了距離。<br><br>我與妳的聯繫正在消逝——那些標誌了堅尼遊戲廳（Canal Arcade）的上海餐廳早就不見，在宏安（Fong Inn Too）買豆腐花的美好回憶已很久遠，彷彿一半都是想像出來的。我指不出那間舊影院曾經在哪裡，那時總會有人在售票亭旁發傳單。回到唐人街，我是一個參觀者、一個外來者，與遊客無異。我努力地想反轉這個情況，更多地參與到當地的組織中並支持更多的運動。<br><br>我說了這麼多，是想表達我真誠的祝願，希望你能在如今的情況下過得好，能平安地再次亮相，庇護和這場大病之前同樣的人們、生意、文化。我希望你好起來。關於你，我還要學習很多，而我本也只剛剛開始重聯。請多保重，快點好起來。<br><br>祝願你早日康復！<br><br>戈登（Gordon）"
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
    "photoPost":"",
    "year":2020,
    "address":"29 Catherine St, New York, NY 10038",
    "siteType":"Letter",
    "translation":"美如春 Mei Yu Spring 加薩林街29號<br><br>我記得我爸爸第一次帶我去美如春的時候。在清晨的陽光裡一切都很明亮。爸爸剛從我們康涅狄格郊區開車到中國城要度過一天。他想在高峰前到達市裡，但我們到得太早了，買點心的餐廳都還沒開門。我媽媽去辦事了，於是我爸爸看向我說：<br><br>想唔想去吃啲嘢呀？（想不想去吃東西呀？）<br><br>即使當時還很早，美如春裡的的女人們已經在忙來忙去了，她們在包餃子或站在滾燙冒煙的鍋旁。我聽見背後有更多的聲音在摻雜著福建話和普通話大喊。<br>我爸爸點了兩份鍋貼，然後我們在窗邊一桌坐下。<br><br> 這裡的鍋鐵好好吃吖！<br><br>談到食物，我把我爸爸的話當作是福音。他是個廚師，他會做世界上最好吃的菜，即使他原本想要做個木匠。他中國各個省份的菜都能做得很好，不僅僅是福州菜。<br>或許是因為晨光和我在開車前什麼都沒吃過的緣故，不過那是我作為一個十二歲孩子吃過的最好吃的餃子！<br>我爸爸做的餃子也很好吃。<br><br>但是有分別嘅（但是有區別的）：<br><br>美如春的餃子皮更薄，醃過的餡料口味豐滿。它們足夠小，你可以一口就吃進去，不會流失任何湯汁。而且，它們平平的底超級酥脆——完美的鍋貼。<br><br> 好吃呢？福州人開吖！（好吃嗎？福州人開的！）<br><br>過了這麼久，我依舊對美如春有著不減的忠誠。我最後一次去是在唐人街農曆新年遊行的前一天。我朋友和我為了一個活動買了多到誇張的食物。當我們帶著所有的吃的走到勿街的時候，我被背叛的心對我私語，說外帶包裝的擠壓會毀掉餃子酥脆的完美。下次吧，我嘆道。<br><br>我希望還能有下次。<br><br>P. Wong"
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
    "photoPost":"",
    "year":2020,
    "address":"160 E Broadway, New York, NY 10002",
    "siteType":"Letter",
    "translation":"致新奇士餅屋：<br>我愛你們的香腸包！我愛你們的凍鴛鴦！我愛你們的芋頭包！我愛去到你們店裡、然後帶著比我本來想買的更多的包離開！想你們！<br>週葭葭"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9949693,40.7174809 ]
    },
    "properties": {
    "titleL":"I miss you...",
    "name":"Ko Im",
    "photo":"images/wow_KoIm_E.jpg",
    "photoPost":"images/wow_KoIm_P.jpg",
    "year":2020,
    "address":"101 Bowery, New York, NY 10002",
    "siteType":"Letter",
    "translation":"我想你！總有一天，我們會在唐人街再次相見⋯⋯"
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
    "photoPost":"images/wow_ClaraNguyen_P.jpg",
    "year":2020,
    "address":"28 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":""
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
    "photoPost":"",
    "year":2020,
    "address":"157 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"Luv letters by Peter Luo<br><br>一、我剛搬到紐約<br>當我的父母把我帶到唐人街時，我感覺這裡和對角巷一樣神秘，因為你得穿過一條隱密的街巷（回頭來看，大概是宰也街和包厘街的交叉口，所以大概是全市最不隱密的“巷子”）然後在一個全新的車水馬龍的生態系統裡出現，而這裡的人全都和你長得一樣。<br><br>我的媽媽九十年代的時候在世貿中心工作，她在這裡表現得如同她熟識每一個人，從街上的水果販到餐廳的接待員。我覺得我彷彿被徵召入社，而她在把我介紹給我前世的老友。我的兄弟吃了一個在前面提到的水果舖買的荔枝而食物中毒，他就沒覺得如此激動。<br><br>我媽媽吃了一樣的荔枝，當晚後來又在史泰登島牛排屋解決掉了一條十二盎司魚排，什麼事也沒有地睡了一晚。<br><br>二、奇異的安慰<br>我當時在寫醫科大學的申請。我和我的同事們要在鵬牛肉河粉吃晚飯，所以我決定早點到那邊完成一些申請工作，因為我知道他們會吃很久。令人難過的是，我只有四美元現金，不夠去YaYa的，而我還忘了我的ATM密碼。我走到了大班餅店，買了只抹茶蛋撻和一個熱狗酥，然後就坐在勿街一家理髮店門口的臺階上開始寫作。<br><br>三、你怎麼可能不？<br>新冠病毒疫情在美國惡化的幾個月之前，我們幾個人來了唐人街。我的朋友和我早早就到了（第一個錯誤）麒麟金閣吃點心，但我們很快意識到其他人都會晚很多。我們已經很餓了，而且有些宿醉，所以我們去到了顯力街的津美吃了些鍋貼。看到他們有牛肉麵，我的朋友禁不住也點了一份。其他人到了的時候他已經吃完了一整碗面和一整份鍋貼，但我們吃完點心還是去了貢茶。<br><br>四、我也愛，但是沒有好故事：<br>絲路茶館，我在這兒躲了一場暴雨，結果還是得衝出去找ATM（此時我已經重設了密碼）<br>潭頭王福州小吃<br>華埠雪糕行<br>Soft Swerve （抹茶黑芝麻！！）<br>有那個瑪姬·辛普森的ViVi<br>Taiwan Bear House<br>Jing Fong<br>Amazing 66"
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
    "photoPost":"",
    "year":2020,
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
    "photoPost":"",
    "year":2020,
    "address":"68 Forsyth St B, New York, NY 10002",
    "siteType":"Letter",
    "translation":"我從不知你是否知道，你是我在整個紐約市的初戀⋯⋯但我的朋友都明瞭。他們會跟我一起等候，因為我跟他們保證你是值得一見。最後，我意識到其他人也愛著你，所以我放棄我們的晚餐約會。<br><br>我會早些前往，在你不太忙的時候，但一會兒不到，你那兒就大排長龍。出於愛，我放棄了跟你一齊入座。在夏天，你會給我一盤美食，偶爾我會坐在公園裡，微笑遙看著你門口那些也愛你入迷的人們。<br><br>冬季時，我會帶著從格蘭街燒肉串餐車的開胃菜去等你，一邊大啖美食，一邊打電話給我住附近、在附近工作的朋友們，訴說著我是如此愛你的手拉麵；訴說著等待內用的人是如此眾多以致於我得外帶；訴說著如果忍耐通車把這美食給帶回到遙遠的布魯克林，可就不好吃了；訴說著大福星河南燴麵館當場吃是多麽美味；訴說著我是怎樣需要暫時歇在我朋友家或工作地點，就為了大啖這餐美食。<br><br>看在我之前一直等你的份上，希望這次你也等等我吧！<br><br>喬伊斯 琪歐康"
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
    "photoPost":"images/wow_Mimi_P.jpg",
    "year":2020,
    "address":"26 Eldridge St, New York, NY 10002",
    "siteType":"Letter",
    "translation":"親愛的百味蘭州拉麵,<br><br>我的名字是朱希媛（咪咪），我想要感謝您一直養育飽足了我以及我們的社群。您表現了一個純粹又有力量的愛，保存且榮耀了我們的食譜與傳統歷史，而您無私地分享更是遠大。因為您以及您社群的辛勞，才能餵飽了這麼多人，我們才得以開始每一天忙碌的紐約生活。我希望您能瞭解到您是如此的重要，而我會盡我所能地幫助與報答您的寬宏大量。每次我在您餐廳用餐時，我彷彿返回到我的母親家中、回到我的祖先的源頭。<br><br>感謝您<br>致上我無盡的關愛<br><br>朱希媛（咪咪）"
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
    "photo":"images/wow_meiliwah_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"64 Bayard St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"我们爱美麗華茶餐廳"
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
    "photoPost":"",
    "year":2020,
    "address":"Main St, Flushing, NY 11367",
    "siteType":"Letter",
    "translation":"情愛的法拉盛唐人街（Flushing Chinatown), <br> <br>看著從前這裡充满生机的街道和社區變得如此安靜，讓從小在法拉盛長大的我很傷心。我愛這裡不同的美食和在法拉盛街頭亮麗的中國文化。我愛在這裡散步和尋找新的餐廳時，能夠聽到多樣化的語言和方言。我愛法拉盛能夠吸引來自紐約市不同區域的人，來品嚐這裡的美食風味。每次當我告訴別人法拉盛唐人街的中餐味道美味可口，令人惊奇，他們的贊同使得我很驕傲。我愛法拉盛唐人街能夠填飽我和我朋友的肚子，讓我們享受美味的港式點心，四川菜，上海菜，北京的餃子，各式各樣的奶茶，綠茶冰激凌，腸粉，還有多到我一輩子都不能想像的美食。 <br> <br>我愛從小到基督教青年会（YMCA） 的泳池 (Corona pool) 去上游泳課。每次上課我都會遲到，但是永遠會穿著我最心愛的游泳衣。我愛那個連著紐約科技館（New York Hall of Science）  的公園，皇后區夜市 (Queens Night Market) 也會在那裡舉辦。我愛這裡的人流量，多到路面都被重新修建，被擴大。我愛這裡的包容心，能讓新移民能夠在這裡住一輩子也不需要學英文，特別是中國人。他們能生活的開心，快樂。 <br> <br>Clara J Lu\n"
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
    "photoPost":"",
    "year":2020,
    "address":"5 Mott St, New York, NY 10012",
    "siteType":"Letter",
    "translation":"Buddha Bodai Restaurant「佛菩提素食餐廳」,<br><br>  I am really looking forward to the next time I can go there and have a meal! Keep it up (加油）!<br><br>Vincent Chong 「志明」 "
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
    "photoPost":"",
    "year":2020,
    "address":"75 Mott St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"我嘗試以不同方式寫這封信，但每一次都感覺大不如前。很少地方能從童年到長大成人都擁有一種迷人的魔力，不過唐人街是一個例外。<br><br>我表達愛意的最大挑戰是如何用一個（外貌是）白人女性的姿態說我愛你，但又不是要物化你的意思。<br><br>當我還小時，我媽有時會把我從學校裡拉出去來個「文化郊遊」，而所有郊遊的終站似乎總是在唐人街（但應該不是，不過小時的記憶可都是選擇性的），去唐人街的旅程一定都會去拜訪天仁茗茶（就跟老布希一樣！）。這裡的美味零食可沒辦法在郊區的保守超市買到，但最重要的是，這裡有三麗鷗公司的小飾品！而隔天我回去上學就會有著一種神秘的異國情調、手上拿著凱蒂貓原子筆。<br><br>我高中時，又是跟我媽一起，佛有緣點心的一位男士告訴我他喜歡我的氣場。我還是對他的平靜讚賞感到欣喜不已。<br><br>現在沒有我媽的陪伴，我不顧一切地拖著其他人去老虎堂黑糖專賣店買飲料。<br><br>在數不盡的唐人街之行中，我從沒感到孤單也很少被論斷，一直受到歡迎。我對你的愛無止盡。"
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
    "photoPost":"",
    "year":2020,
    "address":"40 Bowery, New York, NY 10013",
    "siteType":"Letter",
    "translation":"給唐人街的情書<br>布松芭 <br><br>清晨五點漫長愛睏的地鐵之行<br>我與克莉絲丁從東徹斯特到市政府<br>走下地下室的臺階<br>到了溫暖黃光的工作室<br>每個同伴的到來是<br>問候聲<br>打開著飛達西餅的餐包<br>準備就緒<br>一頭栽進貼襯與毛氈布裡<br>粉紅舞獅頭在慢慢進展中<br><br>有時我們出現時天色已暗<br>有時是潮濕下雨<br>街燈埋沒在水光中<br>有時是晚餐時刻<br>在粥麵軒享用著小籠包與魚丸麵<br>或是在福州日旺小食吃著餃子<br>我夢著佛菩提的茄子料理<br>心裡滿滿<br><br>思慕與愛<br>檸檬草與辣椒<br>青檸葉與洛神花<br>打開了我的胃口<br>啟動了節奏<br>聽著櫃檯那傳來阿姊阿哥的聊天<br>跟著韻律回到了家鄉<br>我想<br>這也許是不同的節奏吧<br>畢竟這裡是<br>我的另一個家"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.999002,40.716377 ]
    },
    "properties": {
    "titleL":"Mulberry Street",
    "name":"Tomie Arai",
    "photo":"images/wow_mulberrystreet_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.997606,40.718056 ]
    },
    "properties": {
    "titleL":"Rat",
    "name":"Yang You ",
    "photo":"images/wow_rat_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.999089,40.720063 ]
    },
    "properties": {
    "titleL":"Love to Chinatown",
    "name":"Toshi Reagon",
    "photo":"images/wow_brooklyn_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"給唐人街愛，<br><br>我已經在紐約住了三十多年，這期間我一直覺得被歡迎。感謝你向紐約人和全世界人敞開你的大門。也感謝W.O.W.計畫將唐人街社區的的傳統和未來昇華並保留。<br><br>W.O.W.計畫旨在通過藝術、文化、行動主義來培養、保護、及傳承中國城的創意文化，以延續對中國城未來的所有權。<br><br>這對於唐人街來說很美麗也很具體，但這可以啟發紐約市所有的社區。<br><br>平安——<br>Toshi Reagon<br><br>布魯克林，紐約<br>"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.000141,40.716214 ]
    },
    "properties": {
    "titleL":"We will be Reborn",
    "name":"RM",
    "photo":"images/wow_RM_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"2020-04-10 14-09 － by RM<br><br>我們將重生<br>只為了再次死去<br>這些街道還有脈搏<br>即使河流改變方向<br>就像陰晴圓缺<br>圓滿才會更加璀璨<br>對於失去的回憶<br>只是更多的層次<br>被車輪<br>印進土壤<br>未來的根<br>會在那兒找到我們<br><br>麥捷兒 4.10.2020"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73998728,40.717165 ]
    },
    "properties": {
    "titleL":"Canal Street",
    "name":"Kazumi Sakamoto",
    "photo":"images/wow_canalst_C.jpg",
    "photoPost":"images/wow_KazumiSakamoto_P.jpg",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.996142,40.716295 ]
    },
    "properties": {
    "titleL":"Scratch Paper",
    "name":"Charlene Wang de Chen",
    "photo":"images/wow_CharleneWangdeChen_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"加油！<br>這是我用草稿紙寫的，看到這個的婆婆和伯母們一定放心，我沒有多浪費紙張，我用的是家裡的草稿紙 ；）"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9938899,40.7183985 ]
    },
    "properties": {
    "titleL":"Eldridge Street",
    "name":"Laura Bennegadi",
    "photo":"images/wow_eldridgest_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"給這個社區和這個社區了不起的人們送去愛。我現在已經在愛烈治街住了四年了，一直以來都覺的很被接受和歡迎。請在這黑暗的時間裡堅持著、團結住！<br><br>祝好！<br>勞拉<br>愛烈治街二十四號<br><br>Laura Bennegadi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.994264,40.71562 ]
    },
    "properties": {
    "titleL":"Dearest Chinatown",
    "name":"Fanny Li",
    "photo":"images/wow_FannyLi_E.jpg",
    "photoPost":"images/wow_FannyLi_P.jpg",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"情愛的唐人街，<br><br>我是人生的後段才與你相見。事實是，我當時很緊張因為不知道你會不會喜歡我，接受我和包容我。 <br><br>當時的我不知道你的語言，你的风格，你的顏色，你的味道，你的習俗，你的形狀，你的曲線。<br><br>我怕被排斥，讓紐約唐人街變成另一個我不屬於的地方因為我不夠「亞裔」。我的心承受不了這種拒絕，我接受不了。<br><br>但是你，你坦然的接受了我，我也溶解在你的擁抱裡。像菠蘿包裡的黃油，你的愛和溫暖讓我進入了你甜美的懷抱中。<br><br>你挑戰了我，讓我給自己留空間，鼓勵我做自己。我接受了。<br><br>現在我要挑戰你，为了我们，为了历史，为了未来，保持冷靜和龐大的适应能力。<br><br>请原谅我又一次离开那么久。像上一次，我约定我会回来的。不一样的是，我会不顾一切的做自己。<br><br>希望你们能休息一下，保持安全。<br><br>等我们再次相遇， <br>李永霖<br>Fanny"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.9944219,40.717668 ]
    },
    "properties": {
    "titleL":"Grand Street Park",
    "name":"Aaron Tian",
    "photo":"images/wow_grandstreetpark_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"格蘭街共 Aaron Tian<br><br>在格蘭街公園的長椅上<br><br>華豐燒豬燒鴨在我膝頭咸甜的香氣在我旁邊長椅上<br>坐著打牌的老人之間漂浮<br><br>孩童姐妹兄弟們在跑道上比賽在同一個呼吸中打鬧、吵嚷、大笑<br>像初生的小狗一樣互相絆倒<br><br>穿著卡其褲戴著遮陽帽的奶奶們<br>對著一個2002年的CD音箱跳舞<br>動作（幾乎）完美地和諧<br><br>在我遇到我對象的那個長椅<br>（至少是我們第一次講話的那次）<br>兩個長椅開外，喝著功夫茶的香芋冰沙<br>至今仍是我的最愛<br><br>在水泥球場<br>我曾看到幾個八十歲的男人<br>強力擋拆幾個筋肉分明的男大學生<br><br>手球場，猖狂地揮動臂膀和雙手，<br>我或永遠不會理解，但一直都將敬佩<br><br>如此熟悉如此特別的唐人街<br>現在似乎遠在一個世界以外<br>我第一次墜入愛河的地方<br><br>在格蘭街公園的長椅上"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.991156,40.713997 ]
    },
    "properties": {
    "titleL":"When I first visited Chinatown",
    "name":"Jessica Laus",
    "photo":"images/wow_JessicaLaus_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"當我第一次拜訪唐人街時，我被那強烈的社區意識所感動。<br>我的心與你同在。<br>很快與你再相會。"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.0000064,40.7132561 ]
    },
    "properties": {
    "titleL":"Thank you Chinatown",
    "name":"Jocelyn Ueng",
    "photo":"images/wow_JocelynUeng_E.jpg",
    "photoPost":"images/wow_JocelynUeng_P.jpg",
    "year":2020,
    "address":"3 E Broadway, New York, NY 10038",
    "siteType":"Letter",
    "translation":"情愛的唐人街，<br><br>謝謝你。<br>謝謝你的精神。<br>你的力量。<br>你的巨大的影响力<br>你的情谊。<br>你的正直。<br>你的坚持不懈和抵抗力。<br>你的威力<br>最重要的是，你的适应能力。<br>你的烤鴨。<br>你的點心和茶飲。<br>你的海鮮市場。<br>你的風景，味道和聲音。<br>你的風度。<br>你活力的生計。<br>你老年的社團，下著棋和打著太極。<br>你能夠在任何時間都提供我所需要的東西的能力。<br>謝謝。<br><br>我很想你。<br><br>翁嘉琪<br>Jocelyn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.995841,40.716607 ]
    },
    "properties": {
    "titleL":"Home",
    "name":"Koy Suntichotinun",
    "photo":"images/wow_koysuntichotinun_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"Koysun Suntichotinun<br>家。<br>給唐人街的信<br>寶島肉酥"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.997763,40.716843 ]
    },
    "properties": {
    "titleL":"Shopping Bags in Chinatown",
    "name":"Laura E",
    "photo":"images/wow_LauraE_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.991229,40.720034 ]
    },
    "properties": {
    "titleL":"Chinatown is My Home",
    "name":"Margaret Yuen",
    "photo":"images/wow_MargaretYuen_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 73.991773,40.716168 ]
    },
    "properties": {
    "titleL":"Jiayou",
    "name":"Maya Man",
    "photo":"images/wow_MayaMan_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"加油加油加油！<br>大家都會為你加油！你會變的更強！"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998041,40.714819 ]
    },
    "properties": {
    "titleL":"A Poem to Chinatown",
    "name":"Monica Sun",
    "photo":"images/wow_MonicaSun_E.jpg",
    "photoPost":"images/wow_MonicaSun_P.jpg",
    "year":2020,
    "address":"Pell St & Doyers St, New York, NY 10013",
    "siteType":"Letter",
    "translation":"給唐人街的情書<br><br>火龍果<br>龍眼果<br>荔枝和銀杏果<br>在路邊的籃子裡剝好<br><br>杏鮑菇<br>木耳<br>金針菇<br>香菇在水裡泡軟<br><br>安玻在廚房水池邊上平衡著一塊菜板、剁碎洋蔥。她告訴我老太太們仍每早在公園裡跳舞，但是人越來越少。<br><br>速溶咖啡粉<br>夏天裡的冰凍養樂多<br>紅棗和山楂<br>枸杞<br><br>一個男人十四次。<br>一個女人頭頂上被倒了，在她倒垃圾的時候。<br><br>紅棗<br>山楂<br>枸杞<br><br>安玻做雜菜。安玻做大醬湯。喬伊在漫長的一天之後買炒粉。我帶金去喝粥，她在搬進市裡之後第一次有了胃口。街另一頭的餅屋關門了。<br><br>海蜇絲<br>蕎麥麵<br>豆芽<br>藕<br><br>我的心飽了又餓。我的心滿了又空。<br><br>By Monica Sun"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.993149,40.715814 ]
    },
    "properties": {
    "titleL":"Dear Chinatown",
    "name":"Nancy Ma",
    "photo":"images/wow_NancyMa_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.999123,40.717422 ]
    },
    "properties": {
    "titleL":"Thinking of You",
    "name":"Nora Bryson",
    "photo":"images/wow_NoraBryson_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"To: Chinatown <br>From: Nora Bryson<br>親愛的唐人街，<br><br>你的堅韌是傳奇。你的勇氣是鼓勵。不要放棄希望！<br>我們愛你，我們珍惜你，我們很快就會再見到你。<br>現在和永遠都會想著你。<br><br>諾拉"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.0002271,40.7148239 ]
    },
    "properties": {
    "titleL":"Pell Street",
    "name":"Jiami Lee",
    "photo":"images/wow_pellst_E.jpg",
    "photoPost":"images/wow_JiamiLee_P.jpg",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"飛馬堅持勇敢，<br><br>唐人街繼續發亮<br><br>我們會再見的"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.991216,40.717353 ]
    },
    "properties": {
    "titleL":"Year of the Capybara",
    "name":"Kim Sandara",
    "photo":"images/wow_KimSandara_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"親愛的唐人街，<br><br>2020年是鼠年，新冠病毒的爆發令這一年變成一個很難受的一年。我覺得我們應該看看水豚，世界上最大的啮齿动物。讓我們看看它有什麼指導。這個誠實的動物在怎麼多動物中是最善良的。我們應該向它學習，學一學它溫和，喜靜的脾氣。我希望你放出去的正能量能回到你身邊。我祝你們幸福；我向你們每個献出一份爱心。<br><br>此致, <br>Kimmy Sandara"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.991404,40.714721 ]
    },
    "properties": {
    "titleL":"How are you? I miss you.",
    "name":"Ally Pratt",
    "photo":"images/wow_AllyPratt_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"親愛的唐人街，您好嗎？我想您。<br><br>我想念您週日早晨向我問候的方式，我在週日早晨餃子想念您的餃子。<br><br>我想念您的街道與活力，我想念有完全沒預料到的寂靜。<br><br>我想念您的燈光聲色，您是我的紐約。每個街角都有驚喜，有著這麼多的故事、這麼多的秘密。<br><br>我想念與您獨處，我想念一起結交朋友。我想念看見熟悉的臉孔，也想念見著這麼多陌生人。<br><br>我想念每天都可以吃餃子。<br><br>我想念漫遊，也想念返家。我很快就會回家。<br><br><br>愛您的艾麗"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.996112,40.714139 ]
    },
    "properties": {
    "titleL":"I miss you",
    "name":"Vanessa Nguyen",
    "photo":"images/wow_vanessanguyen_E.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"我想念在麒麟金閣下親吻你，<br><br>以及大半夜的食品採購之旅，<br><br>還有品嚐一塊錢蛋塔，<br><br>也想念尋找著超划算的餃子，<br><br>我每天都好想念。<br><br>凡妮莎"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.998207,40.713737 ]
    },
    "properties": {
    "titleL":"#StayHome",
    "name":"Vera Chow",
    "photo":"images/wow_verachow_E.jpg",
    "photoPost":"images/wow_VeraChow_P.jpg",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"#留在家<br>#距離遠點<br><br>老夫老妻<br><br>單身狗<br><br>媽媽和孩子"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.000549,40.718474 ]
    },
    "properties": {
    "titleL":"Queens",
    "name":"Emma Tse",
    "photo":"images/wow_StudioLies_C.jpg",
    "photoPost":"",
    "year":2020,
    "address":"",
    "siteType":"Letter",
    "translation":"GO CHINATOWN! <br>交友"
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
var modalImgP = document.getElementById("img02");
var captionTitle = document.getElementById("captionTitle");
var captionName = document.getElementById("captionName");
var captionYear = document.getElementById("captionYear");
var captionAddress = document.getElementById("captionAddress");
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
    this._popup.setContent("<center>" + "<strong>" + feature.properties.titleL + "</strong>" + "</br>" + "<div id=popUpAddress>" + feature.properties.address + "</div>" + "<img id=popUpImage src=" + feature.properties.photo + ">" + "</center>")
    });
    layer.on('mouseout', function (e) {
      e.target.setIcon(iconLetter);
      this.closePopup();
    });


    function isNA(address){
      // if address is NA, return the Small Baby
        if (address == "NA") {
          return "Small Baby"
        } else {
          // else, return the address
          return address
        }
      };
 
  //On Click
	layer.on("click", function(e){
    // console.log(layer);
    // console.log(feature.properties.siteType);
    // Pan map to center clicked icon
      // map.panTo(new L.LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]), {animate: true, duration: 1.0});
    //Create Modal
      modal.style.display = "block";
      modalImg.src = this.feature.properties.photo;
      modalImgP.src = this.feature.properties.photoPost;
      isNA(feature.properties.address)
      console.log(isNA(this.feature.properties.address));
      captionTitle.innerHTML = "A Love Letter: " + this.feature.properties.titleL;
      captionName.innerHTML = "by " + this.feature.properties.name
      captionYear.innerHTML = "Year Posted: " + this.feature.properties.year
      captionAddress.innerHTML = "Address: " + this.feature.properties.address
      translationText.innerHTML = this.feature.properties.translation;
      // console.log (this.feature.properties.photoPost);
      console.log(modalImgP.src);
      //Dissapear Posting Photo div if there is no posting photo
      if (modalImgP.src == "http://localhost:8000/"){
        document.getElementById("img02").style.display = "none";
      }
      else {
        document.getElementById("img02").style.display = "block";
      }
      //Dissapear Translation div if there is no translation
      if (this.feature.properties.translation == ""){
        document.getElementById("translationBox").style.display = "none";
      }
      else {
        document.getElementById("translationBox").style.display = "block";
      }
      //Dissapear Address in modal if there is no address
      if (this.feature.properties.address == ""){
        document.getElementById("captionAddress").style.display = "none";
      }
      else {
        document.getElementById("captionAddress").style.display = "block";
      }
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