import "./accordeon.scss";

//Elements
const 	accordeons = document.querySelectorAll(".accordeon");

//Data for Accordeon
const 	classActive = "active",
		padding = 20;


window.onload = function() { Accordeon.init(); };


let Accordeon = {
	init() {
		document.addEventListener("click", function(event) {
			event = event || event.window;

			if(event.target.classList.contains("accordeon__title")) {
				let activeItem = event.target.parentNode,
					textItem = activeItem.nextElementSibling,
					acc = activeItem.parentNode.parentNode;

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

	height(el) {
		let maxHeight = el.scrollHeight + (padding * 2),
			elHeight  = 0;

		el.style.height = maxHeight + "px";
	}
};