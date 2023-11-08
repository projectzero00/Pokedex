import { getPokemons } from "./fetchApi.js";

const searchResult = document.querySelector(".search-result");
const searchButton = document.querySelector("#search-pokemon-button");
const createDom = (pokemon) => {
	const fragment = document.createDocumentFragment();
	const pokemonContainer = document.createElement("div");
	pokemonContainer.classList.add("pokemon-container");

	const pokemonElement = document.createElement("div");
	pokemonElement.classList.add("pokemon");

	const imgElement = document.createElement("img");
	imgElement.src = pokemon.image;

	const numberElement = document.createElement("p");
	numberElement.classList.add("pokemon-number");
	numberElement.textContent = `N°${pokemon.number}`;

	const nameElement = document.createElement("p");
	nameElement.classList.add("pokemon-name");
	nameElement.textContent = pokemon.name;

	const typeElement = document.createElement("p");
	typeElement.classList.add("pokemon-type");
	typeElement.classList.add(`${pokemon.type}-type`);
	typeElement.textContent = pokemon.type.toUpperCase();

	pokemonElement.appendChild(imgElement);
	pokemonElement.appendChild(numberElement);
	pokemonElement.appendChild(nameElement);
	pokemonElement.appendChild(typeElement);

	pokemonContainer.appendChild(pokemonElement);
	fragment.appendChild(pokemonContainer);
	searchResult.appendChild(fragment);
};

export const displayPokemons = async () => {
	const pokemons = await getPokemons();

	pokemons.forEach((pokemon) => {
		createDom(pokemon);
	});
};

searchButton.addEventListener("click", async (e) => {
	

	searchResult.innerHTML = "";
	const searchInput = document.querySelector("#search-pokemon-input").value;
	const pokemons = await getPokemons();
	pokemons.forEach((pokemon) => {
		if (pokemon.name.includes(searchInput)) {
			createDom(pokemon);
		}
	});
});
