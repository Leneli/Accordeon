import "./accordeon.scss";
import Animate from "./animate";

//Elements
const 	accordeons = document.getElementsByClassName("accordeon"),
		accItems   = document.getElementsByClassName("accordeon__item");

//Data for Accordeon
const 	classActive = "active",
		padding = 20;

//run script
window.onload = function() { Accordeon.init(); };


let Accordeon = {
	init() {
		document.addEventListener("click", function(event) {
			event = event || event.window;

			if(event.target.classList.contains("accordeon__title")) {
				let activeItem = event.target.parentNode;

				Accordeon.closeAll();
				Accordeon.toggleClass(activeItem);
			}
		});
	},

	toggleClass(el) {
		if(el.classList.contains(classActive)) {
			Accordeon.closeItem(el);
		} else {
			el.classList.add(classActive);
			Accordeon.animateOpen(el);
		}
	},

	closeItem(el) {
		Accordeon.animateCloce(el);
		el.classList.remove(classActive);
		el.removeAttribute("style");
	},

	closeAll() {
		for(let i = 0; i < accItems.length; i++) {
			if(accItems[i].classList.contains(classActive)) {
				Accordeon.closeItem(accItems[i]);
			}
		}
	},

	animateOpen(el) {
		let titleHeight = el.getElementsByClassName("accordeon__title")[0].scrollHeight,
			maxHeight = el.scrollHeight + padding - titleHeight;

		Animate({
			duration: 400,
			timing: function (timeFraction) { return timeFraction; },
			draw: function (progress) {
				el.style.height = progress * maxHeight + titleHeight + 'px';
			}
		});
	},

	animateCloce(el) {
		let accBody = el.getElementsByClassName("accordeon__body")[0],
			height = accBody.scrollHeight + padding;

		Animate({
			duration: 400,
			timing: function (timeFraction) { return timeFraction; },
			draw: function (progress) {
				accBody.style.height = height - (progress * height) + 'px';
			}
		});
	}
};