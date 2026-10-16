/* ---------- Lore, third pass: details read directly from Culture Trip articles ---------- */
var CT_TOKYO=["Culture Trip: Tokyo's must-visit neighbourhoods","https://theculturetrip.com/asia/japan/tokyo/articles/a-tour-of-tokyos-trendiest-neighborhoods"];
var CT_UNDER=["Culture Trip: Under-the-radar Tokyo","https://theculturetrip.com/asia/japan/articles/the-under-the-radar-neighbourhoods-in-tokyo-you-should-visit"];
var CT_OSAKA=["Culture Trip: 13 Osaka neighbourhoods","https://theculturetrip.com/asia/japan/osaka/articles/a-comprehensive-neighborhood-guide-to-osaka"];
var CT_KYOTO=["Culture Trip: Kyoto's coolest neighbourhoods","https://theculturetrip.com/asia/japan/articles/the-5-coolest-neighborhoods-in-kyoto"];
var CT_TRAD=["Culture Trip: Five traditions of Kyoto","https://theculturetrip.com/asia/japan/articles/five-traditions-unique-to-kyoto"];

/* ===== New areas ===== */
KY_HOODS.push({id:"nishijin",name:"Nishijin",short:"Nishijin",jp:"西陣",lat:35.0315,lng:135.7500,r:.7,p:1,tags:["heritage","craft"],tag:"Kyoto's weaving district",
  intro:"Nishijin, in the north-west of central Kyoto, is the source of the brocade fabrics and obi sashes used for kimono. It is one of the city's most traditional neighbourhoods, with machiya townhouses, preserved streets and wooden architecture.",
  see:["Nishijin Textile Center, with a free kimono show","HOSOO, a textile house and showroom founded in 1688"],picks:"Come for craft and quiet streets; most workshops are small and some close on weekends."});
KY_PLACES.push({i:KY_PLACES.length,name:"Nishijin Textile Center",cat:"make",hood:"nishijin",lat:35.0315,lng:135.7512,note:"Free kimono shows and weaving displays",q:"Nishijin Textile Center, Kyoto, Japan",src:"guide"});
OS_HOODS.push(
 {id:"horie",name:"Horie",short:"Horie",jp:"堀江",lat:34.6740,lng:135.4893,r:.45,p:2,tags:["trendy","craft"],tag:"Independent boutiques and galleries",
  intro:"Horie is a patchwork of independent boutiques, art galleries and international restaurants, popular with local creatives and Osaka's expat community.",
  see:["Independent boutiques and plant shops","Small galleries and bicycle-and-coffee shops"],picks:"A relaxed afternoon after the louder Amerikamura next door."},
 {id:"tenma",name:"Tenma",short:"Tenma",jp:"天満",lat:34.6975,lng:135.5115,r:.5,p:2,tags:["heritage","food"],tag:"Shrines by day, lantern-lit bars by night",
  intro:"Tenma has ancient shrines and the longest shopping street in Japan by day, and by night it is lantern-lit and home to some of the city's best local bars.",
  see:["Osaka Tenmangu shrine","The Tenjinbashisuji shopping street"],picks:"Come hungry in the evening and drift between standing bars."});
OS_PLACES.push(
 {i:OS_PLACES.length,name:"Osaka Tenmangu",cat:"sight",hood:"tenma",lat:34.6970,lng:135.5117,note:"Shrine at the heart of Tenma",q:"Osaka Tenmangu, Osaka, Japan",src:"guide"},
 {i:OS_PLACES.length+1,name:"Horie boutiques",cat:"make",hood:"horie",lat:34.6740,lng:135.4893,note:"Independent shops, galleries and cafés",q:"Horie, Osaka, Japan",src:"guide"});

/* ===== Tokyo ===== */
addLore("shimokita",{
 h:["After the war the area became a small market hub for US soldiers, and in the 1970s and 80s alternative Tokyo youth moved out here to afford a creative lifestyle."],
 c:["Shimokita has one of the densest clusters of live-music venues in Tokyo outside the big hubs, with a focus on guitar-driven rock and indie bands. Shimokitazawa Three is a long-time cheap venue for up-and-coming acts.",
    "B&B is a bookstore with a beer bar, where you can browse books with a glass of local beer. New York Joe Exchange sells used clothing in a former public bathhouse."],
 f:["The area has no single speciality dish, but its independent coffee houses are the draw: Frankie recreates a Melbourne-style café and uses Allpress beans. Izakaya Ism is a much-loved local izakaya, and often has a wait."],
 t:["Venues and cafés change quickly here (the Culture Trip piece mentions a pop-up dining space that was due to close in 2019), so check before you go.","Shimokitazawa is about 7 minutes from Shinjuku on the Odakyu line and about 3 minutes from Shibuya on the Keio Inokashira line."],
 s:[["Culture Trip: Shimokitazawa guide","https://theculturetrip.com/asia/japan/articles/a-complete-neighbourhood-guide-to-shimokitazawa"],CT_TOKYO]});

addLore("ebisu",{
 c:["Nakameguro (Nakame) is built around the Meguro River, and the canal walk is beautiful in both the cherry-blossom (sakura) and autumn-leaf (koyo) seasons, which means a November visit catches the leaves. Its hipster reputation has been dented by new development, but it keeps much of its old-school charm.",
    "Daikanyama is technically a residential neighbourhood, known for small boutiques that favour up-and-coming designers and plenty of quiet cafés. Jiyugaoka, in the south of Meguro ward, is known for zakka shops (home and lifestyle goods) and La Vita, a small Venice-style canal with a gondola, about 10 minutes from Shibuya."],
 s:[CT_TOKYO,CT_UNDER]});

addLore("kagurazaka",{
 c:["Kagurazaka lies at the foot of the former Edo Castle. Along Waseda-dori, the main road, you may find few hints of its past, but the slim cobbled alleys on either side hold the old geisha-quarter atmosphere. Akagi Shrine, redesigned by Kengo Kuma, looks more like a contemporary gallery than a shrine."],
 s:[CT_TOKYO,CT_UNDER]});

addLore("jimbocho",{
 c:["Hundreds of used bookstores line Yasukuni-dori, and more than five major universities in the area make it an intellectual hub, with literary societies and publishing houses mixed in. It suits a quiet afternoon with a book and a coffee."],
 s:[CT_TOKYO]});

addLore("kichijoji",{
 c:["Kichijoji has a youthful, easy-going reputation, and on weekends you'll often hear live bands near the shops or people practising instruments in the park. Inokashira Park lies south of the station, with the main shopping district to the north."],
 s:[CT_TOKYO]});

addLore("yanesen",{
 h:["Yanaka, Nezu and Sendagi are shitamachi (downtown) areas, historically poor and lived in by lower-class residents, and they appeal today because they are among the few places left in Tokyo where visitors can see a little of the old city."],
 c:["The local cats are the neighbourhood's mascot. No one knows why so many strays settled here (one idea is the trees and temples), but locals grew so fond of them that they pushed for cats on the district flag.",
    "Seven cat statues were installed in 2008 around Yanaka Ginza for good luck, some on the rooftops of shops, and cat-themed desserts and souvenirs are sold along the street. The cats avoid crowds and gather on steps by the eastern entrance to Yanaka Ginza, and Yanaka Cemetery's wooded grounds are the best place to meet them. Feeding strays is discouraged.",
    "Dozens of mostly Buddhist temples are scattered around the area, and the district is home to artisanal craft stores and family-run businesses."],
 f:["Maneki-ya makes taiyaki, the fish-shaped bean-paste cakes, in the shape of the lucky maneki-neko cat, with other fillings such as beef stew and strawberry jelly with cream cheese."],
 s:[["Culture Trip: Tokyo's cat town","https://theculturetrip.com/asia/japan/articles/this-is-why-you-need-to-visit-tokyos-cat-town"],CT_UNDER]});

addLore("shibuya",{
 h:["Shibuya Station served over 2.4 million passengers a day at the time of the Culture Trip article, and about 2,500 people are thought to cross the scramble at once. It opened in 1885 on what became the JR Yamanote Line and is now shared by JR East, Keio, Tokyu and Tokyo Metro.",
    "Hachiko's story as Culture Trip tells it: the dog met Professor Ueno at the station each day, and after the professor died suddenly Hachiko kept returning for nine more years. When a former student reported it, the story spread. The statue was put up in 1934, and Hachiko died of cancer a year later at 11."],
 c:["The crossing is a favourite film backdrop: Lost in Translation (2003) and The Fast and the Furious: Tokyo Drift (2006) both used it.","The area has a reputation as the fashionable young people's district, home to the Shibuya 109 mall and several department stores around the station."],
 s:[["Culture Trip: A short history of Shibuya Crossing","https://theculturetrip.com/asia/japan/articles/tokyos-most-iconic-attraction-shibuya-crossing"]]});

WARDINFO["13110"].t+=" Jiyugaoka, in the south, is known for zakka (home and lifestyle goods) shops and La Vita, a small Venice-style canal.";
WARDINFO["13116"].t+=" Sugamo, nicknamed 'Harajuku for grannies', has Jizo-dori, a shopping street for retirees, and Koganji temple, where a statue of Togenuki Jizo is said to heal ailments.";
WARDINFO["13104"].t+=" Shin-Okubo is Tokyo's 'Little Korea', with the densest cluster of Korean restaurants, cafés and beauty shops, and Takadanobaba is the home of Astro Boy.";

/* ===== Kyoto ===== */
addLore("gion",{
 h:["Maiko and geiko emerged in Kyoto after the imperial court moved to Heian-kyo in 794."],
 c:["Walk Pontocho in the evening and you might hear the clip-clop of a geiko's geta sandals as she hurries to an appointment. Side streets hold traditional restaurants, bars and teahouses.",
    "Tea ceremony is deeply rooted in Zen, and Kyoto remains the spiritual home of both the ceremony and tea growing. The small teahouse En, near Chion-in, offers it."],
 s:[CT_KYOTO,CT_TRAD]});

addLore("higashiyama",{
 c:["Kiyomizu-dera is about a 20-minute walk from Yasaka Shrine in Gion, and the walk is part of the experience: narrow lanes lined with traditional wooden buildings and merchant shops selling local crafts and souvenirs.",
    "Yuzen dyeing, the technique behind the colourful designs of yuzen kimono, dates to the Genroku period (1688 to 1704), when the artist Miyazaki Yuzen developed it near Chion-in. A few shops in Kyoto still do it by hand."],
 s:[CT_KYOTO,CT_TRAD]});

addLore("nishijin",{
 h:["Kyoto's weaving district sits in the north-west of central Kyoto, and the current style of kimono, which opens at the front and is tied with an obi sash, developed in Kyoto in the Edo period (1603 to 1868)."],
 c:["Nishijin is the source of kimono fabric and obi, with machiya townhouses and well-preserved streets. HOSOO, a textile company and showroom founded in 1688, still works here, and the Nishijin Textile Center offers a free kimono show and shopping."],
 f:["There are also small cafés in the old machiya, a good place to rest between workshops."],
 s:[CT_KYOTO,CT_TRAD,["Kyoto Prefecture: traditional crafts","https://www.pref.kyoto.jp/en/01-02-01.html"]]});

addLore("arashiyama",{
 c:["Culture Trip's summary: walk through the bamboo grove, eat a traditional Zen Buddhist meal, and meet the cheeky local monkeys."],
 s:[CT_KYOTO]});

addLore("fushimi",{
 c:["Thousands of vermilion gates form tunnels along several paths that snake up the forested mountain to the summit, and Culture Trip calls it one of the most impressive sights in all of Japan."],
 s:[CT_KYOTO]});

/* ===== Osaka ===== */
addLore("dotonbori",{
 c:["Namba, the wider entertainment district, is where bunraku and kabuki are still regularly performed, and Hozenji Yokocho, a quiet, mystical backstreet, sits a few minutes from the canal.","Shinsaibashi, just north, is the main shopping district: high-end boutiques, 100-yen shops, and tax-free shopping in the big Shinsaibashisuji arcade."],
 s:[CT_OSAKA]});

addLore("amemura",{
 c:["Amemura is a small, eclectic haven for Osaka's counterculture, where skateboarders, Lolita fashion and American paraphernalia (a Statue of Liberty replica, cowboy hats) live together. The nightlife includes a video-game bar called Space Station, a 'nocturnal apothecary' called Nayuta and the nightclub Circus."],
 s:[CT_OSAKA]});

addLore("horie",{
 h:["Horie grew into Osaka's boutique-and-café neighbourhood just west of Amerikamura."],
 c:["It is a patchwork of independent boutiques, galleries and authentic foreign restaurants where local artistic types and expats gather: botanical shop Biotop and the coffee-and-bicycle shop Giracha are named examples."],
 f:["Expect international food and independent coffee; Saboten, a Mexican restaurant, is known for Taco Tuesday."],
 s:[CT_OSAKA]});

addLore("tenma",{
 h:["Tenma is one of Osaka's older districts, centred on the Osaka Tenmangu shrine."],
 c:["By day it has ancient shrines and the longest shopping street in Japan, and by night lanterns light the lanes."],
 f:["The evening draw is the standing bars and local pubs, among the best in the city."],
 s:[CT_OSAKA]});

addLore("nakazaki",{
 h:["Nakazakicho began to become a hipster hangout in 2001, when Jun Amanto opened Salon de AManTO as an artist refuge in a derelict district. He turned a 120-year-old building into half café, half community centre, recycling every bit of the old building, and has since worked with other artists to renovate more buildings."],
 c:["The district is full of tiny independent galleries. Gallery Yolcha, a vine-covered wooden building down a dirt path, has hidden nooks and levels reached by ladder; Irorimura and AIDA Gallery are better known. Green Pepe is a vintage shop specialising in 1960s and 70s items."],
 f:["Taiyo no Tou is a colourful café with antiques and fruit-and-veg-heavy menus, and Granda Familio roasts its own granola. Nakazakicho is one of the few places in Osaka where vegan, vegetarian and organic food is easy to find."],
 s:[["Culture Trip: Things to do in Nakazakicho","https://theculturetrip.com/asia/japan/osaka/articles/the-best-things-to-do-in-nakazakicho"],CT_OSAKA]});

addLore("umeda",{
 c:["Umeda is the northern hub where most of Osaka's train lines meet, with commuters by day and shopping, dining and nightlife around them."],
 s:[CT_OSAKA]});

addLore("shinsekai",{
 c:["Culture Trip says Shinsekai's faded neon reflects a heyday shortly after the war, though it had an earlier life as home to a grand amusement park and what was then Asia's tallest structure. Spa World, the giant bath complex, is also here."],
 s:[CT_OSAKA]});

addLore("osakacastle",{
 c:["Morinomiya, the area around the castle, is a thriving commercial and residential district, and the castle sits inside a large park where you could spend a whole day."],
 s:[CT_OSAKA]});
