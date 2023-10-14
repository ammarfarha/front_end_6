let scs_cor = [33.508370548958645, 36.28589149423668];

var map = L.map('mymap').setView(scs_cor, 19);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker(scs_cor).addTo(map);

var circle = L.circle(scs_cor, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2,
    radius: 10
}).addTo(map);

var polygon = L.polygon([
    [33.5085255261843, 36.28567528091075],
    [33.5083104556718, 36.28605839575854],
    [33.50821557145223, 36.28560320980077]
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2,
}).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");