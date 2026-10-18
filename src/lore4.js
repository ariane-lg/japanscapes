/* ---------- Lore, fourth pass: essays from a historian's newsletter, written up in my own words ---------- */
var H_OLD=["Harding: The Old Badger","https://www.chrishardingjapan.com/p/the-old-badger"];
var H_SUN=["Harding: The Sun King","https://www.chrishardingjapan.com/p/the-sun-king"];
var H_GARD1=["Harding: How to Read a Japanese Garden, Part I","https://www.chrishardingjapan.com/p/how-to-read-a-japanese-garden"];
var H_GARD2=["Harding: How to Read a Japanese Garden, Part II","https://www.chrishardingjapan.com/p/how-to-read-a-japanese-garden-9f7"];
var H_WAVE=["Harding: How to Read Hokusai's Great Wave","https://www.chrishardingjapan.com/p/how-to-read-hokusais-great-wave"];
var H_OCC1=["Harding: The Allied Occupation I, The Blue-Eyed Shogun","https://www.chrishardingjapan.com/p/the-allied-occupation-of-japan-i"];
var H_OCC4=["Harding: The Allied Occupation IV, Entrepreneurs","https://www.chrishardingjapan.com/p/entrepreneurs"];
var H_OCC5=["Harding: The Allied Occupation V, Tezuka Osamu","https://www.chrishardingjapan.com/p/the-allied-occupation-of-japan-v"];
var H_TRUST=["Harding: How to Build a High-Trust Society","https://www.chrishardingjapan.com/p/how-to-build-a-high-trust-society"];
var H_NATTO=["Harding: Japan's $2 Billion Breakfast","https://www.chrishardingjapan.com/p/japans-2-billion-breakfast"];

/* ===== Place notes ===== */
addLore("marunouchi",{
 h:["The area's story starts with Ieyasu. When Tokugawa Ieyasu took over the Kanto region in 1590, Edo was a small castle town beside a swamp, and the castle itself was a near-derelict mess. He built it up quietly, won the battle of Sekigahara in 1600 and became shogun in 1603. A century later Edo was, some say, the largest city in the world.",
    "After landing near Tokyo on 30 August 1945, General MacArthur first set up in the Imperial Hotel, opposite the Imperial Palace. The administration under his command was known as GHQ, and the Occupation set out to demilitarise Japan, break up the big zaibatsu firms and democratise it."],
 s:[H_OLD,H_OCC1]});

addLore("nihonbashi",{
 f:["Edo residents woke to the cries of nattō sellers, and the sticky fermented soybeans were eaten in soup, with chopped vegetables and tofu, and eventually on rice with soy sauce and mustard, the version known today. A nattō seller appears in an illustrated Edo encyclopaedia from 1690."],
 s:[H_NATTO]});

addLore("skytree",{
 c:["Hokusai's Great Wave, from his Thirty-Six Views of Mount Fuji (1831), was a hit in Edo, though when it was made it would have cost about as much as a bowl of noodles. A copy sold at Sotheby's Hong Kong for about $2.8 million late in 2025. He used an imported pigment, Prussian blue, and 'serious' artists looked down on him as a tradesman; a story, probably apocryphal, has him beating a respected painter in a contest before the shogun with a single blue curve and a chicken with vermilion-painted feet.",
    "How you read it depends on how you read text. Read left to right, as in English, the eye travels with the wave, as if surfing it. Read right to left, as in Japanese, you move into the wave, and the drama shifts to the people in the boats while Mt Fuji looks on."],
 s:[H_WAVE]});

addLore("osakacastle",{
 h:["Hideyoshi was born in 1537 into a peasant family, rose as a sandal-carrier and general under Oda Nobunaga, and took over after Nobunaga died in 1582, avenging him on the traitor Akechi Mitsuhide. He commissioned Noh plays about his own achievements, starred in them, and made Japan.s elite sit and watch.",
    "He launched two invasions of Korea in the 1590s, the first in 1592 with around 150,000 men, the largest seaborne deployment of troops to another country in history up to then. He died on 18 September 1598, leaving a death poem that calls even Osaka Castle a dream within a dream."],
 s:[H_SUN,H_OLD]});

addLore("kinkakuji",{
 c:["Ryoan-ji's garden has fifteen stones set in raked white sand, placed so that from any viewpoint only fourteen are visible. People have asked why for about 500 years. One reading is that the stones are islands of consciousness in a larger emptiness, and that no single point of view can take in everything. Visitors sit on the veranda of the main hall to look.",
    "The garden belongs to the time when high-ranking samurai, keen to shed their image as men of violence, took up painting, calligraphy and Noh alongside Zen priests who had Chinese connections. Their gardens, often in the karesansui ('dry landscape') style, used raked sand or gravel to suggest water and favoured contemplation over parties."],
 s:[H_GARD2]});

/* ===== City-level threads ===== */
THEMES.tokyo.push(
 {t:"Edo began as a leaky castle by a swamp",d:"When Tokugawa Ieyasu was given the Kanto region in 1590, Edo was a small town by a swamp with a near-derelict castle. He built it up patiently while Hideyoshi's Korean wars drained his rivals, won at Sekigahara in 1600 and became shogun in 1603. A century later Edo was, some say, the largest city on Earth, and the Tokugawa ruled for 264 years.",s:H_OLD},
 {t:"The Occupation left marks all over the city",d:"Tokyo from the air in 1945 was a city burned out by firebombing. MacArthur set up in the Imperial Hotel opposite the palace, and the Occupation imposed a constitution that made the Emperor a symbol and renounced war. Sony began in a leaky shack, running a truck on black-market petrol taken from US Army stores, and made Japan's first transistor radio in 1955; its name came from 'sonus' and the GI word 'sonny'. Tezuka Osamu's Astro Boy first appeared in spring 1952.",s:H_OCC1},
 {t:"What public life feels like",d:"Harding argues the tidy streets and considerate crowds visitors notice come from how children are raised: omotenashi, anticipating others' needs, and 'group living' at school, where pupils clean their own classrooms and learn to ask 'kashite' (may I borrow it) and answer 'dozo'. Public behaviour is held to a high standard while home is where people relax, so expect quiet trains and few things going wrong.",s:H_TRUST},
 {t:"Nattō and Edo mornings",d:"People have probably eaten nattō since the 8th or 9th century, but the sticky kind we know is documented from the early 1400s. Edo residents woke to nattō sellers calling their wares, and the combination of soy sauce, mustard and rice settled in that era.",s:H_NATTO}
);
THEMES.kyoto.push(
 {t:"How to read a Japanese garden",d:"Heian aristocrats' gardens were built around a pond fed by two streams, with a waterfall made of rocks gathered on a hill. The 11th-century Sakuteiki, probably the oldest gardening book in the world, tells the gardener to arrange the water by Chinese geomancy: the blue dragon of the east, the white tiger of the west, the black tortoise of the north and the vermilion bird of the south. Rocks should be found, not cut, and used the way they lay in nature, or they become 'cursed'. Gardeners aimed for charismatic imperfection, off-centre and staggered placement ('geese in flight'), and suggestion rather than showing everything. Late Heian 'paradise gardens' added lotus and strange plants to evoke the Pure Land. Later, samurai and Zen priests brought the karesansui garden, raked sand for water, built for contemplation, and tsubo-niwa courtyard gardens still appear in cafés and hotels.",s:H_GARD1},
 {t:"Cherry blossoms and impermanence",d:"The blossom moves people because it joins two ideas: Shinto's celebration of new life and Buddhism's focus on impermanence. The feeling that holds them together is mono no aware, being moved by the passing of all things. Mass blossom-viewing parties became a seasonal event in the Edo era. A November visit will miss the blossom but can catch the autumn leaves, which carry the same meaning.",s:H_GARD2}
);
THEMES.nakasendo.push(
 {t:"Nattō at the ryokan breakfast",d:"Many first-time visitors meet nattō, fermented soybeans, on the breakfast tray of a ryokan or minshuku. There are two kinds: a salty, dry temple version from China, and the sticky 'string-drawing' kind, the one you are likely to meet. A popular legend ties it to the warrior Minamoto no Yoshiie, and the usual advice is to stir it hard, often quoted as 424 times, before eating.",s:H_NATTO}
);

/* ===== Further reading, shown at the bottom of each city overview ===== */
var READING=[
 {t:"Japan Story: In Search of a Nation, 1850 to the Present (2018; published in the US as A History of Modern Japan)",u:"https://christopher-harding.com/books/"},
 {t:"The Japanese: A History in Twenty Lives (2020)",u:"https://www.penguin.co.uk/books/316626/the-japanese/9780241434505.html"},
 {t:"A Short History of Japan (2025)",u:"https://www.readings.com.au/product/9780241563205"},
 {t:"Japan and the World, a free newsletter on Japanese history and culture",u:"https://www.chrishardingjapan.com/archive"}
];

WARDINFO["13104"].t+=" Tezuka Osamu's Astro Boy first appeared in spring 1952.";
