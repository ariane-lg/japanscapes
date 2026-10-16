/* ---------- Lore: history, culture & craft, food, practical tips, sources ---------- */
/* Written in my own words from the linked sources. h=history  c=culture & craft  f=food  t=good to know  s=sources */
var CT_NOTE="Culture Trip articles were read in full. Reddit could not be accessed, so no Reddit threads are used.";
var LORE={
 asakusa:{
  h:["Tradition dates Senso-ji to 628, when two fishermen netted a small Kannon image from the Sumida River; a village headman is said to have turned his house into its first shrine. A priest re-established the temple in 645, which is why you also see 645 quoted.",
     "Under the Edo shoguns the temple town in front of the gate (a monzen-machi) became a centre of popular culture. The neighbouring Asakusa Shrine, built in 1649, honours the three founders and hosts the huge Sanja Matsuri each May.",
     "Asakusa was Tokyo's entertainment quarter before Shibuya and Shinjuku took over that role; Hanayashiki, Japan's oldest amusement park, is still here."],
  c:["Traditional tsugaru-shamisen is still performed in some local izakaya.","Kappabashi, a short walk west, is the knife and kitchenware street. Sources disagree on its age (some say about 1912, others far older), but it now has around 170 specialist shops."],
  f:["Nakamise's snacks, from rice crackers to freshly fried sweets, follow the temple-town tradition of food for pilgrims."],
  t:["The temple is lit and nearly empty early morning and after dark; Nakamise's shops mostly close by about 6 pm."],
  s:[["Tokyo Cheapo: Senso-ji guide","https://tokyocheapo.com/entertainment/sightseeing/sensoji-temple-guide/"],["Wikipedia: Asakusa Shrine","https://en.wikipedia.org/wiki/Asakusa_Shrine"],["Japan Times: Old Asakusa lives on","https://japantimes.co.jp/life/2005/01/07/travel/old-asakusa-lives-on"],["Culture Trip: Tokyo neighbourhoods","https://theculturetrip.com/asia/japan/tokyo/articles/a-tour-of-tokyos-trendiest-neighborhoods"],["Tokyo Metropolitan: Kappabashi","https://www.sanbo.metro.tokyo.lg.jp/taito/language/eng/"]]},
 ueno:{
  h:["Ameyoko began as a black market after the war and became a regulated street market in 1946. Its name is disputed: some say it comes from 'ame' (sweets), others from 'America', for the cheap American goods sold there.",
     "Ueno Park's museum cluster is built on the grounds of the old Kan'ei-ji temple estate; the Tokyo National Museum, founded in 1872, is the oldest national museum in Japan."],
  c:["Ueno remains the best single place in Tokyo for Japanese art: the Tokyo National Museum's Honkan galleries cover painting, swords, lacquer and ceramics from prehistory to the Edo period."],
  f:["Ameyoko's stalls and standing bars sell cheap seafood, dried goods and snacks; it is loud on purpose."],
  s:[["Wattention: Ueno shopping","https://wattention.com/ext-ueno-shopping/"],["Tokyo National Museum","https://www.tnm.jp/?lang=en"]]},
 yanesen:{
  h:["Yanaka, Nezu and Sendagi came through the March 1945 firebombing largely intact. One account credits a shift in the wind that night. The raised ground also protected it in the 1923 earthquake, which is why wooden houses and narrow lanes survive.",
     "More than 70 Buddhist temples cluster here. Yanaka Cemetery holds the grave of Tokugawa Yoshinobu, the last shogun."],
  c:["Small craft studios, galleries and shops are tucked between the temples. The area also has a famous population of street cats, which has turned them into a mascot."],
  f:["Yanaka Ginza's grilled croquettes and rice crackers, plus kissaten coffee, are the staple stop."],
  t:["Go before the day-trippers arrive; many small shops close on Mondays or Tuesdays."],
  s:[["Japan Experience: Yanaka","https://www.japan-experience.com/all-about-japan/tokyo/attractions-excursions/yanaka-0"],["Culture Trip: Tokyo's cat town","https://theculturetrip.com/asia/japan/articles/this-is-why-you-need-to-visit-tokyos-cat-town"],["Urbophilia: My Yanesen","https://urbophilia.substack.com/p/033-tokyo-2o25-derive-vi-my-yanesen"]]},
 kuramae:{
  h:["The name means 'in front of the storehouses': the Edo shogunate stored rice here along the Sumida. Sources disagree on the numbers (54 or 67 warehouses, depending on who you read).",
     "By the Meiji era the granaries had given way to tanneries, factories and wholesalers, notably in stationery, paper and leather, which set up the craft ecosystem seen today."],
  c:["Lower rents and ward support drew young makers into old warehouses, so the area is now associated with monozukuri, the culture of making things well. Look for leather workshops, stationery (Kakimori), natural-dye studios and bean-to-bar chocolate."],
  s:[["Time Out: Kuramae area guide","https://www.timeout.com/tokyo/things-to-do/kuramae-area-guide"],["Japan Visitor: Kuramae","https://www.japanvisitor.com/japan-city-guides/kuramae"],["Islands: Tokyo's Brooklyn","https://www.islands.com/2158929/kuramae-brooklyn-tokyo-stylish-artisan-district-coffee-shops-craftsmen-monozukuri-vibes/"]]},
 nihonbashi:{
  h:["The bridge dates to 1603 and was made the base point for the five great highways, including the Tokaido and the Nakasendo you are about to walk; Japan's road distances are still measured from it. The current stone bridge is from the early 20th century (1911 in one source).",
     "Merchants, the Mitsui family and the gold and silver guilds set up here; Mitsukoshi grew out of this district and is considered Japan's first department store. Fish markets lined the river until the 1923 earthquake."],
  c:["Old shops here still sell washi paper, dried bonito and nori beside the department stores."],
  s:[["Wikipedia: Nihonbashi","https://en.wikipedia.org/wiki/Nihonbashi"]]},
 tsukiji:{
  h:["Tsukiji means 'built land'; it was reclaimed in the Edo period. After the 1923 earthquake wrecked the Nihonbashi fish market, the trade moved here and the market opened in 1935.",
     "The wholesale market moved to Toyosu in October 2018. The outer market of roughly 400 to 500 shops stayed on."],
  f:["Come for tamagoyaki, grilled seafood and knives; most stalls wind down by early afternoon."],
  s:[["GO TOKYO: Tsukiji Outer Market","https://www.gotokyo.org/en/spot/65/"],["JW Web Magazine: Tsukiji","https://jw-webmagazine.com/tips/tsukiji-outer-market-tokyos-historic-fish-market/"]]},
 shinjuku:{
  h:["Shinjuku's postwar black market was organised by a yakuza gang and was among the first of the Occupation era; the authorities broke the markets up in 1949.",
     "Omoide Yokocho grew from 'Lucky Street' stalls at the west exit (and suffered a large fire in 1999 before being rebuilt). Golden Gai's row houses, once partly brothels, were reworked after the 1956 anti-prostitution law into the tiny bars that became a hangout for artists and writers."],
  c:["Golden Gai bars seat a handful of people each and often set a cover charge or a regulars-first policy; look for signs in English."],
  f:["Yakitori smoke at Omoide Yokocho is the classic first-night Shinjuku scene."],
  s:[["Unseen Japan: History of Shinjuku","https://unseen-japan.com/history-of-shinjuku-part-2/"],["Omoide Yokocho history","https://en.shinjuku-omoide.com/history"]]},
 harajuku:{
  h:["Harajuku was an Edo post-town stop, then a district of noble estates in the Meiji era. The station opened in 1906, and Meiji Jingu's founding in 1920 brought crowds and shops.",
     "The 1964 Olympics used Yoyogi's gymnasium nearby. Laforet opened in 1978, a Sunday pedestrian street began in 1977, and in the 1980s Takeshita Street became the home of the dancing 'takenoko-zoku' groups. In 1965 the address was officially renamed Jingumae."],
  s:[["Wikipedia: Harajuku","https://en.wikipedia.org/wiki/Harajuku"]]},
 akihabara:{
  h:["A great fire in 1869 led the government to clear a firebreak, and a fire-protection shrine was set up there the following year; the local nickname Akibagahara became Akihabara. The railway freight yard opened in 1890.",
     "After the war the area filled with black-market radio-parts stalls under the tracks, then household appliances (hence 'Electric Town'), then computers in the 1980s, which brought in the otaku crowd."],
  s:[["Akihabara Electric Town: origins","https://akiba.or.jp/wp_en/archives/history00"],["Yokogao: Akihabara and otaku","https://www.yokogaomag.com/editorial/akihabara-otaku-walhalla-history"]]},
 kagurazaka:{
  h:["An Edo-period temple town (the Bishamonten temple, Zenkoku-ji, drew crowds) that grew into a major hanamachi. One estimate puts the pre-1923 numbers at about 150 ryotei and 600 geisha; a 2005 count found 34 geisha and 9 ryotei, so it is smaller but still working.",
     "It became Tokyo's unofficial French quarter through the nearby French institute and school, and now has the city's densest cluster of French bakeries, bistros and cheese shops."],
  s:[["Tokyo Updates: Kagurazaka","https://www.tokyoupdates.metro.tokyo.lg.jp/en/post-978/"],["Metropolis: Kagurazaka guide","https://metropolisjapan.com/?p=204950"]]},
 jimbocho:{
  h:["Named for a 17th-century samurai, Nagaharu Jinbo. Law schools opened here in the early 1880s, and the secondhand textbook trade for students grew into a book town.",
     "A big fire in 1913 devastated it; Shigeo Iwanami opened a small shop that grew into the Iwanami Shoten publishing house. The district largely escaped wartime bombing, so many pre-war shops remain."],
  f:["Curry houses and vintage cafés feed the browsers; Ladrio, opened in 1949 as a bookshop reading room, is credited with bringing Viennese coffee to Japan."],
  t:["Shop counts range from 100 to 400 depending on the source. Many close Sundays."],
  s:[["Time Out: What kind of town is Jimbocho","https://www.timeout.com/tokyo/things-to-do/what-kind-of-town-is-jimbocho-a-story-of-antiquarian-books-and-publishing"],["Atlas Obscura: Jimbocho Book Town","https://www.atlasobscura.com/places/jimbocho-book-town"]]},
 shimokita:{
  h:["Until the 1920s it was rice farmland. After the 1923 earthquake people moved out of the old city and the area built up; students from nearby universities gave it its bohemian edge.",
     "The live-house scene took off in the 1970s, and the theatre scene is closely tied to Kazuo Honda, who started with a bar and went on to found theatres here."],
  c:["Dozens of live houses (typically about 200 capacity) cluster south of the station, plus vintage shops that made it famous for secondhand clothes."],
  t:["Redevelopment around the station has changed the old feel; Culture Trip's guide flags its uncertain future."],
  s:[["Culture Trip: Shimokitazawa guide","https://theculturetrip.com/asia/japan/articles/a-complete-neighbourhood-guide-to-shimokitazawa"],["Japan Experience: Shimokitazawa","https://www.japan-experience.com/all-about-japan/tokyo/museums-galleries/shimokitazawa"]]},
 koenji:{
  h:["Koenji's alternative identity grew out of the 1960s student movements, and in the 1970s cheap rents drew musicians, helping make it a birthplace of Japanese punk alongside nearby Nakano.",
     "Kissaten coffee houses flourished in the 1950s, around the time the Awa Odori festival began. One source argues Koenji escaped the gentrification that hit Shimokitazawa, though that is debated."],
  s:[["Tokyo Cheapo: Koenji guide","https://tokyocheapo.com/entertainment/koenji-foreigner-guide/"],["Japan Experience: Koenji","https://www.japan-experience.com/all-about-japan/tokyo/attractions-excursions/koenji"]]},
 roppongi:{
  h:["Roppongi Hills was a 17-year project by the developer Minoru Mori; the Mori Art Museum opened in 2003 on the upper floors of Mori Tower. The museum has no permanent collection, so it is worth checking what is on."],
  s:[["Wikipedia: Mori Art Museum","https://en.wikipedia.org/wiki/Mori_Art_Museum"]]},
 kiyosumi:{
  h:["A former working-class warehouse district that became Tokyo's coffee neighbourhood after roasters, including Blue Bottle and Allpress, opened large stores there."],
  s:[["Culture Trip: Under-the-radar Tokyo","https://theculturetrip.com/asia/japan/articles/the-under-the-radar-neighbourhoods-in-tokyo-you-should-visit"]]},
 higashiyama:{
  h:["Kiyomizu-yaki, Kyoto's best-known pottery, grew along the slopes below Kiyomizu-dera, flourishing from the early 1600s with the rise of tea ceremony ceramics. The earliest known Kyoto ceramics date back some 1,200 years to Seikanji Temple."],
  c:["Gojozaka, the approach to Kiyomizu-dera, is lined with pottery shops; Asahido is a long-established dealer in Kyo-yaki and Kiyomizu-yaki."],
  t:["Kyoto's best autumn colour usually peaks from late November, so a mid-November visit may catch only the early part of it; early starts beat the crowds."],
  s:[["Kyoto Prefecture: traditional crafts","https://www.pref.kyoto.jp/en/01-02-01.html"],["Self Guide Japan: Kyoto autumn 2026","https://selfguidejapan.com/blog/kyoto-autumn-leaves-2026"],["Culture Trip: Coolest neighbourhoods in Kyoto","https://theculturetrip.com/asia/japan/articles/the-5-coolest-neighborhoods-in-kyoto"]]},
 gion:{
  h:["Gion grew up around Yasaka Shrine (formerly known as Gion-sha). Dates for the shrine vary between sources, so treat the neighbourhood's origins as 'medieval' rather than precise.",
     "Kyoto was the imperial capital from 794 to 1869, which is why it needed high-end entertainment for dignitaries. The city has five hanamachi (kagai): Gion Kobu, Gion Higashi, Pontocho, Kamishichiken and Miyagawacho."],
  c:["Geiko and maiko walk from their okiya to the ochaya teahouses for private engagements; Hanamikoji is the best-known street for glimpsing them."],
  t:["Kyoto residents have asked visitors to stop photographing geiko in private alleys; respect the signs."],
  s:[["GLT: Gion travel guide","https://www.gltjp.com/en/article/item/20708/"],["Culture Trip: Kyoto traditions","https://theculturetrip.com/asia/japan/articles/five-traditions-unique-to-kyoto"]]},
 pontocho:{
  h:["Nishiki's start date is contested: sources say the 8th century, the Heian period, around 1310, or official permission in 1615. Either way it has fed Kyoto for centuries and earned the name 'Kyoto's kitchen'.",
     "Pontocho, between Shijo and Sanjo, is one of the five kagai."],
  f:["Nishiki is the place for tsukemono (pickles), fresh tofu and yuba, miso and Uji tea. Kyoto vegetables (kyo-yasai) have been officially promoted as a brand since 1998. Obanzai, many small home-style plates, is the everyday cooking. Kaiseki grew from tea ceremony meals, and Nanzenji's yudofu is the classic temple dish."],
  s:[["Arigato Japan: Nishiki Market history","https://arigatojapan.co.jp/history-of-nishiki-market/"],["Table Journey: Kyoto food history","https://tablejourney.com/japan/kyoto/food-history/"],["Lonely Planet: Nishiki Market","https://www.lonelyplanet.com/pois/402526"]]},
 fushimi:{
  h:["Gekkeikan's founder, Jiemon Okura, started brewing in Fushimi in 1637, drawn by the district's plentiful, soft, low-iron water. The company's museum describes how brewing moved to year-round production."],
  f:["Sake tasting at the Gekkeikan Okura museum or in the small breweries is the tradition; the inari-zushi that goes with Fushimi Inari is the shrine's food."],
  t:["The Ohitaki fire festival at Fushimi Inari is on 8 November."],
  s:[["Gekkeikan: history","https://us.gekkeikan.com/about/history/"],["Kyoto Museums: Gekkeikan Okura","https://www.kyoto-museums.jp/en/museum/south/3901"]]},
 arashiyama:{
  h:["Heian-period courtiers built retreats here; Retired Emperor Go-Saga had cherries brought from Mt Yoshino. Tenryu-ji was founded in 1339 by Ashikaga Takauji to console the spirit of Emperor Go-Daigo, and its garden by Muso Soseki is a standard example of 'borrowed scenery' (shakkei)."],
  t:["The bridge's naming story, tied to Emperor Kameyama's moon-viewing, doesn't quite fit the Heian dating some guides give it."],
  s:[["JNTO: Arashiyama","https://www.japan.travel/en/spot/1142/"],["Japan Experience: Arashiyama and Sagano","https://www.japan-experience.com/all-about-japan/kyoto/attractions-excursions/arashiyama-sagano"]]},
 kinkakuji:{
  h:["Built as a retirement villa for the shogun Ashikaga Yoshimitsu in the 1390s and turned into a Zen temple after his death; the present gilded pavilion is a 1955 rebuild after an arson fire in 1950. Ryoan-ji's rock garden, a short bus ride away, dates from the late 15th century."],
  s:[["Wikipedia: Kinkaku-ji","https://en.wikipedia.org/wiki/Kinkaku-ji"]]},
 demachiyanagi:{
  h:["The point where the Kamo and Takano rivers meet is a popular hangout for Kyoto University students."],
  s:[["Culture Trip: Coolest neighbourhoods in Kyoto","https://theculturetrip.com/asia/japan/articles/the-5-coolest-neighborhoods-in-kyoto"]]},
 kurama:{
  h:["Kurama-dera is traced to 770, when the monk Gantei enshrined Bishamonten. The best-known legend is that the young Minamoto no Yoshitsune, sent here to train as a monk, was taught swordsmanship by the tengu Sojobo, though that part comes from later tradition and a Muromachi Noh play, 'Kurama Tengu'.",
     "The path from Kurama to Kibune runs through the 'Tengu Forest' valley."],
  s:[["Yokai.jp: Kurama Sojobo","https://yokai.jp/en/yokai/kurama-sojobo"],["Discover Kyoto: Kurama-dera","https://www.discoverkyoto.com/places-go/kurama-dera/"]]},
 dotonbori:{
  h:["The canal was dug between about 1612 and 1615; the new lord of Osaka Castle named it after its builder (Nariyasu Doton), and the story later shifted to a fictional merchant, Yasui Doton.",
     "From 1621 the shogunate designated the canal-side as Osaka's theatre district. At its peak there were kabuki houses, bunraku houses (Takemoto-za and Toyotake-za) and the Karakuri mechanical theatre; Chikamatsu's 'Love Suicides at Sonezaki' premiered at Takemoto-za in 1703.",
     "Cinema, then the war, ended the theatre era, and the area was rebuilt as a food-and-neon district. The Glico sign dates to 1935."],
  f:["Takoyaki is credited to Endo Tomekichi of Aizuya in the 1930s (he began with 'rajioyaki' in 1933, then added octopus). Kushikatsu Daruma opened in 1929."],
  s:[["Wikipedia: Dotonbori","https://en.wikipedia.org/wiki/D%C5%8Dtonbori"],["MLIT: Dotonbori","https://www.mlit.go.jp/tagengo-db/en/R4-00636.html"],["Unseen Japan: Takoyaki history","https://unseen-japan.com/takoyaki-japan-history/"],["Culture Trip: Osaka neighbourhoods","https://theculturetrip.com/asia/japan/osaka/articles/a-comprehensive-neighborhood-guide-to-osaka"]]},
 shinsekai:{
  h:["Laid out in 1912 to showcase Osaka as a modern city, with Coney Island and Paris as models and then the tallest structure in Asia. Its heyday came after the war, and the retro look froze after that.",
     "Kushikatsu, deep-fried skewers, is especially associated with Shinsekai; Daruma opened in 1929."],
  s:[["Culture Trip: Osaka neighbourhoods","https://theculturetrip.com/asia/japan/osaka/articles/a-comprehensive-neighborhood-guide-to-osaka"],["Lonely Planet: five Osaka dishes","https://www.lonelyplanet.com/articles/five-must-try-dishes-from-osaka"]]},
 amemura:{
  h:["The name comes from the shops selling imported American goods after 1965; in the 1970s renovated warehouses sold secondhand clothes and jeans. Before that the area was linked to the Edo-period charcoal trade."],
  s:[["Osaka Info: Amerikamura","https://osaka-info.jp/en/spot/america-mura-american-village/"]]},
 umeda:{
  h:["The Umeda Sky Building, by Hiroshi Hara, opened in 1993. It was conceived in 1988 as part of a four-tower 'City of Air', cut to two towers after the bubble burst. Its success helped turn Umeda from a business district into a shopping and sightseeing one."],
  s:[["Wikipedia: Umeda Sky Building","https://en.wikipedia.org/wiki/Umeda_Sky_Building"]]},
 osakacastle:{
  h:["Toyotomi Hideyoshi began the castle in 1583 on the site of the Ishiyama Honganji temple fortress. The Toyotomi were destroyed in the sieges of 1614 and 1615, the shogunate rebuilt the castle in the 1620s, lightning burned the keep in 1665, and the present concrete keep dates from 1931."],
  s:[["Wikipedia: Osaka Castle","https://en.wikipedia.org/wiki/Osaka_Castle"]]},
 nakazaki:{
  h:["One of the few Osaka neighbourhoods to escape the wartime bombing. It sat run-down until its prewar buildings were reborn as galleries, cafés and vintage shops; the revival is often traced to Salon de AManTO opening in a 120-year-old building in 2001."],
  c:["A good place to spend an afternoon with craft shops, small galleries and independent cafés."],
  s:[["Culture Trip: Things to do in Nakazakicho","https://theculturetrip.com/asia/japan/osaka/articles/the-best-things-to-do-in-nakazakicho"]]},
 magome:{
  h:["Toson Shimazaki, born here in 1872, wrote the historical novel 'Before the Dawn', serialised from 1929 to 1935. His father ran the Magome honjin, now the Toson Memorial Museum. A fire in 1895 destroyed much of the town, and the post-town economy faded after the railway came in 1909."],
  c:["Magome is more polished and restored, Tsumago more rugged and authentic; Magome's views over the valley come with its hillside setting."],
  t:["Hotel and minshuku meals are usually included because there are few dining options once the day-trippers leave, and cash is wise since some inns do not take cards."],
  s:[["Wikipedia: Nakasendo","https://en.wikipedia.org/wiki/Nakasend%C5%8D"],["Japan Guide: Magome-Tsumago Trail","https://www.japan-guide.com/e/e6078.html"]]},
 trail:{
  t:["Luggage forwarding between the two towns: drop bags at the tourist office between 8:30 and 11:30, collect at the other end from 13:00 to 17:00, for ¥1,000 per item, normally from 20 March to the end of November. Check the exact end date and any weekend-only rule before you go.",
     "Magome to Tsumago has the climb first (roughly a quarter to a third of the way) then mostly downhill, ending on a long stony descent. Allow about three hours, start before 14:00 in winter since there are no lights, and ask for a bear bell at the tourist office."],
  s:[["Japan Guide: Magome-Tsumago Trail","https://www.japan-guide.com/e/e6078.html"],["FlyerTalk: trail discussion","https://www.flyertalk.com/forum/4675037-post1.html"]]},
 tsumago:{
  h:["Tsumago began restoring its post-town streets in the late 1960s and later adopted a resident pledge not to sell, rent or demolish historic buildings, which became a model for preservation towns in Japan (sources I could reach did not confirm the exact dates)."],
  s:[["Japan Guide: Magome-Tsumago Trail","https://www.japan-guide.com/e/e6078.html"],["Wikipedia: Nakasendo","https://en.wikipedia.org/wiki/Nakasend%C5%8D"]]},
 hakone:{
  h:["The legend: Kobo Daishi encouraged locals to eat eggs boiled in the valley's hot springs, and each black egg is said to add seven years of life; the science does not support that. The valley formed in an eruption about 3,000 years ago.",
     "The shells turn black because sulphur and iron in the water react with them. One source dates the commercial black egg to about 1955 and the ropeway's opening in 1959, but I could only find that in one place."],
  s:[["Atlas Obscura: Owakudani black eggs","https://assets.atlasobscura.com/places/owakudani-black-eggs"],["Amusing Planet: The black eggs","https://www.amusingplanet.com/2015/12/the-black-eggs-of-owakudani.html"]]}
};

/* Threads running through each place, for the overview panel */
var THEMES={
 tokyo:[
  {t:"Sushi began as street food",d:"Edo-style nigiri took shape in the early 1800s (the Bunsei era, 1818 to 1831), with Hanaya Yohei of Ryogoku named as a pioneer. It started as fast food eaten standing at stalls, with pieces about two to three times today's size.",s:["Unseen Japan: Edo-mae sushi","https://unseen-japan.com/edomae-sushi/"]},
  {t:"Edo crafts survive in the east",d:"Edo kiriko, cut glass, is credited to the glass dealer Kagaya Kyubei in 1834; Tokyo recognised it as a traditional craft in 1985 and the national government in 2002. Most workshops are in Koto, Edogawa and Sumida wards.",s:["Wikipedia: Edo kiriko","https://en.wikipedia.org/wiki/Edo_kiriko"]},
  {t:"Black markets became bar alleys",d:"Ameyoko, Omoide Yokocho, Golden Gai and Akihabara's radio stalls all began as postwar markets, and kept the tiny-stall layout.",s:["Unseen Japan: Shinjuku history","https://unseen-japan.com/history-of-shinjuku-part-2/"]},
  {t:"Two disasters shaped the map",d:"The 1923 earthquake pushed people out of the old city (Shimokitazawa, Kagurazaka's decline) and moved the fish market to Tsukiji; the 1945 firebombing flattened the east but spared pockets like Yanaka, Jimbocho and Nezu.",s:["GO TOKYO: Tsukiji","https://www.gotokyo.org/en/spot/65/"]}
 ],
 nakasendo:[
  {t:"The road from Edo",d:"The Nakasendo was the inland highway between Edo and Kyoto, with 69 post towns; Magome was the 43rd. Nihonbashi bridge in Tokyo was its starting point.",s:["Wikipedia: Nakasendo","https://en.wikipedia.org/wiki/Nakasend%C5%8D"]},
  {t:"Practical notes from walkers",d:"Plan about three hours between the towns, pack warm layers and rain gear, and use a bear bell. FlyerTalk threads and Japan Guide agree on the luggage-forwarding routine and the Magome to Tsumago direction.",s:["Japan Guide: Magome-Tsumago Trail","https://www.japan-guide.com/e/e6078.html"]}
 ],
 kyoto:[
  {t:"Five geisha districts",d:"Gion Kobu, Gion Higashi, Pontocho, Kamishichiken and Miyagawacho make up Kyoto's five kagai; Pontocho and Gion are the easiest to visit.",s:["GLT: Gion guide","https://www.gltjp.com/en/article/item/20708/"]},
  {t:"Three craft traditions",d:"Kiyomizu-yaki pottery (below Kiyomizu-dera, from the early 1600s); Nishijin-ori brocade weaving, regrouped in the Nishijin district after the Onin War; and Kyo-yuzen dyeing, where each stage is done by a different specialist. Hosoo, a Nishijin textile house founded in 1688, has a showroom.",s:["Kyoto Prefecture: traditional crafts","https://www.pref.kyoto.jp/en/01-02-01.html"]},
  {t:"Temple cooking",d:"Kaiseki grew out of tea ceremony meals, yudofu is the temple-town classic, and obanzai means everyday small plates. Kyo-yasai vegetables have been promoted as a regional brand since 1998.",s:["Table Journey: Kyoto food history","https://tablejourney.com/japan/kyoto/food-history/"]},
  {t:"Autumn colour timing",d:"Guides disagree: one puts the peak from late November into early December, and one 2026 forecast suggests 20 November to 7 December. A mid-November visit may be just before peak.",s:["Self Guide Japan: Kyoto autumn 2026","https://selfguidejapan.com/blog/kyoto-autumn-leaves-2026"]}
 ],
 osaka:[
  {t:"A theatre street that turned into a food street",d:"Dotonbori was designated a theatre district in 1621, with kabuki, bunraku and mechanical-puppet houses. When cinema and the war ended that, food and neon took over.",s:["MLIT: Dotonbori","https://www.mlit.go.jp/tagengo-db/en/R4-00636.html"]},
  {t:"Street foods with a named inventor",d:"Takoyaki is credited to Endo Tomekichi of Aizuya in the 1930s; kushikatsu to Shinsekai, with Daruma opening in 1929.",s:["Unseen Japan: Takoyaki","https://unseen-japan.com/takoyaki-japan-history/"]},
  {t:"A merchant city's castle",d:"Hideyoshi's castle (1583) on the site of a temple fortress, destroyed in 1615 and rebuilt by the shogunate, burned in 1665, and rebuilt in concrete in 1931.",s:["Wikipedia: Osaka Castle","https://en.wikipedia.org/wiki/Osaka_Castle"]}
 ]
};
