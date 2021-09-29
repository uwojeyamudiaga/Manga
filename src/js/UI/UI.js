import { removeActiveClass, fetchQuote } from "../helper";

//all what is rendered goes here

class UI {
	constructor() {
		this.menu = document.querySelector(".sidebar__menu");
		this.randomBtn = document.getElementById("random__btn");
	}

	switchTab(event) {
		const activeTab = event.target;
		const activeSection = document.getElementById(
			activeTab.dataset.target.slice(1)
		);
		removeActiveClass(".sidebar__menu__item__link");
		removeActiveClass(".content__section");
		activeTab.classList.add("active");
		activeSection.classList.add("active");
	}

	navigate() {
		this.menu.addEventListener("click", this.switchTab);
	}

	getRandomQuote(url) {
		this.randomBtn.addEventListener("click", fetchQuote(url));
	}
}

export default UI;