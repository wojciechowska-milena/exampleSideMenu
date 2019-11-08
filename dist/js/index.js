var latlng = L.latLng(50.935362, 6.962366);
var mymap = L.map('mapid').setView(latlng, 15);
var marker = L.marker(latlng).addTo(mymap);
marker.bindPopup("<b>Green Touch</b><br>Address Lorem ipsum.").openPopup();


 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});