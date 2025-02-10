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
					nextEl: ".custom-button-next",
					prevEl: ".custom-button-prev",
				},
				breakpoints: {
					768: {
						spaceBetween: 20,
					},
				},
			});
		}
	}
	window.addEventListener("resize", initSwiper);

	if (window.innerWidth < 992) {
		const bigMenu = document.querySelector(".menu__bigMenu");
		const hambudger = document.querySelector(".hamburger");
		function action(action) {
			hambudger.addEventListener(action, () => {
				bigMenu.classList.toggle("showMenu");
				hambudger.classList.toggle("cross");
			});
		}
		action("click");
	}

	window.addEventListener("load", function () {
		console.log(navigator.userAgent);
		if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
			const videos = document.querySelectorAll("video");

			videos.forEach((video) => {
				const videoClass = video.className;
				const webmSource = video.querySelector('source[type="video/webm"]');
				if (webmSource) {
					const gifSrc = webmSource.src.replace(".webm", ".gif");
					const img = document.createElement("img");
					img.src = gifSrc;
					img.alt = "coin";
					img.className = videoClass;
					video.parentNode.replaceChild(img, video);
				}
			});
		}
	});
});
