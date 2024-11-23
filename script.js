
var stores = [
    { name: "Магазин 1", location: [50.4501, 30.5236], address: "ул. Примерная, 1" },
    { name: "Магазин 2", location: [50.4511, 30.5246], address: "ул. Примерная, 2" }
];

stores.forEach(function(store) {
    L.marker(store.location).addTo(map)
        .bindPopup("<b>" + store.name + "</b><br>Адрес: " + store.address);
});