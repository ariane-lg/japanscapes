/* ---------- Extra data: kanji, ward notes, extra areas & places ---------- */
var JA={
 "13101":"千代田区","13102":"中央区","13103":"港区","13104":"新宿区","13105":"文京区","13106":"台東区","13107":"墨田区","13108":"江東区","13109":"品川区","13110":"目黒区","13111":"大田区","13112":"世田谷区","13113":"渋谷区","13114":"中野区","13115":"杉並区","13116":"豊島区","13117":"北区","13118":"荒川区","13119":"板橋区","13120":"練馬区","13121":"足立区","13122":"葛飾区","13123":"江戸川区","13203":"武蔵野市","13204":"三鷹市",
 "26101":"北区","26102":"上京区","26103":"左京区","26104":"中京区","26105":"東山区","26106":"下京区","26107":"南区","26108":"右京区","26109":"伏見区","26110":"山科区","26111":"西京区",
 "27102":"都島区","27103":"福島区","27104":"此花区","27106":"西区","27107":"港区","27108":"大正区","27109":"天王寺区","27111":"浪速区","27113":"西淀川区","27114":"東淀川区","27115":"東成区","27116":"生野区","27117":"旭区","27118":"城東区","27119":"阿倍野区","27120":"住吉区","27121":"東住吉区","27122":"西成区","27123":"淀川区","27124":"鶴見区","27125":"住之江区","27126":"平野区","27127":"北区","27128":"中央区"
};

/* One-line character + a few sentences of history/vibe for wards that matter to the trip */
var WARDINFO={
 "13101":{tag:"The old castle and the book town",t:"Chiyoda is built around the Imperial Palace, which sits on the grounds of Edo Castle, the shogun's seat until 1868. Around it: government and business districts, Jimbocho's secondhand bookshops, and Akihabara's electronics-turned-anime streets."},
 "13102":{tag:"Edo's merchants, Ginza's glamour",t:"Chuo holds Nihonbashi, the bridge from which Japan's road distances are still measured, and Ginza, laid out in the 1870s as Tokyo's first Western-style brick district. Tsukiji's outer market and Tokyo Station's east side complete it."},
 "13103":{tag:"Embassies, art museums and late nights",t:"Minato spans Akasaka's lantern-lit alleys, Roppongi's art triangle and nightlife, Azabu's embassy streets and the Tokyo Tower area. It runs from the old samurai hills down to the bay."},
 "13104":{tag:"Every Tokyo at once",t:"Shinjuku ward covers the world's busiest station, Kabukicho, Golden Gai and Omoide Yokocho, but also Shinjuku Gyoen's garden and Kagurazaka's stone-paved lanes, a former geisha quarter with a French accent."},
 "13105":{tag:"Quiet, scholarly Tokyo",t:"Home to the University of Tokyo and two of the city's finest Edo-period gardens, Koishikawa Korakuen and Rikugien. Nezu and Sendagi, the 'Yanesen' lanes, spill over from Taito."},
 "13106":{tag:"Shitamachi: the old low city",t:"Taito is old Edo's working heart: Senso-ji, founded in the 7th century, Ueno's museums and Ameyoko market, Yanaka's temple lanes and Kuramae's makers. Much of it escaped the 1945 firebombing."},
 "13107":{tag:"Sumo, Skytree and Hokusai",t:"Sumida sits east of the river. Tokyo Skytree rises at Oshiage, Ryogoku is the home of sumo, and the Sumida Hokusai Museum celebrates the ukiyo-e master who was born here."},
 "13108":{tag:"Warehouses, coffee and the bay",t:"Koto is reclaimed land and old canals: Kiyosumi-Shirakawa's roasteries and contemporary art, Toyosu's fish market, and the bay-side exhibition sites."},
 "13109":{tag:"Shinkansen gateway",t:"Shinagawa Station is the main southern stop for bullet trains. The ward also has the Takanawa waterfront and the old Tokaido post town of Shinagawa-shuku."},
 "13110":{tag:"Canal-side calm",t:"Meguro is mostly residential. Nakameguro's river walk, lined with cherry trees and small cafés, is the draw, along with the quiet design streets towards Daikanyama."},
 "13111":{tag:"Airport ward",t:"Ota includes Haneda Airport and a lot of residential Tokyo. Nothing saved here, but it is where you might land if you fly into Haneda."},
 "13112":{tag:"The suburban west",t:"Setagaya is Tokyo's biggest ward by population, mostly low-rise and residential. Shimokitazawa, its vintage-clothes and live-music corner, is the reason to visit."},
 "13113":{tag:"Youth culture and the forest shrine",t:"Shibuya ward covers the Scramble Crossing, Harajuku's street fashion, Omotesando's architecture, Ebisu and Daikanyama's quieter streets, and Meiji Jingu's forest, planted from 1915."},
 "13114":{tag:"Subculture city",t:"Nakano is best known for Nakano Broadway, a four-storey mall of anime, manga and collectible shops, and for the neighbourhood izakaya under the station."},
 "13115":{tag:"Punk, vintage and long-running bars",t:"Suginami's Koenji is Tokyo's punk and vintage-clothing neighbourhood, with Asagaya and Ogikubo's calm, café-lined streets to the west."},
 "13116":{tag:"Ikebukuro and its otaku streets",t:"Toshima's Ikebukuro is another major rail hub, with department stores and, on Otome Road, an anime-fan scene aimed at women."},
 "13203":{tag:"Tokyo's most liveable corner",t:"Musashino city holds Kichijoji, repeatedly voted the best place in Greater Tokyo to live, plus Inokashira Park's boating pond."},
 "13204":{tag:"Home of the Ghibli Museum",t:"Mitaka sits just west of Kichijoji. The Ghibli Museum sits in Inokashira Park's edge, a short walk or cycle from the Kichijoji side."},
 "26105":{tag:"Old Kyoto in wood and stone",t:"Higashiyama is the eastern hills: Kiyomizu-dera, the preserved lanes of Sannenzaka and Ninenzaka, and Gion, still a working geisha district."},
 "26104":{tag:"The merchant heart",t:"Nakagyo holds the central downtown: Nishiki Market, Pontocho's narrow dining alley, Nijo Castle, and a grid of machiya townhouses."},
 "26106":{tag:"Station Kyoto",t:"Shimogyo is Kyoto Station, the temples Higashi and Nishi Hongan-ji, and the old Shijo shopping streets."},
 "26101":{tag:"North Kyoto temples",t:"Kita contains Kinkaku-ji's gold-leaf pavilion, Daitoku-ji's zen subtemples and, further north, mountain villages."},
 "26102":{tag:"Imperial Kyoto",t:"Kamigyo holds the Kyoto Imperial Palace park and Nishijin, the textile district where kimono silk has been woven for centuries."},
 "26103":{tag:"Scholars, rivers and mountains",t:"Sakyo is Kyoto University, the Philosopher's Path, Nanzen-ji, Demachiyanagi's river delta and, far north, Kurama and Kibune."},
 "26108":{tag:"Arashiyama's east side",t:"Ukyo is the north-western part of Kyoto's Arashiyama area, with Tenryu-ji and Ryoan-ji among its temples."},
 "26111":{tag:"Arashiyama's bamboo and bridge",t:"Nishikyo takes in the south of Arashiyama, including the Togetsukyo bridge, Monkey Park Iwatayama and Katsura Imperial Villa."},
 "26109":{tag:"Gates and sake",t:"Fushimi is home to Fushimi Inari's thousands of torii gates and one of Japan's great sake districts."},
 "26110":{tag:"Quiet east Kyoto",t:"Yamashina is residential, with Bishamon-do and Daigo-ji temple (a World Heritage site) on the edge of the hills."},
 "26107":{tag:"South of the station",t:"Minami contains Toji temple's five-storey pagoda, the tallest wooden tower in Japan."},
 "27128":{tag:"Minami: Dotonbori and the castle",t:"Chuo is Osaka's central core: Dotonbori's neon canal, Shinsaibashi's arcades, Amerikamura's youth fashion and Osaka Castle park."},
 "27127":{tag:"Kita: the northern hub",t:"Kita is Umeda, Osaka's northern business and shopping hub, with the Umeda Sky Building's rooftop observatory."},
 "27111":{tag:"Old downtown Osaka",t:"Naniwa covers Namba's entertainment streets and Shinsekai, a retro quarter built in 1912 around the Tsutenkaku tower."},
 "27106":{tag:"Horie and the waterfront",t:"Nishi has Horie's boutique and café streets and the Minami-Horie neighbourhood next to Amerikamura."},
 "27109":{tag:"Temples and parks",t:"Tennoji has Shitennoji, one of Japan's oldest temples, and a large park and zoo."},
 "27122":{tag:"Raw, working-class Osaka",t:"Nishinari is a rougher, lower-income district with cheap eateries and a lot of local character; most visitors keep to Shinsekai next door."},
 "27119":{tag:"Abeno Harukas",t:"Abeno has Abeno Harukas, Japan's tallest building (300 m), and Tennoji Zoo's southern edge."},
 "27103":{tag:"Compact dining wards",t:"Fukushima is a compact district of neighbourhood restaurants and izakaya just west of Umeda."}
};

/* Short generic note for wards with nothing specific */
var WARD_GENERIC="A residential ward. Nothing saved falls inside it.";

/* Wards are not tagged heritage/trendy; neighbourhood tags extended: */
TAGS.heritage="Heritage";
TAGS.trendy="Trendy & nightlife";
TAGS.nature="Nature & trails";

/* ---------- Extra Tokyo neighbourhoods ---------- */
HOODS.push(
 {id:"akihabara",name:"Akihabara",short:"Akihabara",jp:"秋葉原",lat:35.6984,lng:139.7731,r:.45,p:2,tags:["shop","night"],
  tag:"Electric town to otaku capital",
  intro:"Built on postwar radio-parts stalls, Akihabara reinvented itself as the centre of anime, manga and gaming culture once electronics went mainstream. Multi-storey arcades and maid cafés sit above the same back-alley component shops that gave the district its name.",
  see:["Multi-floor arcades and retro-game shops","Kanda Myojin shrine, just up the hill"],l:["JY"],t:"15 min",go:"Ginza line to Suehirocho or the JR Yamanote to Akihabara",when:"Afternoon into evening"},
 {id:"koenji",name:"Koenji",short:"Koenji",jp:"高円寺",lat:35.7053,lng:139.6497,r:.5,p:2,tags:["shop","night"],
  tag:"Punk, vintage and dive bars",
  intro:"West of Shinjuku and priced accordingly lower, Koenji is Tokyo's punk and vintage-fashion holdout: secondhand shops, tiny standing bars and a countercultural streak that peaks every August at the Awa Odori dance festival.",
  see:["The secondhand clothing strips under the tracks","Standing bars and live-music venues"],l:[],t:"30 min",go:"JR Chuo line from Shinjuku, 2 stops",when:"Late afternoon into evening"},
 {id:"kichijoji",name:"Kichijoji",short:"Kichijoji",jp:"吉祥寺",lat:35.7032,lng:139.5799,r:.6,p:2,tags:["food","shop","leaves"],
  tag:"Consistently voted Tokyo's best place to live",
  intro:"Inokashira Park's boating pond and the Ghibli Museum, a short walk in Mitaka, give Kichijoji its liveable, slightly bohemian reputation. Harmonica Yokocho packs dozens of tiny bars and food stalls into an alley the size of a car park.",
  see:["Inokashira Park and its pond","Harmonica Yokocho's alleyways","Ghibli Museum (advance tickets only)"],l:[],t:"40 min",go:"JR Chuo line express from Shinjuku, about 15 min",when:"Daytime for the park; evening for the alleys"}
);
HOODS.forEach(function(h){HOOD[h.id]=h});

/* ---------- Extra Tokyo places ---------- */
var XP=[
 ["Suzukien Asakusa matcha gelato","eat","asakusa",35.7153,139.7962,"From your Maps list: Japan cafe. Approximate pin: search the name in Maps for the exact door.","Suzukien Asakusa matcha gelato","list","Japan cafe"],
 ["The Matcha Tokyo Omotesando","eat","aoyama",35.6656,139.7106,"From your Maps list: Japan cafe. Approximate pin: search the name in Maps for the exact door.","The Matcha Tokyo Omotesando","list","Japan cafe"]
];
PLACES.forEach(function(p){p.src="research"});
XP.forEach(function(a){PLACES.push({i:PLACES.length,name:a[0],cat:a[1],hood:a[2],lat:a[3],lng:a[4],note:a[5],q:a[6],src:a[7],list:a[8]})});

/* ---------- Kyoto ---------- */
var KY_HOODS=[
 {id:"higashiyama",name:"Higashiyama",short:"Higashiyama",jp:"東山",lat:34.9949,lng:135.7850,r:.7,p:1,tags:["heritage","temples"],tag:"Kyoto preserved in wood and stone",
  intro:"The slope up to Kiyomizu-dera along Sannenzaka and Ninenzaka is the best-preserved streetscape in the city. Trip on one of the uneven stone steps, folklore warns, and you lose years of luck. Pottery, fan and sweets shops still trade from the same machiya townhouses.",
  see:["Kiyomizu-dera temple","Sannenzaka and Ninenzaka lanes","Kodai-ji temple"],picks:"Matcha sweets on the walk down; the side lanes are quieter once the tour groups leave at dusk."},
 {id:"gion",name:"Gion",short:"Gion",jp:"祇園",lat:35.0037,lng:135.7752,r:.5,p:1,tags:["heritage"],tag:"Kyoto's geisha district, still working",
  intro:"Gion is a working geiko and maiko district, not a museum piece. Hanamikoji-dori's wooden machiya still house the teahouses they were built for. Photograph the street, not the women hurrying to an appointment: it is the district's one firm rule.",
  see:["Hanamikoji-dori","Yasaka Shrine","Shirakawa canal"],picks:"An evening walk along the willow-lined Shirakawa canal."},
 {id:"pontocho",name:"Pontocho & Nishiki Market",short:"Pontocho",jp:"先斗町",lat:35.0060,lng:135.7690,r:.5,p:1,tags:["trendy","food"],tag:"Kyoto's kitchen and its narrowest drinking alley",
  intro:"Nishiki Market has earned its nickname 'Kyoto's Kitchen' over four centuries of pickle-makers, knife-sharpeners and tofu shops. A few streets east, Pontocho is a single alley barely wide enough for two people, restaurants spilling onto riverside decks over the Kamo in summer.",
  see:["Nishiki Market","Pontocho alley","Kamo riverbank"],picks:"Graze Nishiki Market stall to stall; riverside dining in Pontocho if travelling May to September."},
 {id:"fushimi",name:"Fushimi",short:"Fushimi",jp:"伏見",lat:34.9671,lng:135.7727,r:.8,p:1,tags:["heritage"],tag:"Ten thousand gates and a sake town",
  intro:"Fushimi Inari's torii gates, thousands donated by businesses hoping for prosperity, climb the sacred mountain in an unbroken orange tunnel. Most visitors turn back after twenty minutes, but the upper trails empty out fast. Fushimi is also one of Japan's great sake towns, thanks to its famously soft water.",
  see:["Fushimi Inari-taisha torii gates","Gekkeikan sake breweries and museum"],picks:"Keep climbing past the crowded lower gates."},
 {id:"arashiyama",name:"Arashiyama",short:"Arashiyama",jp:"嵐山",lat:35.0094,lng:135.6673,r:.9,p:1,tags:["heritage","nature"],tag:"Bamboo, river and the western hills",
  intro:"The bamboo grove is famous for a reason: the light and sound both change as you walk into it. But Arashiyama earns a full afternoon beyond that one photo, with Tenryu-ji's garden, the Togetsukyo bridge and hillside temples with Kyoto's best autumn colour.",
  see:["Arashiyama Bamboo Grove","Tenryu-ji temple garden","Togetsukyo bridge"],picks:"Arrive at opening to beat the tour buses into the grove."},
 {id:"kinkakuji",name:"Kinkaku-ji & Kitayama",short:"Kinkaku-ji",jp:"金閣寺",lat:35.0394,lng:135.7292,r:.8,p:1,tags:["heritage","temples"],tag:"The Golden Pavilion and zen gardens",
  intro:"Kinkaku-ji's gold leaf reflecting off its pond is one of Japan's most photographed sights and correspondingly brief to visit. Nearby Ryoan-ji's rock garden rewards the opposite approach: sit a while, since the fifteen stones never all show at once from any single viewpoint.",
  see:["Kinkaku-ji (Golden Pavilion)","Ryoan-ji rock garden"],picks:"Pair the two temples in one loop. They are a short bus ride apart."},
 {id:"demachiyanagi",name:"Demachiyanagi",short:"Demachiyanagi",jp:"出町柳",lat:35.0300,lng:135.7700,r:.5,p:2,tags:["trendy"],tag:"Student Kyoto, unpolished",
  intro:"Where the Kamo and Takano rivers meet, near Kyoto University, the mood turns scruffier and younger: secondhand bookshops, indie cafés and standing bars priced for students, not tourists.",
  see:["The river-delta stepping stones","Kyoto University-area cafés"],picks:"Sit on the stepping stones at sunset."},
 {id:"kurama",name:"Kurama & Kibune",short:"Kurama",jp:"鞍馬・貴船",lat:35.1190,lng:135.7676,r:.9,p:2,tags:["heritage","nature"],tag:"A mountain village day trip",
  intro:"Forty minutes on the Eizan line takes you from Kyoto's grid to a mountain village with an onsen and riverside dining platforms in summer.",
  see:["Kurama-dera temple and mountain trail","Kibune riverside restaurants"],picks:"Hike the mountain path between the two villages."}
];
var KY_PLACES=[
 ["Kiyomizu-dera","sight","higashiyama",34.9949,135.7850,"Wooden stage over the hillside"],
 ["Sannenzaka and Ninenzaka","sight","higashiyama",34.9985,135.7807,"Stone lanes lined with old shops"],
 ["Kodai-ji","sight","higashiyama",35.0003,135.7813,"Temple with garden and evening illuminations"],
 ["Hanamikoji-dori","sight","gion",35.0030,135.7755,"Gion's main geisha street"],
 ["Yasaka Shrine","sight","gion",35.0037,135.7785,"Shrine at the end of Shijo-dori"],
 ["Shirakawa canal","green","gion",35.0065,135.7740,"Willow-lined canal and teahouses"],
 ["Nishiki Market","eat","pontocho",35.0050,135.7646,"Four centuries of food stalls"],
 ["Pontocho alley","eat","pontocho",35.0065,135.7707,"Narrow alley of restaurants"],
 ["Fushimi Inari-taisha","sight","fushimi",34.9671,135.7727,"Thousands of torii gates"],
 ["Gekkeikan Okura Sake Museum","eat","fushimi",34.9300,135.7619,"Sake tasting in the brewery district"],
 ["Arashiyama Bamboo Grove","green","arashiyama",35.0170,135.6713,"Go at opening"],
 ["Tenryu-ji","sight","arashiyama",35.0158,135.6738,"Garden temple, UNESCO World Heritage"],
 ["Togetsukyo Bridge","sight","arashiyama",35.0100,135.6775,"The wooden-style bridge over the Katsura River"],
 ["Kinkaku-ji","sight","kinkakuji",35.0394,135.7292,"The Golden Pavilion"],
 ["Ryoan-ji","sight","kinkakuji",35.0345,135.7183,"Rock garden"],
 ["Kamo-Takano stepping stones","green","demachiyanagi",35.0305,135.7720,"Where two rivers meet"],
 ["Kurama-dera","sight","kurama",35.1190,135.7676,"Mountain temple"],
 ["Kibune Shrine","sight","kurama",35.1303,135.7621,"Shrine at the head of the Kibune valley"]
];

/* ---------- Osaka ---------- */
var OS_HOODS=[
 {id:"dotonbori",name:"Dotonbori",short:"Dotonbori",jp:"道頓堀",lat:34.6687,lng:135.5013,r:.45,p:1,tags:["trendy","food"],tag:"Neon, noise and Osaka's food obsession",
  intro:"The canal-side strip under the running Glico man is Osaka distilled: giant mechanical crab and octopus signs, takoyaki and okonomiyaki eaten standing up. Osakans call their own city 'the nation's kitchen'; this is where that reputation gets loud.",
  see:["Glico running-man sign","Dotonbori canal","Kuromon Market, a few minutes south"],picks:"Takoyaki from the stall with a queue, not the empty one next door."},
 {id:"shinsekai",name:"Shinsekai",short:"Shinsekai",jp:"新世界",lat:34.6524,lng:135.5063,r:.4,p:1,tags:["heritage"],tag:"Old Osaka, unpolished on purpose",
  intro:"Built in 1912 around a mini Eiffel Tower, Shinsekai stayed frozen: retro signage, deep-fried kushikatsu counters and a rule on most walls, no double-dipping the sauce.",
  see:["Tsutenkaku tower","Kushikatsu alleys"],picks:"Counter-hop for kushikatsu."},
 {id:"amemura",name:"Amerikamura",short:"Amerikamura",jp:"アメリカ村",lat:34.6716,lng:135.4989,r:.35,p:1,tags:["trendy"],tag:"Osaka's youth-fashion square mile",
  intro:"'Ame-mura' is Osaka's answer to Harajuku. Secondhand American-clothing importers seeded a district of streetwear boutiques and graffiti-lined side streets in the 1970s, and it has stayed resolutely youth-culture ever since.",
  see:["Triangle Park","Streetwear boutiques"],picks:"Vintage-hunting through the side streets off Triangle Park."},
 {id:"umeda",name:"Umeda & Kita",short:"Umeda",jp:"梅田",lat:34.7024,lng:135.4959,r:.6,p:1,tags:["trendy"],tag:"Osaka's northern skyline",
  intro:"Kita means 'north': Osaka's business and shopping counterweight to neon Minami. The Umeda Sky Building's rooftop observatory, two towers linked by a floating garden deck, is the best skyline view in the city.",
  see:["Umeda Sky Building"],picks:"Sunset from the open-air deck."},
 {id:"nakazaki",name:"Nakazakicho",short:"Nakazakicho",jp:"中崎町",lat:34.7066,lng:135.5058,r:.35,p:1,tags:["trendy","craft"],tag:"Prewar lanes, now galleries and cafés",
  intro:"A small knot of old wooden houses and lanes just east of Umeda that survived the wartime bombing and has been filled with independent galleries, vintage shops and cafés.",
  see:["The narrow lanes around Nakazakicho station"],picks:"Wander without a plan; most shops open late morning."},
 {id:"osakacastle",name:"Osaka Castle",short:"Osaka Castle",jp:"大阪城",lat:34.6873,lng:135.5259,r:.7,p:1,tags:["heritage"],tag:"Hideyoshi's power move, rebuilt",
  intro:"The keep is a 1931 rebuild, but the moats and stone walls are original enough to sense the scale Hideyoshi built at in 1583. The park is one of the city's best cherry-blossom spots.",
  see:["Osaka Castle keep and museum"],picks:"A walk around the moat."}
];
var OS_PLACES=[
 ["Glico Running Man","sight","dotonbori",34.6687,135.5013,"The neon sign on the Dotonbori canal"],
 ["Kuromon Market","eat","dotonbori",34.6629,135.5063,"Fresh seafood stalls · mornings are best"],
 ["Tsutenkaku","sight","shinsekai",34.6525,135.5063,"Retro tower at the centre of Shinsekai"],
 ["Triangle Park","sight","amemura",34.6724,135.4988,"The hang-out spot of Amerikamura"],
 ["Umeda Sky Building","sight","umeda",34.7052,135.4903,"Floating Garden Observatory"],
 ["Nakazakicho lanes","make","nakazaki",34.7066,135.5058,"Prewar lanes of galleries, vintage shops and cafés"],
 ["Osaka Castle","sight","osakacastle",34.6873,135.5259,"1931 keep, original stone walls"],
 ["Osaka Castle Park","green","osakacastle",34.6893,135.5262,"Moats and park around the castle"]
];

/* ---------- Nakasendo & Fuji-Hakone ---------- */
var NK_HOODS=[
 {id:"magome",name:"Magome",short:"Magome",jp:"馬籠",lat:35.5217,lng:137.5636,r:.5,p:1,tags:["heritage"],tag:"A post town rebuilt to look like it never changed",
  intro:"Magome burned down twice in the last century and was rebuilt each time to its Edo-period look on purpose. It was the 43rd of 69 post towns on the Nakasendo, the inland route between Edo and Kyoto.",
  see:["Magome-juku main street","Mt Ena viewpoint"],picks:"Walk it early, before the day-trippers."},
 {id:"trail",name:"Magome-Tsumago trail",short:"Trail",jp:"妻籠宿への道",lat:35.5380,lng:137.5540,r:.8,p:1,tags:["nature","heritage"],tag:"An 8km walk the Kiso valley protects on purpose",
  intro:"The path between the two post towns runs through forest and past a waterfall, with almost no power lines in sight. Same-day luggage forwarding between the towns (about ¥1,000 per bag) means you can walk it without your bags.",
  see:["Odaki and Medaki waterfalls","Free-tea rest stops"],picks:"Start early, from Magome, so the walk is mostly downhill."},
 {id:"tsumago",name:"Tsumago",short:"Tsumago",jp:"妻籠",lat:35.5539,lng:137.5444,r:.5,p:1,tags:["heritage"],tag:"Where Japan's preservation movement began",
  intro:"Tsumago began restoring its post-town streets in the late 1960s, and residents later pledged not to sell, rent or demolish historic buildings, a model for preservation towns across Japan. No visible vending machines, no daytime cars, no power lines.",
  see:["Preserved Edo-period main street","Waki-honjin Okuya (former inn, now museum)"],picks:"Stay until the day-trippers leave."},
 {id:"hakone",name:"Hakone (Owakudani)",short:"Hakone",jp:"箱根",lat:35.2430,lng:139.0195,r:1.2,p:1,tags:["nature"],tag:"Hakone and its black-egg valley",
  intro:"Owakudani's kuro-tamago, eggs boiled black in the sulphur springs and said to add seven years of life each, is the area's signature snack. Hakone is built around onsen and Fuji views.",
  see:["Owakudani valley and black-egg stalls"],picks:"Hakone and Kawaguchiko are about 90 minutes apart, so pick one base."},
 {id:"kawaguchiko",name:"Lake Kawaguchiko",short:"Kawaguchiko",jp:"河口湖",lat:35.5164,lng:138.7512,r:1.2,p:2,tags:["nature"],tag:"The other Fuji option",
  intro:"The Fuji Five Lakes side trades Hakone's ropeway and egg stall for a longer lakeside view of Fuji.",
  see:["Lake Kawaguchiko lakeside viewpoints"],picks:"Another popular Fuji base."}
];
var NK_PLACES=[
 ["Magome-juku main street","sight","magome",35.5217,137.5636,"Stone-paved, car-free post town"],
 ["Tsumago-juku main street","sight","tsumago",35.5539,137.5444,"The most complete Edo streetscape left"],
 ["Waki-honjin Okuya","sight","tsumago",35.5540,137.5440,"Former inn, now a museum"],
 ["Odaki and Medaki waterfalls","green","trail",35.5360,137.5560,"On the trail, near the midpoint"],
 ["Owakudani","sight","hakone",35.2433,139.0194,"Sulphur valley and black eggs"],
 ["Oishi Park, Kawaguchiko","green","kawaguchiko",35.5260,138.7650,"A popular Fuji viewpoint on the lake"]
];
[KY_PLACES,OS_PLACES,NK_PLACES].forEach(function(arr){
  arr.forEach(function(a,i){ arr[i]={i:i,name:a[0],cat:a[1],hood:a[2],lat:a[3],lng:a[4],note:a[5],q:a[0]+", Japan",src:"guide"}; });
});
