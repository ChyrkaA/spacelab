"use strict";

document.addEventListener("DOMContentLoaded", () => {
	new Swiper(".swiper-container", {
		slidesPerView: "auto",
		loop: true,
		freeMode: true,
		speed: 2500,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
	});
	initSwiper();
	function initSwiper() {
		if (window.innerWidth < 992) {
			new Swiper(".idea-container", {
				slidesPerView: "auto",
				loop: false,
			});
			new Swiper(".team__container", {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerGroup: 2,
				loop: false,
				centeredSlides: false,
				navigation: {
					nextEl: ".custom-button-next", // Кнопка "вперед"
					prevEl: ".custom-button-prev", // Кнопка "назад"
				},
				breakpoints: {
					768: {
						spaceBetween: 20, // На планшетах чуть шире
					},
				},
			});
		}
	}
	window.addEventListener("resize", initSwiper);
});
