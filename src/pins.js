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

/* ---------- Flea and antique markets (details paraphrased from a tea-ware guide) ---------- */
var CFT=["Care for teaware: A Tea Person's Guide to Flea Markets and Antiques in Japan","https://careforteaware.com/en-gb/blogs/read/a-tea-person-s-guide-to-flea-markets-antiques-in-japan"];

KY_HOODS.push({id:"toji",name:"To-ji",short:"To-ji",jp:"東寺",lat:34.9806,lng:135.7477,r:.6,p:1,tags:["temples","craft"],tag:"A five-storey pagoda and a monthly market",
  intro:"To-ji, just south-west of Kyoto Station, is best known for its five-storey pagoda. On the 21st of every month the Kobo-san market spreads through its grounds, one of the biggest antique and craft markets in Japan.",
  see:["The five-storey pagoda","Kobo-san market on the 21st"],picks:"Go on the 21st and let it take a morning."});
HOODS.push({id:"heiwajima",name:"Heiwajima",short:"Heiwajima",jp:"平和島",lat:35.5787,lng:139.7479,r:.8,p:2,tags:["craft"],tag:"Where Tokyo's indoor antique fair is held",
  intro:"Heiwajima, in Ota ward by Tokyo Bay, is home to the Tokyo Ryutsu Center, where the Heiwajima Antique Fair takes place four times a year. It is well off the central routes, so it is worth the trip only when a fair is on.",
  see:["Heiwajima Antique Fair (see dates)"],picks:"Check the fair dates before you go."});

(function(){
  function add(arr,list,city){list.forEach(function(a){arr.push({i:arr.length,name:a[0],cat:a[1],hood:a[2],lat:a[3],lng:a[4],note:a[5],q:a[6]||(a[0]+", "+city+", Japan"),src:"guide",url:a[7]||"",cite:CFT})})}
  add(PLACES,[
   ["Oedo Antique Market","make","marunouchi",35.6768,139.7635,"Outdoor market in front of Tokyo International Forum, with about 250 stalls, 9:00 to 16:00 and free entry. Tokyo's best-curated market for tea and traditional craft: aged cedar trays, Edo-period Imari dishes, incense boxes, kintsugi-mended cups and shibori cloth. It runs on set dates, not just the first and third Sunday, and is cancelled in rain, so check the site that morning. Remaining 2026 dates: 7 and 23 Nov, 12 and 20 Dec.","Oedo Antique Market, Tokyo International Forum, Tokyo, Japan","https://www.antique-market.jp/english/"],
   ["Ueno Antique Market","make","ueno",35.7117,139.7709,"A small market of 15 to 30 stalls at Bentenmon Square by Shinobazu Pond, 10:00 to 18:00 and free. It comes in two-week blocks a few times a year, so check their Instagram for current dates. Mostly boxes of old fabric, clothes and everyday objects, with the occasional good utilitarian piece.","Bentenmon Square, Ueno Park, Tokyo, Japan","https://www.instagram.com/uenoantiques"],
   ["Hanazono Shrine antique market (skip)","make","shinjuku",35.6933,139.7058,"One to skip. Fifteen to 25 stalls on most Sundays except shrine festivals, and it feels more like cleared-out attics than a craft market.","Hanazono Shrine, Shinjuku, Tokyo, Japan"],
   ["Heiwajima Antique Fair","make","heiwajima",35.5787,139.7479,"Indoor fair at the Tokyo Ryutsu Center with about 100 dealers from across Japan, 10:00 to 17:00 (16:00 on the last day), free. Held four times a year (March, May, September, December) since 1978. A more serious, specialist feel: statues, scrolls, tea chests, patinated tetsubin and ginbin, Edo and Meiji ceramics. Next dates: 5 and 6 Dec 2026, 13 and 14 Mar 2027.","Tokyo Ryutsu Center, Heiwajima, Tokyo, Japan","https://kottouichi.com/en.html"]
  ],"Tokyo");
  add(KY_PLACES,[
   ["Kobo-san market at To-ji","make","toji",34.9806,135.7477,"Over 1,000 stalls on the 21st of every month, 7:00 to 15:30, free to the market grounds (the temple halls charge separately). It spreads under the five-storey pagoda: worn textiles, whisks and tea bowls, bonsai, iron and ceramic kettles, woodworking tools. It can swallow a whole morning, so don't try to see every stall. A smaller antique market runs on the first Sunday.","To-ji Temple, Kyoto, Japan","http://www.touji-ennichi.com/ichi/kobichi.htm"],
   ["Tenjin-san market at Kitano Tenmangu","make","nishijin",35.0317,135.7354,"Around 800 to 1,000 stalls on the 25th of every month, 6:00 to 16:00, free. A craft-leaning market along the stone-lantern paths, good for everyday tea tools: bamboo tea scoops, small lacquer trays, rustic folk pottery. Many dealers set up here and at To-ji, so pick one by date and give it about three hours.","Kitano Tenmangu, Kyoto, Japan","https://kitanotenmangu.or.jp/en/"],
   ["Imamiya Shrine antique market (skip)","make","kinkakuji",35.0456,135.7421,"One to skip. Under 20 stalls on the first Sunday of the month; tiny and underwhelming.","Imamiya Shrine, Kyoto, Japan"]
  ],"Kyoto");
  add(OS_PLACES,[
   ["Shitenno-ji temple market","make","shinsekai",34.6549,135.5170,"A lively market of about 300 to 400 stalls on the 21st and 22nd of every month, 8:30 to 16:00, free to the grounds. Strong on folk objects and old textiles, with an unmistakably Osaka, slightly noisy feel. Antique kimono are still sold folded in traditional paper envelopes (tatoshi).","Shitenno-ji, Osaka, Japan"]
  ],"Osaka");
})();

THEMES.tokyo.push({t:"Flea and antique markets, for tea and craft",d:"If you only visit one market, the author picks the outdoor Oedo Antique Market at Tokyo International Forum, which has the best curation for tea and traditional craft. It follows its own calendar (not simply the first and third Sunday) and is cancelled in rain, so check the website that morning. The Heiwajima fair is the indoor, specialist option; the Ueno market is small and mixed; the Hanazono Shrine market is easy to skip. General tips: bring cash, go in the morning, bargain gently if at all, and expect a lottery. You rarely find the exact thing you came for, and a surprising share of stock is foreign glassware and workwear.",s:CFT});
THEMES.kyoto.push({t:"Temple flea markets: To-ji and Kitano Tenmangu",d:"Kyoto's big markets are held on temple and shrine grounds: Kobo-san at To-ji on the 21st (over 1,000 stalls) and Tenjin-san at Kitano Tenmangu on the 25th (about 800 to 1,000). Many of the best dealers set up at both, so choose the one that fits your dates and give it about three hours. To-ji is overwhelming and rewards slowing down; Kitano is more craft-led, with everyday tea tools. The tiny Imamiya Shrine market is not worth the trip.",s:CFT});
THEMES.osaka.push({t:"Shitenno-ji's monthly market",d:"On the 21st and 22nd of each month the grounds of Shitenno-ji fill with 300 to 400 stalls. It is a lively, slightly noisy market, rewarding for folk objects and old textiles, and a place where antique kimono are still kept in the old paper envelopes they were stored in a century ago.",s:CFT});

/* ---------- Getting to the Kiso valley: Tokyo to Magome, Tsumago to Kyoto ---------- */
var JG_TRAIL=["Japan Guide: Magome-Tsumago Trail","https://www.japan-guide.com/e/e6078.html"];
var JG_BUS=["Japan Guide: bus timetables, Magome and Tsumago","https://www.japan-guide.com/bus/kiso.html"];
NK_HOODS.forEach(function(h){
  if(h.id==="magome")h.go="From Tokyo take the Tokaido Shinkansen to Nagoya, then the JR limited express Shinano to Nakatsugawa (about 50 minutes). Kitaena buses leave from the stop outside Nakatsugawa Station for Magome (about 25 minutes, ¥800, roughly hourly from 7:42 to 18:30). Seats on the bus cannot be reserved, and the JR Pass does not cover it.";
  if(h.id==="trail")h.go="Walk Magome to Tsumago (about 8 km, 2 to 3 hours, mostly downhill this way). Luggage forwarding between the two tourist information centres is ¥1,000 a bag: drop off 8:30 to 11:30, collect 13:00 to 17:00; it runs through November. A direct bus Magome to Tsumago costs ¥1,000 and runs about four times a day (10:55, 13:25, 15:00, 17:15).";
  if(h.id==="tsumago")h.go="From Tsumago, a bus to Nagiso Station takes about 7 minutes (¥300), or you can walk the 3.5 km in about an hour. From Nagiso, take the JR Chuo line limited express Shinano to Nagoya, then the Shinkansen to Kyoto (about 35 minutes). There is no direct train from Nagiso to Kyoto: allow about two hours in all, and check the timetable, as only a few limited expresses a day serve Nagiso.";
});
THEMES.nakasendo.unshift({t:"Getting the train tickets, step by step",d:"1. Shinkansen (Tokyo to Nagoya, and Nagoya to Kyoto): book at <a target='_blank' rel='noopener' href='https://smart-ex.jp/en/'>smart-ex.jp/en</a>, the official site for the Tokaido, Sanyo and Kyushu Shinkansen. Press Register for membership first and sign up with a credit card, then Make reservations. 2. Shinano (Nagoya to Nakatsugawa, and Nagiso to Nagoya): this is a JR Central train. It has two non-reserved cars (5 and 6) except in the peak holiday periods (the next runs 25 December to 5 January), so in mid-November you could board without a reservation. A reserved seat is still the safe choice, above all for Nagiso, where only four Shinano a day stop. 3. To reserve online, forum members point to the <a target='_blank' rel='noopener' href='https://www.westjr.co.jp/global/en/howto/train-reservation/'>JR West online train reservation</a>, which sells some JR Central trains including the Shinano (they call it not very user-friendly; I couldn't confirm Shinano on its conditions page, so try it first). A third-party alternative is <a target='_blank' rel='noopener' href='https://japantravel.navitime.com/en/v-reserve/jr/express/shinano/'>Japan Travel by NAVITIME</a>, which needs no account. 4. Collecting: you swap the booking for a paper ticket at a reserved-seat ticket machine (Nagoya and Nakatsugawa both have one) or at the ticket office by the Nagoya Shinkansen North Ticket Gate (5:30 to 23:00). Nagiso Station has no ticket machine and its ticket office keeps limited hours, so collect your Sunday ticket on Friday. 5. If you don't book ahead, buy at the station on the day. Don't rely on the Nagiso ticket office: a forum member saw people miss a train and wait one to two hours. 6. The four Shinano that stop at Nagiso leave at 8:09, 15:55, 16:55 and 17:55 (about 1 hour 10 minutes to Nagoya). Other Shinano skip it. Local trains run to Nakatsugawa (about 2 hours to Nagoya in all) and can't be reserved.",s:["japan-guide.com forum: Train tickets, should I book in advance?","https://www.japan-guide.com/forum/quereadisplay.html?2+184688="]});
THEMES.nakasendo.unshift({t:"Getting there and away: Tokyo to Magome, Tsumago to Kyoto",d:"Tokyo to Nagoya on the Tokaido Shinkansen, then the JR limited express Shinano up the Kiso valley to Nakatsugawa (about 50 minutes). From the bus stop outside Nakatsugawa Station, Kitaena buses run to Magome in about 25 minutes for ¥800, roughly hourly from 7:42 to 18:30 (a few run on weekdays only, a few on weekends and holidays only; this matches Kitaena Bus's own timetable, revised 1 October 2025). You can't reserve a seat or buy a ticket in advance. The Kitaena Bus M line to Magome leaves from stop 3 outside Nakatsugawa Station (to the left as you leave, by Nigiwai Plaza). Board by the middle door, take the numbered ticket from the machine, and put the fare shown on the display into the box by the driver when you leave by the front door. Two guides say IC cards (Suica, PASMO) and credit cards aren't accepted on the local buses here. The driver's change machine takes coins and ¥1,000 notes, not ¥10,000, ¥5,000 or ¥2,000 notes, so carry coins. The JR Pass doesn't cover them. (Some older guides list the Nakatsugawa to Magome fare as ¥540 to ¥570; check the price when you board.) Walk to Tsumago (about 8 km, 2 to 3 hours), sending your bags ahead through the tourist information centres for ¥1,000 a bag: drop them off between 8:30 and 11:30 and collect between 13:00 and 17:00. The service runs until the end of November. For the way out, a bus from Tsumago to Nagiso Station takes about 7 minutes (¥300; timetable as of 1 April 2026), then the Shinano back to Nagoya and the Shinkansen on to Kyoto. There is no direct train from Nagiso to Kyoto: change at Nagoya and allow about two hours in all, and check the timetable, since only a few limited expresses a day appear to serve Nagiso. Tickets: the Shinano has two non-reserved cars except in peak holiday periods, so you could board without a reservation in mid-November, but a reserved seat is the safe choice, and the Shinkansen also fills up on an autumn weekend (see the step-by-step above). Check the JR Central timetable for the Shinano times, and the bus times the day before.",s:JG_BUS});
THEMES.nakasendo.push({t:"The Magome to Tsumago walk",d:"About 8 km and 2 to 3 hours at an easy pace, well marked in English and Japanese. Walking from Magome means a little less uphill. Part of the path follows ordinary roads, and about halfway there's a rest stop in a traditional house where staff in old-style dress serve tea and snacks and ask for a donation. If you want a longer day, a further 3.5 km trail runs from Tsumago to Nagiso Station. A forum member reported a bear sighting near the trail in October 2025, so ask at the tourist information centre for any current notices before you set off.",s:JG_TRAIL});


NK_HOODS.push({id:"nagiso",name:"Nagiso Station",short:"Nagiso",jp:"南木曽",lat:35.5988,lng:137.6086,r:.5,p:1,tags:["heritage"],tag:"The rail stop for Tsumago",
  intro:"Nagiso Station, on the JR Chuo line, is the rail stop for Tsumago, about 3.5 km away. Buses between the station and Tsumago take about 7 minutes. From here, limited express trains run on to Nagoya, where you change to the Shinkansen for Kyoto or Tokyo.",
  see:["Bus to Tsumago from the station"],picks:"Check the bus times the day before; there is no seat reservation.",
  go:"From Tsumago, a bus takes about 7 minutes (¥300, timetable as of 1 April 2026), or you can walk the 3.5 km in about an hour. Four Shinano limited expresses a day stop here for Nagoya (8:09, 15:55, 16:55 and 17:55, about 1 hour 10 minutes); the others skip Nagiso, and local trains run to Nakatsugawa (about 2 hours to Nagoya in all, no reservations). Nagiso has no ticket machine and its ticket office keeps limited hours, so get your ticket beforehand."});
