

var swiper = new Swiper(".continer-docs", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    grabCursor : 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets : true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        626: {
            slidesPerView: 2,
        },
        921: {
            slidesPerView: 3,
        },
    },
});
