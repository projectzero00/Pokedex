import { displayPokemons } from "./createDom.js";
const navLinks = document.querySelectorAll(".nav-link");
const homeButton = document.querySelector("#home-button");
const pokedexButton = document.querySelector("#pokedex-button");
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
pokedexButton.addEventListener("click", () => {
	home.style.display = "none";
	pokedex.style.display = "flex";
    wipPage.style.display = "none";
});

homeButton.addEventListener("click", () => {
	home.style.display = "flex";
	pokedex.style.display = "none";
    wipPage.style.display = "none";
});

startButton.addEventListener("click", () => {
	home.style.display = "none";
	pokedex.style.display = "flex";
	homeButton.classList.remove("selected");
	pokedexButton.classList.add("selected");
});


navWip.forEach((page) => {
	page.addEventListener("click", () => {
		home.style.display = "none";
		pokedex.style.display = "none";
        wipPage.style.display = "flex";
	});
});