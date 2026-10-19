/* ---------- App ---------- */
/* Google Maps JavaScript API key (restricted to that API only). Leave "" to use the free Esri street map instead. */
var GOOGLE_KEY="__GOOGLE_KEY__";
/* Set to true once billing is enabled on the Google Cloud project, otherwise Google shows an error overlay. */
var USE_GOOGLE=__USE_GOOGLE__;
(function(){
"use strict";
function $(s,r){return (r||document).querySelector(s)}
var ESRI_GRAY="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}";
var ESRI_ST="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";
var CATCOL={sight:"#3f7a99",eat:"#d2566e",make:"#b8863f",green:"#5b9a78"};

var CITIES={
 tokyo:{label:"Tokyo",ja:"東京",short:"Tokyo",dates:"",
  tag:"Twenty-three wards, one map",bounds:[[35.52,139.57],[35.82,139.93]],wards:WARDS.tokyo,hoods:HOODS,places:PLACES,hotel:BASE,
  intro:"Ward boundaries follow Tokyo's official map. Tap a ward for its history and character. Zoom in and its neighbourhoods appear, then every saved place."},
 nakasendo:{label:"Nakasendō & Fuji-Hakone",ja:"中山道",short:"Nakasendō",dates:"",
  tag:"The old road, then Fuji",bounds:[[35.15,137.4],[35.62,139.1]],wards:null,hoods:NK_HOODS,places:NK_PLACES,
  intro:"Two post towns on the old Edo-to-Kyoto road, an 8 km forest walk between them, then a night near Fuji. Hakone and Kawaguchiko are both shown as options for the Fuji stop."},
 kyoto:{label:"Kyoto",ja:"京都",short:"Kyoto",dates:"",
  tag:"Eleven wards, a thousand temples",bounds:[[34.94,135.66],[35.14,135.85]],wards:WARDS.kyoto,hoods:KY_HOODS,places:KY_PLACES,
  intro:"Kyoto's wards are drawn here. The eastern hills, central downtown and the western edge hold most of what visitors come for."},
 osaka:{label:"Osaka",ja:"大阪",short:"Osaka",dates:"",
  tag:"The nation's kitchen",bounds:[[34.58,135.38],[34.78,135.62]],wards:WARDS.osaka,hoods:OS_HOODS,places:OS_PLACES,
  intro:"Osaka's wards, with the central Chuo, Kita and Naniwa wards carrying most of what you would come for."}
};
if(typeof PERSONAL!=="undefined"){Object.keys(PERSONAL.hotels||{}).forEach(function(k){CITIES[k].hotel=PERSONAL.hotels[k]});Object.keys(PERSONAL.dates).forEach(function(k){CITIES[k].dates=PERSONAL.dates[k]});var _b=$(".brand small");if(_b)_b.textContent=PERSONAL.brand}
var ORDER=["tokyo","nakasendo","kyoto","osaka"];
var state={city:"tokyo",ward:null,hood:null,place:null,cats:{sight:1,eat:1,make:1,green:1},mine:false,lines:false,base:"auto"};
function C(){return CITIES[state.city]}
var ICON={
 sight:'<path d="M2.5 6.2c3-1.3 6-1.9 9.5-1.9s6.5.6 9.5 1.9"/><path d="M5 9.6h14"/><path d="M7.2 6v14.5M16.8 6v14.5"/>',
 eat:'<path d="M3.5 11.5h17a8.5 7.5 0 0 1-17 0z"/><path d="M15 3.5l-3 7.5M18.5 4.5l-3 6.5"/>',
 make:'<path d="M6.5 4.5h11M6.5 19.5h11"/><path d="M8 4.5v15M16 4.5v15"/><path d="M8 8.5l8 2.5M8 12.5l8 2.5"/>',
 green:'<path d="M12 21v-7"/><path d="M12 14C7 14 4 10 4 5.5c2.5 1.6 5 2.2 8 .5 3-1.7 5.5-1 8-.5 0 4.5-3 8.5-8 8.5z"/>',
 mine:'<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="2.2"/>',
 line:'<path d="M3 17c4-8 8 4 12-4s4-2 6-6"/><circle cx="3" cy="17" r="1.6"/><circle cx="21" cy="7" r="1.6"/>',
 history:'<path d="M2.5 12.5c4.5-1.2 7-4.5 9.5-8.5 2.5 4 5 7.3 9.5 8.5"/><path d="M6 12.5V20M18 12.5V20M3.5 20h17"/>',
 craft:'<path d="M20.5 3.5c-5 1.2-9 4.8-11 10l1.8 1.8c5.2-2 8.8-6 10-11z"/><path d="M8.5 14c-2.5.2-4 1.8-4.2 5.2 3.4-.2 5-1.7 5.2-4.2"/>',
  hotel:'<path d="M3 15.6c3.8-1.1 6-3.6 8.5-7 2.5 3.4 4.7 5.9 8.5 7"/><path d="M6 15.6V20.2M18 15.6V20.2M4 20.2h16"/><path d="M20 1.6a4.6 4.6 0 1 0 3 7.6 3.7 3.7 0 0 1-3-7.6z"/>',
 tips:'<ellipse cx="12" cy="12.5" rx="5.2" ry="6.5"/><path d="M8.5 6.5h7M8.5 18.5h7M12 3v3.5M12 19v2.5"/>'
};
function ico(n,plain){return "<svg class='ico"+(plain?"":" c-"+n)+"' viewBox='0 0 24 24' aria-hidden='true'>"+(ICON[n]||"")+"</svg>"}

/* ---------- geometry helpers ---------- */
function ringArea(r){var a=0;for(var i=0;i<r.length;i++){var p=r[i],q=r[(i+1)%r.length];a+=p[0]*q[1]-q[0]*p[1]}return a/2}
function centroid(r){var a=0,x=0,y=0;for(var i=0;i<r.length;i++){var p=r[i],q=r[(i+1)%r.length],f=p[0]*q[1]-q[0]*p[1];a+=f;x+=(p[0]+q[0])*f;y+=(p[1]+q[1])*f}a*=.5;return [y/(6*a),x/(6*a)]}
function inRing(lng,lat,r){var c=false;for(var i=0,j=r.length-1;i<r.length;j=i++){var xi=r[i][0],yi=r[i][1],xj=r[j][0],yj=r[j][1];if(((yi>lat)!==(yj>lat))&&(lng<(xj-xi)*(lat-yi)/(yj-yi)+xi))c=!c}return c}

/* ---------- prepare city data ---------- */
function prep(key){
  var c=CITIES[key];if(c.ready)return c;c.ready=true;
  c.hoodBy={};c.hoods.forEach(function(h){c.hoodBy[h.id]=h;h.ward=null});
  c.W=[];c.wardBy={};
  var merged={};
  (c.wards||[]).forEach(function(f){
    var m=merged[f.c];if(!m){m=merged[f.c]={c:f.c,en:f.en,p:[]}}
    m.p=m.p.concat(f.p);
  });
  Object.keys(merged).map(function(k){return merged[k]}).filter(function(f){return f.p.length}).forEach(function(f){
    var w={code:f.c,en:f.en,ja:JA[f.c]||"",f:f,hoods:[],places:[],info:WARDINFO[f.c]||null};
    w.polys=f.p.map(function(poly){return poly.map(function(ring){return ring.map(function(pt){return [pt[1],pt[0]]})})});
    var best=null,ba=0;f.p.forEach(function(poly){var a=Math.abs(ringArea(poly[0]));if(a>ba){ba=a;best=poly[0]}});
    w.label=centroid(best);
    c.W.push(w);c.wardBy[f.c]=w;
  });
  c.hoods.forEach(function(h){
    for(var i=0;i<c.W.length;i++){
      var w=c.W[i],hit=false;
      for(var k=0;k<w.f.p.length;k++){if(inRing(h.lng,h.lat,w.f.p[k][0])){hit=true;break}}
      if(hit){h.ward=w;w.hoods.push(h);break}
    }
  });
  c.places.forEach(function(p){p.hoodObj=c.hoodBy[p.hood]||null;var w=p.hoodObj&&p.hoodObj.ward;if(w)w.places.push(p)});
  return c;
}

/* ---------- map ---------- */
var map=L.map("map",{zoomControl:false,zoomSnap:.5,zoomDelta:.5,wheelPxPerZoomLevel:100});
L.control.zoom({position:"bottomright"}).addTo(map);
var tiles={
  clean:L.tileLayer(ESRI_GRAY,{maxNativeZoom:16,maxZoom:19,attribution:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ · Ward boundaries: MLIT National Land Numerical Information"}),
  streets:L.tileLayer(ESRI_ST,{maxZoom:19,attribution:"Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors · Ward boundaries: MLIT National Land Numerical Information"})
};
var curTile="clean";
function useTiles(name){
  if(name===curTile)return;
  map.removeLayer(tiles[curTile]);tiles[name].addTo(map);tiles[name].bringToBack();curTile=name;
}
tiles.clean.addTo(map);
var G={ward:L.layerGroup().addTo(map),hood:L.layerGroup().addTo(map),line:L.layerGroup(),pin:L.layerGroup().addTo(map),hotel:L.layerGroup().addTo(map)};
var lineBuilt=false;
function band(){
  var z=map.getZoom();map.getContainer().setAttribute("data-band",z<12.5?"overview":z<14?"area":z<15.5?"detail":"street");
  if(state.base==="auto")useTiles(z>=14.5?"streets":"clean");
}
map.on("zoomend",band);

function buildLines(){
  if(lineBuilt)return;lineBuilt=true;
  LINES.forEach(function(l){
    var arr=l.st.map(function(s){return [s[1],s[2]]});if(l.loop)arr.push(arr[0]);
    L.polyline(arr,{color:l.c,weight:3.5,opacity:.85,className:"mline"}).bindTooltip(l.name+" line",{sticky:true,className:"wtip"}).addTo(G.line);
  });
}

function firstSentence(s,max){
  s=String(s||"");var m=s.match(/^.*?[.!?](\s|$)/);var t=m?m[0].trim():s;
  if(t.length>max)t=t.slice(0,max-1).replace(/\s+\S*$/,"")+"…";return t;
}
function wardTip(w){
  var h="<b>"+w.en+"</b>"+(w.ja?" <span class='tj'>"+w.ja+"</span>":"");
  if(w.info){h+="<div class='tt'>"+w.info.tag+"</div>"}
  else h+="<div class='tt'>Not on the route</div>";
  if(w.hoods.length)h+="<div class='tf'>"+w.hoods.length+" area"+(w.hoods.length>1?"s":"")+": "+w.hoods.slice(0,4).map(function(x){return x.short}).join(", ")+(w.hoods.length>4?"…":"")+"</div>";
  return h+"<div class='tc'>Click for the full summary</div>";
}
function hoodTip(h){
  var lo=(typeof LORE!=="undefined"&&LORE[h.id])||{};
  var h2="<b>"+h.name+"</b> <span class='tj'>"+h.jp+"</span><div class='tt'>"+h.tag+"</div>";
  h2+="<div class='tf'>"+(h.tags||[]).map(function(t){return TAGS[t]||t}).join(" · ")+"</div>";
  return h2+"<div class='tc'>Click for history, food and craft</div>";
}
function buildLayers(){
  var c=prep(state.city);
  Object.keys(G).forEach(function(k){if(k!=="line")G[k].clearLayers()});
  map.removeLayer(G.line);
  c.W.forEach(function(w){
    var has=w.hoods.length;
    w.layer=L.polygon(w.polys,{className:"ward w"+(parseInt(w.code,10)%5)+(has?" has":""),interactive:true}).addTo(G.ward);
    w.layer.bindTooltip(wardTip(w),{sticky:true,className:"wtip wardtip",direction:"auto",offset:[18,0]});
    w.layer.on("click",function(){selectWard(w.code)});
    L.marker(w.label,{interactive:false,keyboard:false,icon:L.divIcon({className:"wlabel"+(w.hoods.length?" main":""),html:"<span>"+w.en+"</span>",iconSize:[0,0]})}).addTo(G.ward);
  });
  c.hoods.forEach(function(h){
    h.circle=L.circle([h.lat,h.lng],{radius:(h.r||.5)*1000,className:"hood c"+washIdx(h.name)}).addTo(G.hood);
    h.circle.bindTooltip(hoodTip(h),{sticky:true,className:"wtip hoodtip",direction:"auto",offset:[18,0]});
    h.circle.on("click",function(){selectHood(h.id)});
    L.marker([h.llat||h.lat,h.llng||h.lng],{interactive:false,keyboard:false,icon:L.divIcon({className:"hlabel",html:"<span>"+h.short+"</span>",iconSize:[0,0]})}).addTo(G.hood);
  });
  c.places.forEach(function(p){
    var mine=p.src==="research"||p.src==="list";
    p.mine=mine;
    p.m=L.marker([p.lat,p.lng],{icon:L.divIcon({className:"pin pinb pin-"+p.cat+(mine?" mine":""),html:ico(p.cat,true),iconSize:[28,28],iconAnchor:[14,14]}),riseOnHover:true,keyboard:false});
    p.m.bindTooltip(p.name,{permanent:true,direction:"right",offset:[16,0],className:"pintip"});
    p.m.on("click",function(){selectPlace(p)});
  });
  refreshPins();
  if(c.hotel){
    var m=L.marker([c.hotel.lat,c.hotel.lng],{icon:L.divIcon({className:"pinb hotelb",html:ico("hotel",true),iconSize:[32,32],iconAnchor:[16,16]}),keyboard:false}).addTo(G.hotel);
    m.bindTooltip(c.hotel.name,{permanent:true,direction:"right",offset:[18,0],className:"hoteltip"});
    m.on("click",function(){if(c.hotel.hood)selectHood(c.hotel.hood)});
  }
  if(state.city==="tokyo"){buildLines();if(state.lines)G.line.addTo(map)}
}

function pinVisible(p){return state.cats[p.cat]&&(!state.mine||p.mine)}
function refreshPins(){
  C().places.forEach(function(p){
    var on=G.pin.hasLayer(p.m),want=pinVisible(p);
    if(want&&!on)G.pin.addLayer(p.m);else if(!want&&on)G.pin.removeLayer(p.m);
  });
  applySel();
}

function applySel(){
  var c=C();
  c.W.forEach(function(w){var e=w.layer&&w.layer.getElement();if(e)e.classList.toggle("sel",state.ward===w.code&&!state.hood)});
  c.hoods.forEach(function(h){var e=h.circle&&h.circle.getElement();if(e)e.classList.toggle("sel",state.hood===h.id)});
  c.places.forEach(function(p){
    var e=p.m&&p.m.getElement();if(e)e.classList.toggle("sel",state.place===p);
    var t=p.m&&p.m.getTooltip&&p.m.getTooltip();var te=t&&t.getElement&&t.getElement();if(te)te.classList.toggle("on",state.place===p);
  });
}

/* ---------- selection ---------- */
function selectWard(code){
  var w=C().wardBy[code];if(!w)return;
  state.ward=code;state.hood=null;state.place=null;
  map.flyToBounds(w.layer.getBounds(),{paddingTopLeft:[40,40],paddingBottomRight:[innerWidth>900?150:40,40],maxZoom:13.5,duration:.7});
  applySel();render();
}
function selectHood(id){
  var h=C().hoodBy[id];if(!h)return;
  state.hood=id;state.ward=h.ward?h.ward.code:null;state.place=null;
  var pt=map.latLngToContainerPoint([h.lat,h.lng]),sz=map.getSize();
  var inView=map.getZoom()>=12.5&&pt.x>40&&pt.x<sz.x-(innerWidth>900?130:40)&&pt.y>40&&pt.y<sz.y-40;
  if(!inView)map.flyTo([h.lat,h.lng],(h.r||.5)>=.8?15:15.5,{duration:.8});
  applySel();render();
}
function selectPlace(p){
  state.place=p;state.hood=p.hood;var h=p.hoodObj;state.ward=h&&h.ward?h.ward.code:null;
  map.flyTo([p.lat,p.lng],Math.max(map.getZoom(),16),{duration:.6});
  applySel();render();
}
function goCity(){state.ward=null;state.hood=null;state.place=null;map.flyToBounds(C().bounds,{duration:.7});applySel();render()}
function goWard(){state.hood=null;state.place=null;var w=C().wardBy[state.ward];if(w){selectWard(w.code)}else goCity()}
function goHood(){var id=state.hood;state.place=null;selectHood(id)}

/* ---------- panel ---------- */
function catName(id){return CATN[id]||id}
function tagsHTML(a){return "<div class='tags'>"+(a||[]).map(function(t){return "<span class='tag'>"+(TAGS[t]||t)+"</span>"}).join("")+"</div>"}
function lis(a){return "<ul class='dots'>"+a.map(function(s){return "<li>"+s+"</li>"}).join("")+"</ul>"}
function gq(q){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q)}
function badge(id){var l=LINE[id];return l?"<span class='lb' style='--c:"+l.c+"' title='"+l.name+" line'>"+id+"</span>":""}
function placeRow(p){return "<li><button class='row' data-place='"+C().places.indexOf(p)+"'>"+ico(p.cat)+"<span class='nm'>"+p.name+(p.mine?" <span class='cnt'>yours</span>":"")+"</span><span class='sub'>"+p.note+"</span></button></li>"}
function hoodRow(h){var n=C().places.filter(function(p){return p.hood===h.id}).length;
  return "<li><button class='row wide' data-hood='"+h.id+"'><span class='nm'>"+h.name+" <span class='cnt'>"+h.jp+(n?" · "+n+" place"+(n>1?"s":""):"")+"</span></span><span class='sub'>"+h.tag+"</span></button></li>"}
function crumbs(parts){
  var out=["<button data-nav='city'>"+C().short+"</button>"];
  var w=state.ward&&C().wardBy[state.ward],h=state.hood&&C().hoodBy[state.hood];
  if(parts>=1&&w)out.push(parts>1||h?"<button data-nav='ward'>"+w.en+"</button>":"<span>"+w.en+"</span>");
  if(parts>=2&&h)out.push(parts>2?"<button data-nav='hood'>"+h.name+"</button>":"<span>"+h.name+"</span>");
  if(parts>=3&&state.place)out.push("<span>"+state.place.name+"</span>");
  return "<nav class='crumbs'>"+out.join(" › ")+"</nav>";
}

var WASH=[["#bfe3d3","#bfe0e6","#f6d5c0"],["#f3c9d2","#c9e4de","#e9e3b8"],["#bfe0e6","#d9d2ef","#f3c9d2"],["#cfe6da","#f7d9c4","#bfe0e6"],["#f6d5c0","#f3c9d2","#cfe6da"]];
function washIdx(en){var hv=0;for(var i=0;i<en.length;i++)hv=(hv*31+en.charCodeAt(i))%997;return hv%WASH.length}
var HOODCOL=["#bfe3d3","#f3c9d2","#bfe0e6","#d9d2ef","#f6d5c0"];
function nearHoods(hd,n){
  var c=C();return c.hoods.filter(function(x){return x!==hd}).sort(function(a,b){
    function d(p){return Math.pow(p.lat-hd.lat,2)+Math.pow(p.lng-hd.lng,2)}return d(a)-d(b)}).slice(0,n);
}
/* the sheet's circles are the map's neighbourhood circles: same colour, relative size and name */
var lastDiscs="";
function discsHTML(list,act){
  var pos=[[40,-8,170],[6,58,124],[92,116,78],[168,30,66],[150,128,52]];
  return list.slice(0,5).map(function(h,i){
    var p=pos[i],d=Math.round(p[2]*(.78+Math.min(h.r||.5,1.1)*.2));
    return "<button class='sun s"+i+(act===h.id?" on":"")+"' data-hood='"+h.id+"' aria-label='"+h.name+"' style='right:"+p[0]+"px;top:"+p[1]+"px;width:"+d+"px;height:"+d+"px;background:"+HOODCOL[washIdx(h.name)]+"'></button>"}).join("");
}
function hero(ja,en,sub,list,act){
  var n=Math.max(ja.length,1),fs=Math.max(24,Math.min(58,Math.floor(224/n))),rs=en.length>16?1.7:en.length>11?2.1:2.7;
  return (function(){var k=(list||[]).map(function(x){return x.id}).join(),still=k===lastDiscs;lastDiscs=k;return "<div class='hero"+(act?" pick":"")+(still?" still":"")+"'>"+(list&&list.length?discsHTML(list,act):"")})()+"<div class='ttl'><div class='brush' style='font-size:"+fs+"px'>"+ja+"</div></div><div class='cap'><div class='sub'>"+sub+"</div><div class='rom' style='font-size:"+rs+"rem'>"+en+"</div></div></div>";
}
function dsc(n){return "<span class='dsc' style='--c:"+(CATCOL[n]||"#1e2527")+"'>"+ico(n)+"</span>"}
function paras(a){return a.map(function(s){return "<p class='para'>"+s+"</p>"}).join("")}
function srcs(a){return "<p class='srcs'>Sources: "+a.map(function(s){return "<a target='_blank' rel='noopener' href='"+s[1]+"'>"+s[0]+"</a>"}).join(" · ")+"</p>"}
function themesHTML(){
  var t=THEMES[state.city];if(!t)return "";
  return "<h4>Threads running through "+C().label+"</h4>"+t.map(function(x){
    return "<details class='theme'><summary>"+x.t+"</summary><p class='para'>"+x.d+"</p><p class='srcs'>Source: <a target='_blank' rel='noopener' href='"+x.s[1]+"'>"+x.s[0]+"</a></p></details>"}).join("");
}
function readingHTML(){
  if(typeof READING==="undefined")return "";
  return "<h4>"+ico("history")+"Go deeper</h4><ul class='dots'>"+READING.map(function(r){return "<li><a target='_blank' rel='noopener' href='"+r.u+"'>"+r.t+"</a></li>"}).join("")+"</ul>";
}
function cityHTML(){
  var c=C(),h=hero(c.ja,c.label,c.dates||"city guide",c.hoods.slice().sort(function(a,b){return (b.r||.5)-(a.r||.5)}))+"<p class='ptag'>"+c.tag+"</p><p class='lead'>"+c.intro+"</p>";
  h+="<div class='legend'>"+ico('mine')+"Yours</span><span>"+ico('sight')+"Sights</span><span>"+ico('eat')+"Eat</span><span>"+ico('make')+"Shops &amp; craft</span><span>"+ico('green')+"Parks</span></div>";
  var ws=c.W.filter(function(w){return w.hoods.length}).sort(function(a,b){return b.hoods.length-a.hoods.length||a.en.localeCompare(b.en)});
  if(ws.length){
    h+="<h4>Wards on the route</h4><ul class='list'>"+ws.map(function(w){
      return "<li><button class='row wide' data-ward='"+w.code+"'><span class='nm'>"+w.en+" <span class='cnt'>"+w.ja+(w.hoods.length?" · "+w.hoods.length+" area"+(w.hoods.length>1?"s":""):"")+"</span></span><span class='sub'>"+(w.info?w.info.tag:"")+"</span></button></li>"}).join("")+"</ul>";
  }
  h+=themesHTML();
  h+=readingHTML();
  h+="<h4>All neighbourhoods</h4><ul class='list'>"+c.hoods.map(hoodRow).join("")+"</ul>";
  h+="<p class='srcs' style='margin-top:1.2rem'>"+CT_NOTE+"</p>";
  return h;
}
function wardHTML(){
  var w=C().wardBy[state.ward];
  var h=crumbs(1)+hero(w.ja,w.en,"ward · "+C().label.toLowerCase()+(w.hoods.length?"":" · off the main route"),w.hoods.slice().sort(function(a,b){return (b.r||.5)-(a.r||.5)}));
  h+="<p class='ptag'>"+(w.info?w.info.tag:"Not on the route")+"</p><p class='lead'>"+(w.info?w.info.t:WARD_GENERIC)+"</p>";
  if(w.hoods.length)h+="<h4>Neighbourhoods here</h4><ul class='list'>"+w.hoods.map(hoodRow).join("")+"</ul>";
  var pl=w.places.filter(pinVisible);
  if(pl.length)h+="<h4>Places in this ward <span class='cnt'>"+pl.length+"</span></h4><ul class='list'>"+pl.map(placeRow).join("")+"</ul>";
  h+="<div class='actions'><a class='btn ghost' target='_blank' rel='noopener' href='"+gq(w.en+" ward, "+C().label+", Japan")+"'>Open in Google Maps</a></div>";
  return h;
}
function hoodHTML(){
  var c=C(),hd=c.hoodBy[state.hood];
  var h=crumbs(2)+hero(hd.jp,hd.name,"neighbourhood"+(hd.ward?" · "+hd.ward.en.toLowerCase():""),(hd.ward&&hd.ward.hoods.length>1?hd.ward.hoods.slice().sort(function(a,b){return (b.r||.5)-(a.r||.5)}):[hd].concat(nearHoods(hd,2))),hd.id);
  h+="<p class='ptag'>"+hd.tag+"</p>"+tagsHTML(hd.tags)+"<p class='lead'>"+hd.intro+"</p>";
  var lo=LORE[hd.id]||{};
  if(hd.see&&hd.see.length)h+="<h4>"+ico("sight")+"See</h4>"+lis(hd.see);
  if(lo.h)h+="<h4>"+ico("history")+"History</h4>"+paras(lo.h);
  if(lo.c)h+="<h4>"+ico("craft")+"Culture &amp; craft</h4>"+paras(lo.c);
  if(lo.f)h+="<h4>"+ico("eat")+"Food</h4>"+paras(lo.f);
  if(hd.eat&&hd.eat.length)h+="<h4>"+ico("eat")+"Eat &amp; drink</h4>"+lis(hd.eat);
  if(hd.picks)h+="<h4>"+ico("tips")+"Worth doing</h4><p style='margin:0'>"+hd.picks+"</p>";
  if(lo.t)h+="<h4>"+ico("tips")+"Good to know</h4>"+lis(lo.t);
  if(hd.yours&&hd.yours.length)h+="<div class='yours'><h4>From your research</h4>"+lis(hd.yours)+"</div>";
  var f="";
  if(hd.t&&c.hotel)f+="<div><dt>From the hotel</dt><dd>"+(hd.l||[]).map(badge).join("")+" "+hd.t+"</dd></div>";
  if(hd.go)f+="<div><dt>Getting there</dt><dd>"+hd.go+"</dd></div>";
  if(hd.when)f+="<div><dt>Best time</dt><dd>"+hd.when+"</dd></div>";
  if(f)h+="<dl class='facts'>"+f+"</dl>";
  var pl=c.places.filter(function(p){return p.hood===hd.id&&pinVisible(p)});
  if(pl.length)h+="<h4>Saved places here <span class='cnt'>"+pl.length+"</span></h4><ul class='list'>"+pl.map(placeRow).join("")+"</ul>";
  h+="<div class='actions'><a class='btn' target='_blank' rel='noopener' href='"+gq(hd.name+", "+c.label+", Japan")+"'>Open in Google Maps</a><button class='btn ghost' data-zoom='1'>Zoom to area</button></div>";
  if(lo.s)h+=srcs(lo.s);
  return h;
}
function placeHTML(){
  var c=C(),p=state.place,hd=p.hoodObj;
  var h=crumbs(3)+"<p class='eyebrow'>"+catName(p.cat)+"</p><h2 class='ptitle'>"+p.name+"</h2>";
  h+="<div style='margin:.5rem 0 .2rem'>";
  if(p.src==="list")h+="<span class='badge mine'>From your Maps list: "+p.list+"</span>";
  else if(p.src==="research")h+="<span class='badge mine'>From your research</span>";
  else h+="<span class='badge guide'>Suggested landmark</span>";
  h+="</div><p class='lead'>"+p.note+"</p>";
  if(hd)h+="<dl class='facts'><div><dt>Neighbourhood</dt><dd><button class='crumbbtn' data-hood='"+hd.id+"' style='border:none;background:none;padding:0;color:var(--ai);font-weight:700;text-decoration:underline'>"+hd.name+"</button></dd></div></dl>";
  h+="<div class='actions'><a class='btn' target='_blank' rel='noopener' href='"+gq(p.q)+"'>Open in Google Maps</a>";
  h+="<a class='btn ghost' target='_blank' rel='noopener' href='https://www.google.com/maps/dir/?api=1&destination="+p.lat+","+p.lng+"'>Directions</a>";
  if(c.hotel)h+="<a class='btn ghost' target='_blank' rel='noopener' href='https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(c.hotel.name)+"&destination="+p.lat+","+p.lng+"&travelmode=transit'>From the hotel</a>";
  h+="</div>";
  return h;
}
function render(){
  var el=$("#panel");
  el.innerHTML="<div class='pwrap'>"+(state.place?placeHTML():state.hood?hoodHTML():state.ward?wardHTML():cityHTML())+"</div>";
  el.scrollTop=0;
  plateTitle();
}
function plateTitle(){
  var c=C(),w=state.ward&&c.wardBy[state.ward],h=state.hood&&c.hoodBy[state.hood],p=state.place;
  var ja=h?h.jp:w?w.ja:c.ja,n=ORDER.indexOf(state.city)+1;
  var f=$("#figline");if(f)f.innerHTML="<b>Fig. 0"+n+"</b>"+c.label+" · "+c.tag;
}
function hoodGlow(id,on){var h=C().hoodBy[id],e=h&&h.circle&&h.circle.getElement&&h.circle.getElement();if(e)e.classList.toggle("glow",on)}
$("#panel").addEventListener("mouseover",function(e){var b=e.target.closest(".sun");if(b)hoodGlow(b.dataset.hood,true)});
$("#panel").addEventListener("mouseout",function(e){var b=e.target.closest(".sun");if(b)hoodGlow(b.dataset.hood,false)});
$("#panel").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  var c=C();
  if(b.dataset.nav==="city")return goCity();
  if(b.dataset.nav==="ward")return goWard();
  if(b.dataset.nav==="hood")return goHood();
  if(b.dataset.ward)return selectWard(b.dataset.ward);
  if(b.dataset.hood)return selectHood(b.dataset.hood);
  if(b.dataset.place)return selectPlace(c.places[+b.dataset.place]);
  if(b.dataset.zoom){var hd=c.hoodBy[state.hood];map.flyTo([hd.lat,hd.lng],(hd.r||.5)>=.8?15:15.5,{duration:.6})}
});

/* ---------- toolbar & tabs ---------- */
function buildTools(){
  var t=$("#maptools");
  var h="<div class='seg' role='group' aria-label='Base map'><button data-base='auto' aria-pressed='"+(state.base==="auto")+"'>Auto</button><button data-base='clean' aria-pressed='"+(state.base==="clean")+"'>Clean</button><button data-base='streets' aria-pressed='"+(state.base==="streets")+"'>Streets</button></div>";
  CATS.forEach(function(k){h+="<button class='chip' data-cat='"+k.id+"' aria-pressed='"+!!state.cats[k.id]+"'>"+dsc(k.id)+k.name+"</button>"});
  h+="<button class='chip' data-mine='1' aria-pressed='"+state.mine+"'>"+ico('mine')+"Only mine</button>";
  if(state.city==="tokyo")h+="<button class='chip line-chip' data-lines='1' aria-pressed='"+state.lines+"'>"+ico('line')+"Metro lines</button>";
  t.innerHTML=h;
}
$("#maptools").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  if(b.dataset.base){
    state.base=b.dataset.base;
    if(state.base==="auto")band();else useTiles(state.base);
  }else if(b.dataset.cat){state.cats[b.dataset.cat]=state.cats[b.dataset.cat]?0:1;refreshPins();render()}
  else if(b.dataset.mine){state.mine=!state.mine;refreshPins();render()}
  else if(b.dataset.lines){state.lines=!state.lines;if(state.lines)G.line.addTo(map);else map.removeLayer(G.line)}
  buildTools();
});
function buildTabs(){
  $("#tabs").innerHTML=ORDER.map(function(k){var c=CITIES[k];return "<button class='tab' role='tab' data-city='"+k+"' aria-selected='"+(k===state.city)+"' aria-label='"+c.label+"'><i>"+c.ja+"</i><span>"+c.short+"</span></button>"}).join("");
}
$("#tabs").addEventListener("click",function(e){var b=e.target.closest("button");if(b)setCity(b.dataset.city)});

var fitted=false,touched=false;
function fitCity(){var s=map.getSize();if(s.x>80&&s.y>80){map.fitBounds(C().bounds,{animate:false,paddingBottomRight:[innerWidth>900?112:0,0]});band();fitted=true}}
["pointerdown","wheel","keydown"].forEach(function(ev){$("#map").addEventListener(ev,function(){touched=true},{passive:true})});
function setCity(k){
  state.city=k;state.ward=null;state.hood=null;state.place=null;touched=false;
  prep(k);buildTabs();buildTools();buildLayers();
  map.invalidateSize();fitted=false;fitCity();
  band();applySel();render();
}
function refit(){map.invalidateSize();if(!fitted||(!touched&&!state.ward&&!state.hood&&!state.place))fitCity()}
if(window.ResizeObserver){new ResizeObserver(refit).observe($("#map"))}
window.addEventListener("load",refit);
window.addEventListener("resize",function(){map.invalidateSize()});
function loadGoogle(){
  if(!USE_GOOGLE||!GOOGLE_KEY||!L.gridLayer||!L.gridLayer.googleMutant)return;
  window.__gmReady=function(){
    try{
      var g=L.gridLayer.googleMutant({type:"roadmap",maxZoom:20});
      var old=tiles.streets;tiles.streets=g;
      if(curTile==="streets"){map.removeLayer(old);g.addTo(map);g.bringToBack()}
    }catch(e){}
  };
  var s=document.createElement("script");
  s.src="https://maps.googleapis.com/maps/api/js?key="+encodeURIComponent(GOOGLE_KEY)+"&language=en&region=JP&callback=__gmReady";
  s.async=true;document.head.appendChild(s);
}
loadGoogle();
setCity("tokyo");
})();
