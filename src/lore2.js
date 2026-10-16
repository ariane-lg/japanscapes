/* ---------- Lore, second pass: fills every area with history, culture & craft, food and notes ---------- */
function addLore(id,o){
  var l=LORE[id]||(LORE[id]={});
  ["h","c","f","t"].forEach(function(k){if(o[k])l[k]=(l[k]||[]).concat(o[k])});
  if(o.s){l.s=l.s||[];o.s.forEach(function(x){if(!l.s.some(function(y){return y[1]===x[1]}))l.s.push(x)})}
}

/* ===== TOKYO ===== */
addLore("akasaka",{
 h:["Akasaka began as samurai land and was later settled by high-ranking government officials, military leaders and businessmen. Geisha houses and exclusive restaurants followed to entertain them, which is how the district became a hanamachi.",
    "The hanamachi faded with the end of the bubble economy, but Akasaka stayed a place where politics, business and diplomacy meet. Hie Shrine, long worshipped as the guardian of Edo Castle, lost most of its prewar buildings in the war; the present ones are postwar concrete, and the small Sanno Inari shrine from 1659 is the one surviving feudal-era structure.",
    "Akasaka Palace, the neo-baroque building on the district's edge, was completed in 1909 as a residence for the crown prince and is now the state guest house."],
 c:["Hie Shrine's Sanno Festival is held in mid-June every other year, and counts as one of Japan's three great festivals alongside Kyoto's Gion and Osaka's Tenjin. Its origin is the Edo-period procession that carried a portable shrine into the castle grounds.",
    "Classical ryotei still stand on the side streets, and some have become cafés, bars and a hostel. The area is also a media district: TBS has its headquarters and the Akasaka ACT Theater beside the main intersection."],
 f:["Akasaka's food is built around business entertaining: kaiseki in old ryotei, power lunches, and the lantern-lit izakaya and Korean restaurants tucked into the side lanes."],
 t:["The shrine can be entered by an escalator from the road or up the torii steps; early morning is quietest."],
 s:[["Wattention: The History of Akasaka","https://wattention.com/the-history-of-akasaka/2/"],["Visiting Japan: Hie Shrine","https://visiting-japan.com/en/articles/tokyo/e13cy-hie-jinja.htm"],["GLT: Akasaka area","https://www.gltjp.com/en/catalog/directory/spot/newest/208/"]]});

addLore("roppongi",{
 h:["The name is usually dated to around 1660. A folk explanation says it comes from six daimyo who lived nearby, though that is a legend. The army's presence after 1890 fed a nightlife scene, and after 1945 the US forces took over several sites here, with Hardy Barracks the most important.",
    "That occupation gave Roppongi its reputation as the foreigners' neighbourhood, with bars, restaurants and brothels around the bases. Roppongi Hills opened in 2003 and Tokyo Midtown in 2006 or 2007 (sources disagree), which turned a nightlife district into a daytime culture one."],
 c:["The 'Art Triangle' links the Mori Art Museum, the Suntory Museum of Art in Midtown and the National Art Center, all within a short walk.","Mori Art Museum has no permanent collection, so every visit is a new exhibition."],
 f:["Eating here is international and late. Roppongi's best meals are usually in the Hills and Midtown complexes at lunch, with the older nightlife streets best kept for later."],
 s:[["Wikipedia: Roppongi","https://en.wikipedia.org/wiki/Roppongi"],["JRPass: Visitor's guide to Roppongi","https://www.jrpass.com/it/blog/the-visitors-guide-to-roppongi"]]});

addLore("aoyama",{
 h:["Omotesando was created in the Taisho era (1912 to 1926) as the grand approach to Meiji Shrine, and the zelkova trees along it give the avenue its shade.",
    "After the 1923 earthquake, the Dojunkai Aoyama Apartments were built in reinforced concrete (1926 or 1927, depending on the source) with modern plumbing. In the 1960s they became a warren of artist studios and creative labs. They decayed and were replaced by Omotesando Hills in 2006, designed by Tadao Ando, whose spiral ramps echo the slope of the avenue."],
 c:["Omotesando is considered one of the world's great streets for contemporary architecture, with flagship buildings by several famous architects. Away from the avenue, Aoyama is quieter: galleries, design shops and the Nezu Museum's hillside garden.",
    "Aoyama Cemetery, one of Tokyo's first public cemeteries, is an unexpectedly quiet green space nearby."],
 f:["The avenue is for coffee, tea and patisserie, with small cafés and tea rooms in the back lanes of Aoyama."],
 s:[["Wikipedia: Omotesando","https://en.wikipedia.org/wiki/Omotesand%C5%8D"],["Arch Journey: Omotesando Hills","https://archjourney.org/projects/omotesando-hills/"],["Rise: Omotesando area guide","https://rise-corp.tokyo/ja/pages/tokyo-area-guide-omotesando"]]});

addLore("harajuku",{
 c:["Takeshita Street is only about 400 metres long. In the 1990s it was the place for bootleg American fashion until the laws tightened. Cat Street, the quieter walk toward Shibuya, is where the boutiques, vintage shops and cafés are.",
    "In the 1970s, impromptu rock and dance performances every Sunday on the closed-off streets helped make Harajuku Tokyo's street-fashion capital."],
 f:["The Harajuku crepe is the signature snack: American-style, Japanese-sized, filled with cream, cheesecake or brownie. Marion Crepes has been selling them since 1976."],
 s:[["JW Web Magazine: Harajuku guide","https://jw-webmagazine.com/tips/harajuku-guide/"],["Fun Japan: Takeshita Street","https://fun-japan.jp/en/articles/11873"]]});

addLore("shibuya",{
 h:["Shibuya's history runs back to the Shibuya clan and a castle said to date from 1092 on the high ground near the present station (the site of Konno Hachimangu Shrine). In the Edo period the slopes of Dogenzaka and Miyamasuzaka were part of the Oyama pilgrimage road, a busy resting stop.",
    "The station opened in 1885, and the crossing took its modern form in 1932 when the Tokyu Toyoko Line arrived. The Hachiko statue, a loyal dog who waited for his owner, a Tokyo University professor, was unveiled at the station in 1934, and Hachiko died the next year (accounts of the professor's name and the exact years of waiting vary).",
    "The Shibuya River was partly covered over around the 1964 Olympics and runs beneath the station; the Shibuya Stream redevelopment in 2018 brought a section back into daylight."],
 c:["Center Gai is the pedestrian street that feeds the crossing; Koen-dori, Dogenzaka and Spain-zaka lead off it to quieter, more interesting corners."],
 f:["New ramen shops keep opening along Dogenzaka and Miyamasuzaka, and the small bars around the tracks keep the neighbourhood's after-dark life going."],
 s:[["Culture Trip: A short history of Shibuya Crossing","https://www.theculturetrip.com/asia/japan/articles/tokyos-most-iconic-attraction-shibuya-crossing"],["Japan Travel: Hachiko","https://en.japantravel.com/places/tokyo/hachiko-statue/792"],["Wikipedia: Shibuya River","https://en.wikipedia.org/wiki/Shibuya_River"],["Kupi: Shibuya history","https://kupi.com/en/explore/japan/shibuya/history"]]});

addLore("ebisu",{
 h:["Ebisu is named after a beer. The Japan Beer Brewery was established in 1887, its brewery in Meguro was built around 1889, and Yebisu beer went on sale around 1890 (sources give slightly different dates). Ebisu Station, opened in 1906, took the brand's name, and the district followed.",
    "The brewery closed in 1988, and the Yebisu Garden Place complex opened on the site in 1994. Brand labels were removed in 1943 under wartime rules, and the brand was revived in 1971.",
    "Daikanyama's land belonged to the Asakura family, rice merchants turned landowners, who developed their forested holdings in stages. Hillside Terrace, by the architect Fumihiko Maki, was built in phases from the late 1960s to 1998, and the Asakura family house (1919) survives as an Important Cultural Property. The T-Site bookshop complex opened across the road around 2011."],
 c:["The Museum of Yebisu Beer tells the brand's history, with free entry and a small fee for the tasting tours.","Daikanyama is the quiet, design-minded neighbourhood next door, and Nakameguro follows the Meguro River, lined with cherry trees that are lit in spring."],
 f:["Ebisu is Tokyo's beer district, with izakaya, Ebisu Yokocho's tiny stalls, and craft beer bars; Nakameguro and Daikanyama add small cafés and natural wine bars."],
 s:[["Museum of Yebisu Beer","https://www.japan-experience.com/all-about-japan/tokyo/museums-galleries/museum-yebisu-beer"],["Nomunication: Ebisu drinking guide","https://www.nomunication.jp/ebisu-drinking-guide/"],["Wattention: Daikanyama","https://wattention.com/wtt31-shibuya-daikanyama/"],["Japan Property Central: Hillside Terrace","https://japanpropertycentral.com/daikanyama-hillside-terrace/"]]});

addLore("marunouchi",{
 h:["Marunouchi means 'inside the circle', for its place within the palace's outer moat. Before Tokugawa Ieyasu arrived in 1590 the site was an inlet of Tokyo Bay (Hibiya), filled in from 1592. Daimyo mansions followed, giving the area the nickname 'daimyo alley', and it is now Tokyo's financial district.",
    "Tokyo Station opened in December 1914 as the central terminus facing the Imperial Palace. The German Franz Baltzer's first design was rejected, and Tatsuno Kingo took over in 1903. The domes were lost in the 1945 air raids and rebuilt as simpler roofs, until a five-year restoration reopened the building on 1 October 2012. It was designated an Important Cultural Property in 2003."],
 c:["Marunouchi Naka-dori runs from the station towards the palace and is Tokyo's grandest avenue of offices and boutiques.","The old Tokyo Central Post Office next door was reborn as the KITTE shopping complex."],
 f:["Tokyo Station's own food streets, including Ramen Street on the Yaesu side, are among the easiest places to eat well in the city."],
 s:[["Wikipedia: Tokyo Station","https://en.wikipedia.org/wiki/Tokyo_Station"],["Wikipedia: Marunouchi","https://en.wikipedia.org/wiki/Marunouchi"],["Tokyo National Research Institute: Station restoration","https://www.tobunken.go.jp/materials/nenshi-en/1018111.html"]]});

addLore("ginza",{
 h:["Ginza means 'silver mint'. The Edo shogunate set up a silver-coin office here in 1612 (some sources say 1603, moved from Sunpu), the Ginza Yakusho, and the name stuck after the mint moved away.",
    "A fire in 1872 burned most of the district, and the Meiji government made it a showcase for modernisation, rebuilding it as a Western-style brick town. Sources credit the Irish engineer Thomas Waters with the designs, though others name the surveyor Colin McVean. Rents were high and the bricks poor, so little of the brick town survives."],
 c:["Wako and Mitsukoshi anchor the main crossing, and on Sundays Chuo-dori is closed to traffic. Kabuki-za, rebuilt several times since it opened in 1889, lets you watch a single act.","Ginza is also Tokyo's gallery district, with many small private galleries on the upper floors of ordinary buildings."],
 f:["The classic Ginza meal is a sushi counter or a tempura counter; the depachika food halls in the department-store basements are the casual version."],
 s:[["Wikipedia: Ginza","https://en.wikipedia.org/wiki/Ginza"],["Metropolis: Hidden Ginza","https://metropolisjapan.com/heartlands-hidden-ginza/"],["Japan Experience: Ginza","https://www.japan-experience.com/all-about-japan/tokyo/attractions-and-excursions/ginza"]]});

addLore("nihonbashi",{
 f:["Nihonbashi's fish market, Uogashi, fed Edo for centuries and was the largest in Japan by the mid-1800s, until the 1923 earthquake destroyed it and the trade moved to Tsukiji. Edo-style sushi grew out of that fish trade: nigiri began as street food in the early 1800s."],
 s:[["Unseen Japan: Edo-mae sushi","https://unseen-japan.com/edomae-sushi/"]]});

addLore("tsukiji",{
 c:["Tsukiji's lanes are packed with knife makers, kitchenware and tea sellers, a living trade directory for Japanese cooking. The temple Tsukiji Hongwanji, with its Indian-inspired stonework, stands at the edge of the market."],
 t:["Counts of shops range from about 400 to 500, and many stalls close by early afternoon."]});

addLore("nippori",{
 h:["The area was a wholesale textile district from the Taisho era to the end of the Showa era, selling cloth to dealers from the provinces. Retail shops gradually took over, and specialist stores now line the street."],
 c:["Nippori Chuo-dori runs about a kilometre from the station and sells fabric, leather, buttons, patterns and trims. Side alleys and upper floors ('Ura-Nippori' and 'Oku-Nippori') hide more shops. Tomato's five floors are the best known; Mihama and Tsukiyasu are named for Japanese fabrics, and Maki Ito for leather.",
    "Fashion students come here, and the town holds a fashion-design contest each autumn."],
 t:["Shop counts differ by source (about 80 to 90). Check opening days before you go: many shops close on Sundays."],
 s:[["Nippori Fabric Town: about","https://www.nippori-senigai.com/en/about/"],["GO TOKYO: Nippori","https://www.gotokyo.org/en/destinations/northern-tokyo/nippori/index.html"]]});

addLore("kuramae",{
 f:["Kuramae's small makers sit alongside cafés and bean-to-bar chocolate shops, so a craft browse here turns naturally into a coffee or chocolate break."],
 s:[["Tokyo by Food: Kuramae food guide","https://tokyobyfood.com/kuramae-food-guide/"]]});

addLore("skytree",{
 h:["Tokyo Skytree opened in May 2012 and, at 634 metres, is the tallest tower in the world; it is in Sumida ward, where the ukiyo-e master Hokusai lived most of his 90 years. The Sumida Hokusai Museum opened in 2016 to honour him. Ushijima Shrine, the oldest shrine in Sumida, dates from the Edo period."],
 c:["Sumida is the heart of Tokyo's craft industries: glass, chopsticks and bowls, knives and scissors. Edo kiriko cut glass can be tried at long-established workshops here; the glassmaker Hirota was founded in 1899."],
 f:["Tokyo Solamachi, the mall at the tower's foot, has a food floor with some of the city's best-loved kaitenzushi."],
 s:[["Visit Sumida guide (PDF)","https://visit-sumida.jp/uploads/2018/03/sumida2018_eng.pdf"],["Magical Trip: Ryogoku and Oshiage","https://magical-trip.com/media/ultimate-guide-to-ryogoku-oshiage-a-foreign-visitors-guide-to-tokyos-sumo-district"],["Wikipedia: Edo kiriko","https://en.wikipedia.org/wiki/Edo_kiriko"]]});

addLore("kiyosumi",{
 h:["The garden began as the site of an Edo-period villa, and Iwasaki Yataro, the founder of Mitsubishi, bought it in 1878 and made it a garden for entertaining guests and relaxing staff. He gathered large stones from across Japan to set around the central pond, which is fed by water from the Sumida River.",
    "The garden sheltered local people from the fires of the 1923 earthquake. Mitsubishi donated the eastern half to the city, which opened it to the public in 1932, and it is now a Place of Scenic Beauty."],
 c:["It is a circuit garden: you walk the pond's edge on the stepping stones, past a mound modelled on Mt Fuji and the 1909 teahouse that once hosted Lord Kitchener."],
 f:["Kiyosumi-Shirakawa was a working-class warehouse district before the roasters moved in, and coffee is now the draw: Blue Bottle and Allpress both have large stores here."],
 s:[["Tokyo Cheapo: Kiyosumi Garden","https://tokyocheapo.com/lifestyle/outdoors/kiyosumi-garden"],["Visiting Japan: Kiyosumi Gardens","https://www.visiting-japan.com/en/articles/tokyo/e13kt-kiyosumi-teien.htm"]]});

addLore("akihabara",{
 c:["Akihabara's maid cafés began with Cure Maid Café, which opened in March 2001. Fans of anime and games created a 2.5-dimensional social space between fiction and reality, and the cafés were an extension of that.",
    "Retro-game shops, such as Super Potato, are now as much of a draw as the electronics megastores."],
 s:[["Wikipedia: Maid cafe","https://en.wikipedia.org/wiki/Maid_cafe"],["Japan Travel: Akihabara","https://www.japan.travel/en/spot/2178/"],["Nippon.com: Japan Glances","https://www.nippon.com/en/features/jg00007/"]]});

addLore("kagurazaka",{
 c:["The alleys are named for how they behave: Kakurenbo Yokocho means 'hide-and-seek alley' for its tangle of turns, and the cobbled Hyogo Yokocho is a favourite filming location, lined with black wooden fences and ryotei hidden behind noren curtains.",
    "Counts differ by source. One puts the 1930s at about 150 ryotei and 600 geisha, and today at about 4 ryotei and 20 geisha; another gives 34 geisha and 9 ryotei in 2005."],
 f:["The French influence grew from the Institut Franco-Japonais, founded here in 1952. You can eat galettes and cider at Breton restaurants such as Le Bretagne, and matcha parfaits at Japanese tea cafés like Kagurazaka Saryo."],
 t:["Restaurants in Hyogo Yokocho are in high demand; reserve ahead."],
 s:[["Japan City Tour: Kagurazaka","https://japancitytour.com/kagurazaka/"],["GLT: Hyogo Yokocho","https://www.gltjp.com/en/directory/item/16313/"],["Omakase: Kagurazaka","https://omakaseje.com/articles/ma239562"]]});

addLore("jimbocho",{
 c:["Specialist shops cover philosophy, art, science and rare books, and publishers' offices cluster among them, which is why the district feels like a working book trade, not a museum."],
 s:[["Japan Experience: Jimbocho","https://www.japan-experience.com/all-about-japan/tokyo/attractions-excursions/jinbocho"]]});

addLore("koenji",{
 c:["Koenji's Awa Odori, borrowed from a Tokushima dance tradition, began in 1957 with only 38 dancers and now draws thousands over two days in late August.",
    "The PAL and Look shopping streets just south of the station are the vintage-clothing grid. The live-house scene survives in places like Niman Denatsu (the successor to 20000V) and Penguin House."],
 f:["North of the station, Nakadori Shotengai under the tracks is yakitori, karaoke boxes and subculture bars. In the daytime, street stalls sell croquettes, taiyaki and tofu doughnuts."],
 s:[["Experience Suginami: Koenji","https://experience-suginami.tokyo/?p=726"],["Nomado: Koenji","https://www.nomadotravel.app/en/attractions/koenji"]]});

addLore("kichijoji",{
 h:["Inokashira Park opened in 1917 and drew visitors and residents to Kichijoji. After the war an influx of artists, writers and entrepreneurs cemented it as a cultural hub.",
    "Harmonica Yokocho began as an open-air black market by the station (accounts differ on whether it started in 1944 or after the war). The name comes from its layout, a writer's comparison of the tiny packed shops to the reed chambers of a harmonica. In the 1960s the stalls turned into eating and drinking places, and a younger generation of owners revived it in the 1990s."],
 c:["The Ghibli Museum, supervised by Hayao Miyazaki, opened in 2001 on the western edge of the park, in Mitaka. Tickets are by reservation only."],
 f:["Around 100 tiny shops fill Harmonica Yokocho: cafés and boutiques by day, yakitori bars and izakaya by night."],
 s:[["JW Web Magazine: Kichijoji guide","https://jw-webmagazine.com/tips/kichijoji-guide/"],["Tokyo Metropolitan Government (PDF)","https://www.english.metro.tokyo.lg.jp/documents/d/english/aw2018_prbook_web_p19-20-pdf"],["Stripes: Kichijoji","https://www.stripes.com/travel/kichijoji-tokyo-neighborhood-is-popular-place-to-visit-1.98270"]]});

/* ===== NAKASENDO AND FUJI AREA ===== */
addLore("magome",{
 f:["Gohei mochi, grilled rice-cake skewers brushed with a sweet-savoury sauce, is the Kiso valley speciality; soba and grilled river fish are the usual meals."],
 c:["The valley is famous for hinoki cypress: wood from the Kiso valley was used to build Ise Jingu, one of Japan's most important shrines. Magome's souvenir shops sell mostly locally made goods in the village tradition, such as hats and straw sandals."],
 s:[["Wikivoyage: Magome","https://kwx.liehendr.com/content/wikivoyage_en_all_maxi_2025-02/A/Magome"],["Japan Travel: Narai-juku","https://en.japantravel.com/nagano/the-kiso-valley-s-narai-juku/6380"]]});

addLore("tsumago",{
 c:["The Waki-honjin Okuya, a former inn, gives a sense of how travellers stayed on the Nakasendo. Magome is more polished and restored, while Tsumago feels more rugged and authentic."],
 f:["There is a well-known gohei mochi shop in the south of town, and restaurants serving soba with grilled fish and Kiso ingredients."],
 s:[["Wikivoyage: Tsumago","https://en.wikivoyage.org/wiki/Tsumago"]]});

addLore("trail",{
 h:["The Nakasendo was the inland road between Edo and Kyoto, with 69 post towns; the Kiso valley stretch is the best known, and the roughly eight kilometres between Magome and Tsumago take two to three hours through forest and past waterfalls."],
 c:["Both post towns have preserved and restored their traditional architecture; the walk is mostly an old stone path through cedar forest, with tea houses on the way."],
 s:[["Wikipedia: Nakasendo","https://en.wikipedia.org/wiki/Nakasend%C5%8D"]]});

addLore("hakone",{
 h:["In 1619 the Tokugawa shogunate set up a checkpoint on the Tokaido road at Hakone to control traffic between Edo and Kyoto. It was designated a National Historical Property in 1922, and a replica completed in 2007 stands near Lake Ashi.",
    "Hot springs drew travellers through the Edo period, and Hakone revived as a summer and spa resort in the late 19th century."],
 c:["Yosegi-zaiku, the wood marquetry of Hatajuku, builds patterns from many woods compressed and then planed into thin sheets. Sources disagree on its origins, from the Warring States period to a late Edo craftsman, Ishikawa Nihei, around 1845 to 1848."],
 s:[["Tokyo Weekender: Hakone, a checkpoint in history","https://www.tokyoweekender.com/travel/hakone-a-checkpoint-in-history/"],["Hakone Yosegi-zaiku: history","https://hakone-japan.com/yosegizaiku/history/index.html"],["Samurai Archives: Hakone","https://samurai-archives.com/wiki/Hakone"]]});

addLore("kawaguchiko",{
 h:["The name 'Fuji Five Lakes' was coined in 1927 for a newspaper contest to choose Japan's finest scenery. Kawaguchi Asama Shrine, northeast of the lake, was founded to appease Mt Fuji after the Jogan eruption of 864, and a shrine to Benzaiten sits on Unoshima, the only island in the five lakes.",
    "Fuji worship, Fuji-ko, called for pilgrims to purify themselves in the lakes; Kawaguchiko and Yamanakako stayed places of that bathing pilgrimage. In 2013 the area was named a World Heritage site, 'Fujisan, Sacred Place and Source of Artistic Inspiration'."],
 c:["Cape Ubuyagasaki is a famous place to see 'upside-down Fuji', the mountain reflected in still water."],
 f:["The local dish is hoto, thick flat noodles simmered with vegetables in miso soup, a Yamanashi staple."],
 s:[["Wikipedia: Fuji Five Lakes","https://en.wikipedia.org/wiki/Fuji_Five_Lakes"],["MLIT: Fuji Five Lakes","https://www.mlit.go.jp/tagengo-db/en/R1-00131.html"],["Yamanashi tourism","https://www.yamanashi-kankou.jp/english/explore-by-area/fujisan-fujigoko/index.html"]]});

/* ===== KYOTO ===== */
addLore("pontocho",{
 h:["Pontocho began as a sandbar in the Kamo River that was reclaimed, with houses built from 1670, and teahouses were permitted from 1712. The name's origin is unsettled; one popular idea links it to a Portuguese word.",
    "A common claim that kabuki began here is popular legend, not established fact."],
 c:["Pontocho Kaburenjo Theater is the practice hall for geisha and maiko and stages the Kamogawa Odori, the spring dance performances. Sources disagree whether it runs in May only or in spring and autumn.",
    "Kawayuka, the open-air platforms built over the river from May to September, number almost a hundred and were designed to beat the summer heat."],
 s:[["Japan Travel: Pontocho","https://www.japan.travel/en/spot/79/"],["Samurai Archives: Pontocho","https://samurai-archives.com/wiki/Pontocho"],["Mai-ko: Pontocho","https://mai-ko.com/travel/japan/kyoto/pontocho-kyoto/"]]});

addLore("fushimi",{
 h:["Tradition dates Fushimi Inari to 711 and ties it to the Hata clan, immigrants from the Korean peninsula whose skills included irrigation, silk and sake brewing. In the founding myth, Hata no Irogu shot an arrow at a rice cake, which turned into a white bird and flew to the peak of Mt Inari, where rice grew.",
    "Inari is the kami of rice and, later, of commerce. The fox is its messenger, and the key in a fox's mouth is the granary key. It is the head shrine of about 30,000 Inari shrines across Japan; the main buildings burned in the Onin War and were rebuilt in 1499."],
 f:["Foxes are said to love fried tofu, which is why inari-zushi, rice wrapped in sweet fried tofu, takes the shrine's name."],
 s:[["Wikipedia: Fushimi Inari-taisha","https://en.wikipedia.org/wiki/Fushimi_Inari-taisha"],["Kyoto Travel: Fushimi Inari","https://kyoto.travel/en/shrine_temple/180.html"],["Ancient History Sites: Fushimi Inari","https://www.ancient-history-sites.com/?p=117144"]]});

addLore("arashiyama",{
 h:["Heian-period aristocrats escaped to Arashiyama's riverside for boating parties, a custom that let them leave the confines of the court for an afternoon. Tenryu-ji, the head temple of the Tenryu branch of Rinzai Zen, is ranked first among Kyoto's five great Zen temples."],
 c:["The Sogenchi garden, by Muso Soseki, is one of Kyoto's oldest landscape gardens and a famous example of borrowed scenery (shakkei)."],
 f:["Shigetsu, inside Tenryu-ji, serves shojin ryori, the vegetarian Buddhist cuisine that came to Japan from China with Zen in the 12th century. The meal centres on tofu simmered in a light kombu broth plus small seasonal dishes, and it is Bib Gourmand listed. Reserve at least three days ahead."],
 s:[["Fathom: Tenryu-ji and Shigetsu","https://www.fathomaway.com/tenryuji-shigetsu"],["Japan Experience: Tenryu-ji","https://www.japan-experience.com/all-about-japan/kyoto/temples-shrines/tenryuji-temple"],["Inside Kyoto: Shigetsu","https://insidekyoto.com/shigetsu-restaurant-arashiyama"]]});

addLore("kinkakuji",{
 h:["The site was first a villa of the Saionji family before Ashikaga Yoshimitsu acquired it in 1397. After his death it became a Zen temple (Rokuon-ji is its formal name). The villa hosted Ming envoys and an imperial visit in 1408, with entertainments including Noh and poetry contests."],
 c:["The refined taste of Yoshimitsu's era, mixing court elegance with Zen and samurai power, is often called Kitayama culture. The pond garden may be older than the pavilion, perhaps dating to the 13th century."],
 f:["Some of the sub-temples in nearby Daitoku-ji serve vegetarian shojin ryori."],
 s:[["Wikipedia: Kinkaku-ji","https://en.wikipedia.org/wiki/Kinkaku-ji"],["Japan Travel: History of Kinkaku-ji","https://vi.japantravel.com/kyoto/kyoto-kinkaku-ji-temple/10465"],["Kansai Odyssey: Ashikaga Yoshimitsu","https://kansai-odyssey.com/?p=4224"]]});

addLore("demachiyanagi",{
 h:["Shimogamo Shrine sits in the fork of the Kamo and Takano rivers, and records show it existed by 677; it was a Kamo-clan shrine and is a UNESCO World Heritage site (1994). Its surrounding forest, Tadasu no Mori, is the 'forest of truth', where lies are said to be unable to hide, so disputes were once settled there."],
 c:["Shimogamo is home to the Aoi Matsuri, one of Kyoto's three great festivals, with a procession in Heian court dress and yabusame horseback archery. The river junction next to it is where students sit on stepping stones."],
 f:["Day-to-day food around Kyoto University is cheap student cooking, bakeries and small cafés, a contrast with the tea-house cooking of the east side."],
 s:[["Japan Travel: Shimogamo Shrine","https://www.japan.travel/es/spot/1160/"],["Lonely Planet: Shimogamo-jinja","https://www.lonelyplanet.com/japan/kansai/kyoto/attractions/shimogamo-jinja/a/poi-sig/402760/356698"],["Green Shinto: Tadasu no Mori","https://www.greenshinto.com/tag/tadasu-no-mori/"]]});

addLore("kurama",{
 c:["The Kurama Fire Festival on 22 October at Yuki Shrine re-enacts the shrine's transfer from the imperial palace in the Heian period (sources give 940 or 970). Torches are lit outside every house, and two portable shrines are rushed down the steep stone steps. It was cancelled in 2018 after a typhoon, the first time in 30 years."],
 f:["From May to September Kibune's restaurants build kawadoko platforms over the stream; in November the meals move indoors."],
 t:["The two-car Eizan train from Demachiyanagi takes about 30 minutes. The festival is on 22 October, so a November visit misses its crowds."],
 s:[["Kyoto Travel: Yuki Shrine","https://kyoto.travel/en/destinations/yukijinja-shrine/"],["Japan Experience: Kurama Fire Festival","https://www.japan-experience.com/all-about-japan/kyoto/events-and-festivals/kurama-fire-festival"],["Kyoto Shimbun: festival cancelled 2018","https://e.kyoto-np.jp/news/20181007/3381.html"]]});

/* ===== OSAKA ===== */
addLore("dotonbori",{
 c:["The Five Playhouses (Naka-za and Kaku-za for kabuki, Takemoto-za and Toyotake-za as rival bunraku houses, and Benten-za, which began as a clockwork automata theatre) gave the canal its theatre-district identity. By 1662 one count lists six kabuki and five bunraku theatres and the Takeda Karakuri mechanical puppets."],
 s:[["MLIT: Dotonbori","https://www.mlit.go.jp/tagengo-db/en/R4-00636.html"]]});

addLore("shinsekai",{
 h:["The first Tsutenkaku tower of 1912 was modelled on the Eiffel Tower. It was scrapped during the war and rebuilt in 1956; the present tower is 103 metres tall, with an observatory at 91 metres. One account ties the district to the 1903 National Industrial Exposition, with the eastern side becoming Tennoji Park; accounts of the timeline differ."],
 c:["The neighbourhood has stayed largely untouched since the war, so its neon signs and hand-painted boards give it a vintage feel."],
 f:["Kushikatsu skewers here are cheap, about ¥150 each at the time of the sources; Daruma opened in 1929."],
 s:[["JW Web Magazine: Shinsekai guide","https://jw-webmagazine.com/tips/shinsekai-guide/"],["JRailPass: Shinsekai","https://www.jrailpass.com/blog/shinsekai-osaka"]]});

addLore("amemura",{
 c:["The district's character is streetwear, vintage clothing and music, with Triangle Park as its meeting point."],
 f:["Cafés and stall food here lean towards what young crowds want: crepes, bubble tea and takoyaki."]});

addLore("umeda",{
 h:["Umeda was farmland until the 1870s, when the prefecture reclaimed and filled the area to build the first Osaka Station (opened 1874). The name was once written with characters meaning 'buried field' and was later changed to 'plum field', probably to avoid the gloomy sense (the details are disputed). Hanshin Umeda opened in 1906, Hankyu Umeda in 1910 and the Midosuji subway line in 1933."],
 c:["The HEP Five building's Ferris wheel and the Hankyu terminal show how Osaka's private railways built their own shopping districts around their stations."],
 f:["Stand-up bars and kushikatsu counters cluster around Umeda's station arcades."],
 s:[["Wikipedia: Umeda","https://en.wikipedia.org/wiki/Umeda"],["JRPass: Guide to Umeda","https://www.jrpass.com/ja/blog/guide-to-umeda-explore-osaka-s-glamorous-side?c=CAD"]]});

addLore("osakacastle",{
 c:["Hideyoshi's Golden Tea Room was a portable gilded tea house used in 1586. A full-scale model is in the castle museum and a replica is at the MOA Museum of Art; the original is thought to have been lost when the castle fell. The gold on the keep is a replica too, as the 1931 reconstruction did not use real gold.",
    "The 1931 concrete keep was funded by Osaka's citizens and stands on the original foundations."],
 s:[["The Golden Tea Room (MOA Museum)","https://www.moaart.or.jp/en/?p=2434"],["Japan City Tour: Osaka Castle","https://japancitytour.com/osaka-castle/"]]});

/* ===== Remaining gaps ===== */
addLore("shimokita",{f:["Shimokitazawa is known for its curry restaurants, small izakaya and coffee shops tucked in and around the station, alongside the vintage shops."]});
addLore("nippori",{f:["Yanaka Ginza's croquettes and the old kissaten of Yanaka are a short walk away, so a fabric trip pairs naturally with a snack and a coffee there."]});
addLore("akihabara",{f:["Themed cafés are the signature here. For an ordinary meal, look for curry, ramen and gyudon counters near the station."]});
addLore("trail",{f:["Rest houses along the path offer walkers tea, and the two towns sell gohei mochi. Carry water and a snack, because there are no shops on the forest stretch."]});
addLore("hakone",{f:["Kuro-tamago, black eggs cooked in the sulphur springs, are the signature snack at Owakudani, and the onsen inns serve kaiseki dinners."]});
addLore("higashiyama",{f:["Along Sannenzaka and Ninenzaka, shops sell yatsuhashi (cinnamon rice sweets), pickles and matcha soft-serve, and tea houses serve wagashi sets."]});
addLore("gion",{f:["The ochaya are for invited guests, but you can eat kaiseki and obanzai at the restaurants along Hanamikoji and Shijo, and take matcha with wagashi at the tea rooms."]});
addLore("fushimi",{c:["The thousands of torii are donations from businesses and individuals, each inscribed with the donor's name and the date. The walk to the summit takes a few hours return, and the upper trails empty out quickly."]});
addLore("nakazaki",{f:["Small cafés and sweet shops in converted old houses are the draw here."]});
addLore("osakacastle",{f:["The castle park has picnic lawns and seasonal food stalls, and is a standard place for cherry-blossom picnics."]});
