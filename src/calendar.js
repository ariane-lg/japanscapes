/* ---------- Calendar data: what happens when, what closes, what to book ---------- */
var CAL_KIND={
 market:{n:"Markets",c:"#b8863f"},
 season:{n:"Seasons and festivals",c:"#d2566e"},
 holiday:{n:"Public holidays",c:"#8a929a"},
 book:{n:"Ticket releases",c:"#3f7a99"},
 exhibit:{n:"Exhibitions",c:"#5b9a78"}
};
var CAL_MONTHS=[[2026,9],[2026,10],[2026,11]];   /* October, November, December 2026 */
var CAL_SRC={
 oedo:["Oedo Antique Market","https://www.antique-market.jp/english/"],
 cft:CFT,
 kno:["Kyoto National Museum","https://www.kyohaku.go.jp/eng/"],
 ghibli:["Ghibli Museum","https://www.ghibli-museum.jp/en/"],
 kuna:["Imperial Household Agency, Kyoto properties","https://sankan.kunaicho.go.jp/english/index.html"]
};

/* Museums and sights with a weekly closing day or a booking requirement.
   closed: weekdays (0 = Sunday). conf: "official" = read on the venue's own site; "usual" = widely reported, check before going. */
var MUSEUMS=[
 {n:"Ghibli Museum",c:"Tokyo",closed:[2],conf:"usual",book:"required",
  how:"Every ticket is for a set date and time and must be bought ahead; there is no entry without one. Tickets for a month go on sale on the 10th of the month before, at 10:00 Japan time, through Lawson Ticket, and the popular dates go within hours.",
  url:"https://www.ghibli-museum.jp/en/",src:"ghibli"},
 {n:"Nezu Museum",c:"Tokyo",closed:[1],conf:"usual",book:"required",
  how:"Entry is by date and time ticket booked online; a few walk-up places are kept at the desk only if there is room. Closed Mondays (and the day after a Monday holiday), and for about two weeks between exhibitions.",
  url:"https://www.nezu-muse.or.jp/en/"},
 {n:"teamLab Planets (Toyosu) and Borderless (Azabudai Hills)",c:"Tokyo",closed:[],conf:"usual",book:"advised",
  how:"Both use dated, timed tickets that sell out days ahead, especially at weekends and on holidays. Book a slot before you travel. Closing days vary by venue, so check the calendar when you book.",
  url:"https://www.teamlab.art/e/planets/"},
 {n:"Tokyo National Museum",c:"Tokyo",closed:[1],conf:"usual",book:"no",
  how:"No booking for the main galleries; some special exhibitions use timed tickets.",url:"https://www.tnm.jp/?lang=en"},
 {n:"Sumida Hokusai Museum",c:"Tokyo",closed:[1],conf:"usual",book:"no",
  how:"Small museum; usually closed Mondays.",url:"https://hokusai-museum.jp/?lang=en"},
 {n:"21_21 Design Sight",c:"Tokyo",closed:[2],conf:"usual",book:"no",
  how:"Closed Tuesdays, between exhibitions and over New Year.",url:"https://www.2121designsight.jp/en/"},
 {n:"Imperial Palace East Gardens",c:"Tokyo",closed:[1,5],conf:"usual",book:"no",
  how:"Free; normally closed Mondays and Fridays.",url:"https://www.kunaicho.go.jp/e-event/higashigyoen02.html"},
 {n:"Kyoto National Museum",c:"Kyoto",closed:[1],conf:"official",book:"no",
  how:"Open 9:00 to 17:30; if a Monday is a national holiday it opens that day and closes the next. Special exhibition The Tale of Genji runs to 29 Nov 2026, with the collection galleries off view until 22 Dec. No booking needed for it.",
  url:"https://www.kyohaku.go.jp/eng/",src:"kno"},
 {n:"Kyoto Imperial Palace",c:"Kyoto",closed:[],conf:"official",book:"no",
  how:"Open to all visitors with no application needed.",url:"https://sankan.kunaicho.go.jp/english/index.html",src:"kuna"},
 {n:"Sento Palace, Katsura and Shugakuin villas",c:"Kyoto",closed:[],conf:"official",book:"required",
  how:"These three Imperial Household properties can be visited only by advance application made online through each property's page. Apply as early as you can; slots are limited.",
  url:"https://sankan.kunaicho.go.jp/english/index.html",src:"kuna"}
];

/* Events by date. Returns [{k, t, c, note, url}] for the given year, month (0-11), day. */
function calEvents(y,m,d){
 var dow=new Date(y,m,d).getDay(),ev=[],key=y+"-"+(m+1)+"-"+d;
 function add(k,t,c,note,url){ev.push({k:k,t:t,c:c,note:note||"",url:url||""})}
 /* explicit dates */
 var oedo={"2026-10-31":1,"2026-11-7":1,"2026-11-23":1,"2026-12-12":1,"2026-12-20":1};
 if(oedo[key])add("market","Oedo Antique Market","Tokyo","Around 250 outdoor stalls at Tokyo International Forum, 9:00 to 16:00, free. Cancelled in rain, so check the website that morning. The best market for tea and traditional craft.","https://www.antique-market.jp/english/");
 if(key==="2026-12-5"||key==="2026-12-6")add("market","Heiwajima Antique Fair","Tokyo","Indoor fair at the Tokyo Ryutsu Center, about 100 dealers, free. The oldest indoor antiques event in Japan, held four times a year.","https://kottouichi.com/en.html");
 if(key==="2026-11-10"||key==="2026-12-10")add("book","Ghibli Museum tickets go on sale","Tokyo","Tickets for the following month are released at 10:00 Japan time on the 10th, through Lawson Ticket. Be ready a few minutes early; popular dates go fast.","https://www.ghibli-museum.jp/en/");
 if(key==="2026-11-3")add("holiday","Culture Day","Japan","National holiday. Museums and gardens are busier.","");
 if(key==="2026-11-23")add("holiday","Labour Thanksgiving Day","Japan","National holiday on a Monday. Museums that close on Mondays usually open today and close the next day instead.","");
 if(key==="2026-11-15")add("season","Shichi-go-san","Japan","Traditional shrine visits for children aged three, five and seven, many in kimono. Big shrines such as Meiji Jingu and Hie are lively, especially at weekends around the 15th.","");
 if(key==="2026-11-29")add("exhibit","The Tale of Genji ends","Kyoto","Last day of the special exhibition at the Kyoto National Museum. The collection galleries reopen on 22 Dec.","https://www.kyohaku.go.jp/eng/");
 if(m===10&&d>=20||m===11&&d<=5)add("season","Autumn colour, typical peak","Kyoto and Tokyo","Roughly 20 Nov to 5 Dec in a normal year; it moves with the weather, so treat it as a guide, not a promise.","");
 /* weekly and monthly markets */
 if(dow===0)add("market","Hanazono Shrine antique market","Tokyo","A small Sunday market of 15 to 25 stalls in Shinjuku, usually not held during shrine festivals. The tea-ware guide suggests skipping it.","");
 if(d===15)add("market","Chion-ji handmade market","Kyoto","Monthly craft market (handmade goods, not antiques). Hours reported as roughly 8:00 or 9:00 to 16:00; confirm with the temple.","");
 if(d===15||d===28)add("market","Tomioka Hachimangu flea market","Tokyo","Flea market in Fukagawa; listed by Tokyo Cheapo for the 15th and 28th. Check before you go.","https://tokyocheapo.com/events/tomioka-hachimangu-markets/20260828/");
 if(d===21)add("market","Kobo-san at To-ji","Kyoto","Over 1,000 stalls under the five-storey pagoda, 7:00 to 15:30. Free to the grounds.","http://www.touji-ennichi.com/ichi/kobichi.htm");
 if(d===21||d===22)add("market","Shitenno-ji temple market","Osaka","300 to 400 stalls, 8:30 to 16:00, free to the grounds.","");
 if(d===25)add("market","Tenjin-san at Kitano Tenmangu","Kyoto","800 to 1,000 stalls, 6:00 to 16:00. Craft-led, good for everyday tea tools.","https://kitanotenmangu.or.jp/en/");
 if(dow===0&&d<=7){
  add("market","To-ji antique market (first Sunday)","Kyoto","A smaller antique market that runs on the first Sunday of the month.","http://www.touji-ennichi.com/ichi/kobichi.htm");
  add("market","Imamiya Shrine antique market","Kyoto","Under 20 stalls; the tea-ware guide calls it one to skip.","");
 }
 if(typeof PERSONAL!=="undefined"&&PERSONAL.events){var iso=y+"-"+("0"+(m+1)).slice(-2)+"-"+("0"+d).slice(-2);PERSONAL.events.forEach(function(e){if(e.d===iso)ev.push({k:e.k||"todo",t:e.t,c:e.c||"",note:e.note||"",url:e.url||""})})}
 return ev;
}

/* Museums closed on a given date (by weekday, with the Monday-holiday rule). */
function calClosed(y,m,d){
 var dow=new Date(y,m,d).getDay(),key=y+"-"+(m+1)+"-"+d,out=[];
 var prevMonHoliday=(key==="2026-11-24");   /* day after Labour Thanksgiving Day on Monday 23 Nov */
 MUSEUMS.forEach(function(x){
  var closed=x.closed.indexOf(dow)>-1;
  if(x.closed.indexOf(1)>-1&&key==="2026-11-23")closed=false;      /* Monday holiday: open */
  if(x.closed.indexOf(1)>-1&&prevMonHoliday)closed=true;            /* closed the next day instead */
  if(closed)out.push(x);
 });
 return out;
}

MUSEUMS.push({n:"Shinkansen (Tokyo to Nagoya) and the Shinano limited express",c:"Nakasendō",closed:[],conf:"usual",book:"advised",
  how:"Reserved and non-reserved seats on both. On an autumn weekend, reserve a seat ahead; the Kitaena and Ontake buses in the Kiso valley can't be reserved, and the JR Pass doesn't cover them.",
  url:"https://www.japan-guide.com/e/e6078.html"});
