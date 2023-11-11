import { displayPokemons } from "./createDom.js";
const navLinks = document.querySelectorAll(".nav-link");
const homeButton = document.querySelectorAll(".home-button");
const pokedexButton = document.querySelectorAll(".pokedex-button");
const home = document.querySelector("#home");
const pokedex = document.querySelector("#pokedexlayout");
const startButton = document.querySelector("#start-button");
const navWip = document.querySelectorAll(".wip-page");
const wipPage = document.querySelector("#wip");
const addClassOnClick = () => {
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.forEach((link) => {
				link.classList.remove("selected");
			});
			link.classList.add("selected");
		});
	});
};
addClassOnClick();
displayPokemons();

pokedexButton.forEach((button) => {
	button.addEventListener("click", () => {
		home.style.display = "none";
		pokedex.style.display = "flex";
		wipPage.style.display = "none";
	});
});

homeButton.forEach((button) => {
	button.addEventListener("click", () => {
		home.style.display = "flex";
		pokedex.style.display = "none";
		wipPage.style.display = "none";
	});
});

startButton.addEventListener("click", () => {
	const desktopHome = document.querySelector("#desktop-home");
	const desktopPokedex = document.querySelector("#desktop-pokedex");
	home.style.display = "none";
	pokedex.style.display = "flex";
	if (window.innerWidth > 1024) {
		desktopHome.classList.remove("selected");
		desktopPokedex.classList.add("selected");
	}
});

navWip.forEach((page) => {
	page.addEventListener("click", () => {
		home.style.display = "none";
		pokedex.style.display = "none";
		wipPage.style.display = "flex";
	});
});
