
document.addEventListener('DOMContentLoaded',function (){
    const cards = document.querySelectorAll(".card");
    const home_btn = document.querySelector(".home_btn");

    cards.forEach(function(card){
        card.addEventListener("click",function (){
            const cardId = card.getAttribute("data-id");
            window.location.href = `details.html?id=${cardId}`;
        });
    });
    home_btn.addEventListener("click", function (){
        window.location.href = "index.html"
    });
});

var stores = [
    { name: "Магазин 1", location: [50.4501, 30.5236], address: "ул. Примерная, 1" },
    { name: "Магазин 2", location: [50.4511, 30.5246], address: "ул. Примерная, 2" }
];

stores.forEach(function(store) {
    L.marker(store.location).addTo(map)
        .bindPopup("<b>" + store.name + "</b><br>Адрес: " + store.address);
});
function setCardWidth() {
    const phoneCard = document.querySelector('.phone-card');

    if (window.innerWidth >= 1024) {
        phoneCard.style.width = '30%';
    } else if (window.innerWidth >= 768) {
        phoneCard.style.width = '45%';
    } else {
        phoneCard.style.width = '90%';
    }
}

// Встановлюємо початкову ширину картки під час завантаження сторінки
setCardWidth();

// Оновлюємо ширину картки при зміні розміру вікна
window.addEventListener('resize', setCardWidth);
