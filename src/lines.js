/* ---------- Lines: finish the Tokyo lines, and add Kyoto and Osaka ---------- */
var NEWST={
 "Ogikubo":[35.7045,139.6202],"Minami-Asagaya":[35.6994,139.6357],"Shin-Koenji":[35.6979,139.6487],"Higashi-Koenji":[35.6982,139.6582],
 "Shin-Nakano":[35.6975,139.6686],"Nakano-Sakaue":[35.6973,139.6829],"Nishi-Shinjuku":[35.6944,139.6928],
 "Hongo-sanchome":[35.7066,139.7599],"Myogadani":[35.7172,139.7369],"Shin-otsuka":[35.7258,139.7299],"Ikebukuro":[35.7280,139.7133],
 "Yoyogi-uehara":[35.6687,139.6793],"Yoyogi-koen":[35.6690,139.6901],"Machiya":[35.7422,139.7801],"Kita-senju":[35.7495,139.8051],
 "Meguro":[35.6341,139.7157],"Shirokane-dai":[35.6374,139.7259],"Todai-mae":[35.7173,139.7582],"Hon-komagome":[35.7248,139.7537],
 "Nishigahara":[35.7460,139.7422],"Oji":[35.7540,139.7377],"Oji-kamiya":[35.7651,139.7357],"Shimo":[35.7779,139.7325],"Akabane-iwabuchi":[35.7830,139.7199]
};
(function(){
  var known={};LINES.forEach(function(l){l.st.forEach(function(s){known[s[0]]=[s[1],s[2]]})});
  function build(names){return names.map(function(n){var c=known[n]||NEWST[n];return c?[n,c[0],c[1]]:null}).filter(Boolean)}
  var full={
   M:["Ogikubo","Minami-Asagaya","Shin-Koenji","Higashi-Koenji","Shin-Nakano","Nakano-Sakaue","Nishi-Shinjuku","Shinjuku","Shinjuku-sanchome","Shinjuku-gyoemmae","Yotsuya-sanchome","Yotsuya","Akasaka-mitsuke","Kokkai-gijidomae","Kasumigaseki","Ginza","Tokyo","Otemachi","Awajicho","Ochanomizu","Hongo-sanchome","Korakuen","Myogadani","Shin-otsuka","Ikebukuro"],
   C:["Yoyogi-uehara","Yoyogi-koen","Meiji-jingumae","Omotesando","Nogizaka","Akasaka","Kokkai-gijidomae","Kasumigaseki","Hibiya","Nijubashimae","Otemachi","Shin-ochanomizu","Yushima","Nezu","Sendagi","Nishi-Nippori","Machiya","Kita-senju"],
   N:["Meguro","Shirokane-dai","Shirokane-takanawa","Azabu-juban","Roppongi-itchome","Tameike-sanno","Nagatacho","Yotsuya","Ichigaya","Iidabashi","Korakuen","Todai-mae","Hon-komagome","Komagome","Nishigahara","Oji","Oji-kamiya","Shimo","Akabane-iwabuchi"]
  };
  LINES.forEach(function(l){if(full[l.id])l.st=build(full[l.id])});
})();

var KY_LINES=[
 {id:"KK",name:"Karasuma",c:"#2f9d57",st:[["Kokusai-kaikan",35.0613,135.7852],["Matsugasaki",35.0515,135.7743],["Kitayama",35.0520,135.7671],["Kitaoji",35.0446,135.7587],["Kuramaguchi",35.0372,135.7593],["Imadegawa",35.0294,135.7594],["Marutamachi",35.0163,135.7596],["Karasuma Oike",35.0108,135.7596],["Shijo",35.0025,135.7597],["Gojo",34.9949,135.7597],["Kyoto",34.9871,135.7585],["Kujo",34.9792,135.7597],["Jujo",34.9737,135.7524],["Kuinabashi",34.9623,135.7570],["Takeda",34.9569,135.7557]]},
 {id:"KT",name:"Tozai",c:"#e8531f",st:[["Uzumasa Tenjingawa",35.0108,135.7156],["Nijojo-mae",35.0119,135.7503],["Karasuma Oike",35.0108,135.7596],["Kyoto Shiyakusho-mae",35.0109,135.7689],["Sanjo Keihan",35.0082,135.7726],["Higashiyama",35.0094,135.7798],["Keage",35.0076,135.7906],["Ono",34.9611,135.8127],["Daigo",34.9507,135.8107],["Rokujizo",34.9332,135.7966]]},
 {id:"KH",name:"Keihan",c:"#3a6ea5",st:[["Demachiyanagi",35.0304,135.7730],["Jingu-marutamachi",35.0187,135.7722],["Sanjo",35.0082,135.7726],["Gion-shijo",35.0027,135.7716],["Shichijo",34.9885,135.7679],["Tofukuji",34.9811,135.7701],["Fushimi-Inari",34.9689,135.7693],["Chushojima",34.9268,135.7593]]},
 {id:"HK",name:"Hankyu",c:"#8a4b3a",st:[["Kawaramachi",35.0038,135.7696],["Karasuma",35.0040,135.7595],["Omiya",35.0039,135.7480],["Nishi-Kyogoku",35.0030,135.7330],["Katsura",34.9793,135.7023],["Arashiyama",35.0095,135.6808]]},
 {id:"JS",name:"JR Sagano",c:"#8b5fbf",st:[["Kyoto",34.9871,135.7585],["Nijo",35.0107,135.7425],["Saga-Arashiyama",35.0207,135.6810]]},
 {id:"JN",name:"JR Nara",c:"#b08a3e",st:[["Kyoto",34.9871,135.7585],["Tofukuji",34.9811,135.7701],["Inari",34.9667,135.7708]]}
];
var OS_LINES=[
 {id:"OM",name:"Midosuji",c:"#e0252a",st:[["Shin-Osaka",34.7341,135.5019],["Nishinakajima-Minamigata",34.7266,135.4986],["Nakatsu",34.7099,135.4924],["Umeda",34.7034,135.4976],["Yodoyabashi",34.6916,135.5010],["Hommachi",34.6820,135.4987],["Shinsaibashi",34.6754,135.4992],["Namba",34.6637,135.5018],["Daikokucho",34.6562,135.4979],["Dobutsuen-mae",34.6488,135.5045],["Tennoji",34.6490,135.5132]]}
];
