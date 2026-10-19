/* ---------- Extra pins for the main sights, food and craft stops ---------- */
function addPins(arr,list,city){
  list.forEach(function(a){arr.push({i:arr.length,name:a[0],cat:a[1],hood:a[2],lat:a[3],lng:a[4],note:a[5],q:a[6]||(a[0]+(city==="Japan"?"":", "+city)+", Japan"),src:"guide"})});
}

KY_HOODS.push({id:"philosopher",name:"Philosopher's Path & Ginkaku-ji",short:"Philosopher's Path",jp:"哲学の道",lat:35.0235,lng:135.7965,r:.8,p:1,tags:["heritage","nature"],tag:"A canal-side walk to the Silver Pavilion",
  intro:"A quiet stretch in northern Higashiyama where a canal path, lined with cherry trees, runs south from Ginkaku-ji past small temples and cafés. Pairs well with the Higashiyama temples on the same day.",
  see:["Ginkaku-ji, the Silver Pavilion","The canal path itself","Honen-in's moss garden"],picks:"Walk it south from Ginkaku-ji, early, before the tour groups."});

addPins(PLACES,[
 ["Mandarake Complex","make","akihabara",35.7000,139.7714,"Manga, anime goods and retro toys over several floors","Mandarake Complex, Akihabara, Tokyo, Japan"],
 ["Kanda Myojin","sight","akihabara",35.7019,139.7677,"Old shrine beside Akihabara, known for an electronics and IT charm"],
 ["Koenji Pal Shopping Street","make","koenji",35.7047,139.6495,"Covered arcade of vintage shops and cheap eats","Koenji Pal Shopping Street, Tokyo, Japan"],
 ["Koenji Junjo Shopping Street","make","koenji",35.7066,139.6490,"Old-school street of records, second-hand shops and bars","Koenji Junjo Shopping Street, Tokyo, Japan"],
 ["Inokashira Park","green","kichijoji",35.6993,139.5726,"Pond-side park for rowing boats and slow weekend walks"],
 ["Ghibli Museum","sight","kichijoji",35.6963,139.5705,"Studio Ghibli's museum; tickets are timed and booked ahead","Ghibli Museum, Mitaka, Tokyo, Japan"],
 ["Harmonica Yokocho","eat","kichijoji",35.7038,139.5793,"Tiny postwar-style alleys of bars and snack counters by the station","Harmonica Yokocho, Kichijoji, Tokyo, Japan"],
 ["Satou menchi-katsu","eat","kichijoji",35.7039,139.5794,"Street-side fried minced-meat cutlet, a Kichijoji classic","Satou, Kichijoji, Tokyo, Japan"],
 ["Honda Theater","sight","shimokita",35.6603,139.6683,"A hub of Shimokitazawa's small-theatre scene","Honda Theater, Shimokitazawa, Tokyo, Japan"],
 ["Reload Shimokitazawa","make","shimokita",35.6612,139.6651,"Low-rise strip of independent shops and cafés under the tracks","Reload, Shimokitazawa, Tokyo, Japan"],
 ["Ohya Shobo","make","jimbocho",35.6959,139.7605,"Antiquarian bookshop, known for old maps and woodblock prints"],
 ["Bondy Jimbocho","eat","jimbocho",35.6959,139.7578,"European-style curry on Jimbocho's well-known curry circuit","Bondy, Jimbocho, Tokyo, Japan"],
 ["Tomato Nippori","make","nippori",35.7276,139.7697,"Huge fabric store, the flagship of Nippori Textile Town","Tomato, Nippori, Tokyo, Japan"],
 ["Sumida Hokusai Museum","sight","skytree",35.6964,139.8005,"Museum devoted to Hokusai, who was born in this part of Edo"]
],"Tokyo");

addPins(KY_PLACES,[
 ["Ginkaku-ji","sight","philosopher",35.0269,135.7984,"The Silver Pavilion: a Zen temple with a raked-sand garden"],
 ["Philosopher's Path","green","philosopher",35.0200,135.7948,"A canal-side path lined with cherry trees, about two kilometres long"],
 ["Honen-in","sight","philosopher",35.0236,135.7974,"Thatch-gated temple with a mossy garden just off the path"],
 ["Kitano Tenmangu","sight","nishijin",35.0317,135.7354,"Shrine to the god of learning, known for plum blossom and a market on the 25th"],
 ["Shimogamo Shrine","sight","demachiyanagi",35.0370,135.7725,"Ancient shrine in the Tadasu no Mori forest; a World Heritage Site"],
 ["Daitoku-ji","sight","kinkakuji",35.0428,135.7466,"Zen temple complex with many sub-temples and gardens"]
],"Kyoto");

addPins(OS_PLACES,[
 ["Dotonbori canal","sight","dotonbori",34.6690,135.4994,"The neon canal strip, best after dark"],
 ["Hozenji Yokocho","eat","dotonbori",34.6680,135.5033,"A stone-paved lane of old restaurants beside the moss-covered Fudo Myoo statue"],
 ["Shitenno-ji","sight","shinsekai",34.6547,135.5168,"One of Japan's oldest Buddhist temples, founded in the 6th century"],
 ["Janjan Yokocho","eat","shinsekai",34.6527,135.5063,"A short alley of kushikatsu skewer shops in Shinsekai"],
 ["HEP Five Ferris wheel","sight","umeda",34.7040,135.5001,"Red Ferris wheel on top of a shopping complex"],
 ["Tenjinbashisuji shopping street","make","tenma",34.7051,135.5112,"Reputedly Japan's longest covered shopping street"],
 ["Orange Street, Horie","make","horie",34.6711,135.4929,"Boutique and café street in Horie"]
],"Osaka");

addPins(NK_PLACES,[
 ["Shimazaki Toson Memorial Museum","sight","magome",35.5223,137.5628,"Museum for the writer Shimazaki Toson, who was born in Magome"],
 ["Otsumago hamlet","sight","trail",35.5441,137.5529,"Small hamlet near the Tsumago end of the walk, a good place to rest"],
 ["Hakone Open-Air Museum","sight","hakone",35.2443,139.0521,"Sculpture park in the hills, with a Picasso pavilion"],
 ["Hakone Shrine","sight","hakone",35.2040,139.0256,"Lakeside shrine with a red torii standing in Lake Ashi"],
 ["Kachi Kachi Ropeway","sight","kawaguchiko",35.5038,138.7744,"Ropeway above Lake Kawaguchiko with a view of Fuji"]
],"Japan");
