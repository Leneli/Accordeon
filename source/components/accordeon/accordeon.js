import "./accordeon.scss";

//Elements
const 	accordeons = document.getElementsByClassName("accordeon"),
		accItems   = document.getElementsByClassName("accordeon__item");

//Data for Accordeon
const 	classActive = "active",
		padding = 20;


window.onload = function() { Accordeon.init(); };


let Accordeon = {
	init() {
		document.addEventListener("click", function(event) {
			event = event || event.window;

			if(event.target.classList.contains("accordeon__title")) {
				let activeItem = event.target.parentNode;
					//textItem = activeItem.nextElementSibling,
					//acc = activeItem.parentNode.parentNode;

				Accordeon.closeAll();
				Accordeon.toggleClass(activeItem);
			}
		});
	},

	toggleClass(el) {
		if(el.classList.contains(classActive)) {
			el.classList.remove(classActive);
			el.removeAttribute("style");
		} else {
			this.height(el);
			el.classList.add(classActive);
		}
	},

	closeAll() {
		for(let i = 0; i < accItems.length; i++) {
			if(accItems[i].classList.contains(classActive)) {
				accItems[i].classList.remove(classActive);
				accItems[i].removeAttribute("style");
			}
		}
	},

	height(el) {
		let maxHeight = el.scrollHeight + (padding * 2),
			elHeight  = 0;

		el.style.height = maxHeight + "px";
	}
};