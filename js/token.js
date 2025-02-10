"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const path = window.location.pathname;
	const fileName = path.split("/").pop();

	if (fileName == "token.html") {
		console.log(fileName);
		const circle = document.querySelector(".diagram__circle");
		const img2 = document.querySelector(".diagram__img--2");

		circle.addEventListener("mouseenter", () => {
			img2.classList.add("active__visible");
		});

		circle.addEventListener("mouseleave", () => {
			img2.classList.remove("active__visible");
		});
	}

	if (fileName == "fund.html") {
		console.log(fileName);
		const footer = document.querySelector(".footer__modifikator");
		if (window.innerWidth < 576) {
			const blocks = document.querySelectorAll(".fundroad__block--text_header");
			const text = document.querySelectorAll(".fundroad__block--text_text");
			const questtitle = document.querySelectorAll(".questions__title");

			blocks.forEach((block) => {
				if (block.textContent === "Ventures.") {
					block.textContent = "Grants.";
					return;
				}
				if (block.textContent === "Grants.") {
					block.textContent = "Ventures.";
				}
			});
			text.forEach((text) => {
				if (
					text.textContent ===
					"The unique idea will receive a grant and collaboration with the Finity Touch ecosystem."
				) {
					text.textContent =
						"Access to investmen opportunities with Finity Touch team";
					return;
				}
			});
			questtitle.forEach((text) => {
				if (
					text.textContent === "How do I apply for consideration of my idea? "
				) {
					text.textContent = "What is Finity Touch?";
					return;
				} else if (text.textContent === "What size of investment can I get? ") {
					text.textContent = "Where can I buy a Finity token?";
					return;
				} else if (
					text.textContent === "How is the capital formed in your fund? "
				) {
					text.textContent = "Where can I buy a Finity token?";
					return;
				}
			});
			footer.style.marginTop = "30px";
		}
		if (window.innerWidth >= 576) {
			footer.style.borderTop = "unset";
		}
	}

	initSwiper();
	function initSwiper() {
		if (window.innerWidth < 768) {
			new Swiper(".token__container", {
				slidesPerView: "auto",
				spaceBetween: 30,
				loop: false,
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
