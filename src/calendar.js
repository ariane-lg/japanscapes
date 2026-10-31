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
 {n:"Sumida Hokusai Museum",c:"Tokyo",closed:[1],conf:"official",book:"advised",
  how:"Closed Mondays, and the next weekday after a Monday holiday. 9:30 to 17:30, last entry 17:00. The 10th-anniversary show runs to 23 Nov (second display from 21 Oct); adult ticket about ¥1,500. The museum's pages for other shows sell timed online tickets that skip the reception line, with limited sales and no changes or refunds. I could not find the ticket page for this show, so look on the museum's site. The permanent room is mostly replicas; originals are in the special show.",
  url:"https://hokusai-museum.jp/?lang=en"},
 {n:"Ota Memorial Museum of Art (ukiyo-e, Harajuku)",c:"Tokyo",closed:[1],conf:"official",book:"no",
  how:"Ukiyo-e prints only. Katsushika Oi: Night Scene in the Yoshiwara runs 6 Oct to 6 Dec; the second display starts 7 Nov and the museum is closed 4 to 6 Nov for the change. Closed Mondays (9, 16 and 24 Nov). No reservation needed; cash only. Weekends, holidays and the last days of a show are busy, so go on a weekday. Admission and hours were not on the page I read, so check.",
  url:"https://ukiyoe-ota-muse.jp/eng"},
 {n:"21_21 Design Sight",c:"Tokyo",closed:[2],conf:"usual",book:"no",
  how:"Closed Tuesdays, between exhibitions and over New Year.",url:"https://www.2121designsight.jp/en/"},
 {n:"Imperial Palace East Gardens",c:"Tokyo",closed:[1,5],conf:"usual",book:"no",
  how:"Free; normally closed Mondays and Fridays.",url:"https://www.kunaicho.go.jp/e-event/higashigyoen02.html"},
 {n:"Kyoto National Museum",c:"Kyoto",closed:[1],conf:"official",book:"no",
  how:"Open 9:00 to 17:30; if a Monday is a national holiday it opens that day and closes the next. Special exhibition The Tale of Genji runs to 29 Nov 2026, with the collection galleries off view until 22 Dec. No booking needed for it.",
  url:"https://www.kyohaku.go.jp/eng/",src:"kno"},
 {n:"Kyoto Imperial Palace",c:"Kyoto",closed:[1],conf:"official",book:"no",
  how:"Walk-in and free; the Imperial Household Agency says no registration or prior arrangement is needed. Closed Mondays (open on a Monday holiday and closed the next day instead) and 28 Dec to 4 Jan; it can close without notice for court functions or weather. Enter by Seishomon Gate; bags are checked and large baggage is not allowed. Free guided tours of about 50 minutes, no registration (may need it if crowded): English at 10:00 and 14:00. A free audio-guide app is also offered. Opening and last-entry times are on the official calendar, not the page I read; one earlier source gives winter entry to about 15:20 and closing at 16:00.",url:"https://kyoto-gosho.kunaicho.go.jp/en/visit",src:"kuna"},
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
 if(key==="2026-11-4"||key==="2026-11-5"||key==="2026-11-6")add("exhibit","Ota Museum closed for display change","Tokyo","The ukiyo-e museum in Harajuku is closed 4 to 6 Nov. The second display of the Oi show opens on 7 Nov.","https://ukiyoe-ota-muse.jp/eng");
 if(key==="2026-11-7")add("exhibit","Ota Museum: second display opens","Tokyo","Second half of Katsushika Oi: Night Scene in the Yoshiwara, to 6 Dec. No booking, cash only; weekdays are quieter.","https://ukiyoe-ota-muse.jp/eng");
 if(key==="2026-11-23")add("exhibit","Hokusai Museum 10th-anniversary show ends","Tokyo","Last day of the special show of the museum's best works. Look for its timed online tickets.","https://hokusai-museum.jp/?lang=en");
 if(key==="2026-11-3")add("holiday","Culture Day","Japan","National holiday. Museums and gardens are busier.","");
 if(key==="2026-11-23")add("holiday","Labour Thanksgiving Day","Japan","National holiday on a Monday. Museums that close on Mondays usually open today and close the next day instead.","");
 if(key==="2026-11-15")add("season","Shichi-go-san","Japan","Traditional shrine visits for children aged three, five and seven, many in kimono. Big shrines such as Meiji Jingu and Hie are lively, especially at weekends around the 15th.","");
 if(key==="2026-11-29")add("exhibit","The Tale of Genji ends","Kyoto","Last day of the special exhibition at the Kyoto National Museum. The collection galleries reopen on 22 Dec.","https://www.kyohaku.go.jp/eng/");
 if(m===10&&d>=20||m===11&&d<=5)add("season","Autumn colour, typical peak","Kyoto and Tokyo","Roughly 20 Nov to 5 Dec in a normal year; it moves with the weather, so treat it as a guide, not a promise.","");
 if(m===10&&d>=20||m===11&&d<=6)add("season","Eikan-do evening illumination","Kyoto","Reported 20 Nov to 6 Dec 2026, about 17:30 to 21:00. One guide says advance tickets are not available and another says some dates are online-only, so check the temple's notice.","");
 if(m===10&&d>=21&&d<=30)add("season","Kiyomizu-dera evening opening","Kyoto","One guide gives 21 to 30 Nov 2026 for the autumn night opening; others say late Nov to early Dec. Confirm the dates and ticket rules.","");
 if(key==="2026-11-24")add("exhibit","Osaka Castle: 3rd floor closed","Osaka","The tower's 3rd floor closes for a display change today; the rest of the tower stays open.","");
 if(key==="2026-11-25")add("exhibit","Osaka Castle: 4th floor closed","Osaka","The tower's 4th floor closes for a display change today; the rest of the tower stays open.","");
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
 if(typeof PERSONAL!=="undefined"&&PERSONAL.events){var iso=y+"-"+("0"+(m+1)).slice(-2)+"-"+("0"+d).slice(-2);PERSONAL.events.forEach(function(e){if(e.d===iso)ev.push({k:e.k||"todo",t:e.t,c:e.c||"",note:e.note||"",url:e.url||"",steps:e.steps||null,tips:e.tips||null})})}
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
  how:"The Shinano has two non-reserved cars except in peak holiday periods, so a reservation is not required in mid-November, but it is the safe choice, above all for Nagiso where only four Shinano a day stop. The Shinkansen fills up on an autumn weekend, so reserve that too. The Kitaena and Ontake buses in the Kiso valley can't be reserved, and the JR Pass doesn't cover them.",
  url:"https://www.japan-guide.com/e/e6078.html"});

/* ---------- Main temples, palaces and historic sites: closing days and booking ---------- */
MUSEUMS.push(
 {n:"Nijo Castle",c:"Kyoto",closed:[],conf:"usual",book:"no",how:"Open daily in November, admission 8:45 to 16:00. Guides report the Ninomaru Palace closed on Tuesdays in December, January, July and August, and the official site notes shortened admission on Sunday 6 December 2026. Confirm before you go.",url:"https://nijo-jocastle.city.kyoto.lg.jp/?lang=en"},
 {n:"Edo-Tokyo Museum",c:"Tokyo",closed:[1],conf:"usual",book:"no",how:"Reopened on 31 March 2026 after about four years of renovation. Closed on Mondays, but open on a Monday holiday and closed the next weekday instead. Special exhibitions cost extra.",url:"https://www.edo-tokyo-museum.or.jp/en/"},
 {n:"Imperial Palace inner grounds tour",c:"Tokyo",closed:[0,1],conf:"usual",book:"required",how:"A free guided walk through the inner grounds, booked through the Imperial Household Agency; one guide says at least four days ahead. Tours are not held on Sundays or Mondays. The East Gardens next to it need no booking.",url:"https://sankan.kunaicho.go.jp/english/index.html"},
 {n:"Tokyo Skytree",c:"Tokyo",closed:[],conf:"usual",book:"advised",how:"Open all year. A date-and-time ticket bought online saves the queue at the ticket desk.",url:"https://www.tokyo-skytree.jp/en/"},
 {n:"Saiho-ji (the moss temple)",c:"Kyoto",closed:[],conf:"usual",book:"required",how:"Entry is by advance reservation only, through the temple's booking site or a return postcard. Guides give the fee as ¥4,000 plus a small online fee, a minimum age of 13 (older rules said higher), and visits starting around 9:30; the online calendar shows which days still have places, and parties of three or more apply separately.",url:"https://saihoji-kokedera.com/en/reservation.html"},
 {n:"Osaka Castle tower",c:"Osaka",closed:[],conf:"usual",book:"no",how:"Open daily 9:00 to 18:00 (last entry 17:30), closed 28 December to 1 January. Two exhibit floors close for display changes: the 3rd on 24 Nov and the 4th on 25 Nov 2026.",url:"https://www.osakacastle.net/english/"}
);
var OPENDAILY=["Senso-ji","Meiji Jingu","Zojo-ji","Hama-rikyu Gardens","Koishikawa Korakuen","Fushimi Inari-taisha","Kiyomizu-dera","Kinkaku-ji","Ryoan-ji","Sumiyoshi Taisha"];
