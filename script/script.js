import { displayPokemons } from "./createDom.js";
const navLinks = document.querySelectorAll(".nav-link");
const homeButton = document.querySelector("#home-button");
const pokedexButton = document.querySelector("#pokedex-button");
const home = document.querySelector("#home");
const pokedex = document.querySelector("#pokedexlayout");
const startButton = document.querySelector("#start-button");
const addClassOnClick = () => {
	navLinks.forEach((navLink) => {
		navLink.addEventListener("click", () => {
			navLinks.forEach((navLink) => {
				navLink.classList.remove("selected");
			});
			navLink.classList.add("selected");
		});
	});
};
addClassOnClick();
displayPokemons();
pokedexButton.addEventListener("click", () => {
	home.style.display = "none";
	pokedex.style.display = "flex";
});

homeButton.addEventListener("click", () => {
	home.style.display = "flex";
	pokedex.style.display = "none";
});

startButton.addEventListener("click", () => {
	home.style.display = "none";
	pokedex.style.display = "flex";
	homeButton.classList.remove("selected");
	pokedexButton.classList.add("selected");
});
