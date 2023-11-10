import { weakness } from "./weakness.js";
const pokeInfoSection = document.querySelector("#poke-info-section");

export const createDomAside = (pokemon) => {
	pokeInfoSection.innerHTML = `
                    <figure>
						<img src="${pokemon.staticImage}" alt="" />	
					</figure>
					<p class="aside-number">#${pokemon.number}</p>
					<h3 class="aside-name">${pokemon.name}</h3>
					<div class="typediv">
						<p class="pokemon-type ${pokemon.type}">${pokemon.type}</p>
						<p class="pokemon-type ${pokemon.type2}">${pokemon.type2}</p>
					</div>
					<h4 class="aside-title">ABILITIES</h4>
					<div class="abilities-div">
						<p class="ability">${pokemon.ability1}</p>
						<p class="ability">${pokemon.ability2}</p>
					</div>
					<div class="measurements-div">
						<label class="measurements">
							HEIGHT
							<p>${pokemon.height}m</p>
						</label>
						<label class="measurements">
							WEIGHT
							<p>${pokemon.weight}kg</p>
						</label>
						<label class="measurements">
							WEAKNESS
							<span class="weakness">
							</span>
						</label>
						<label class="measurements">
							BASE EXP
							<p>${pokemon.xp}</p>
						</label>
					</div>
					<h4 class="aside-title">STATS</h4>
					<div class="stats-div">		
						<span class="stats"><p class="stats-icon hp">HP</p>${pokemon.hp}</span>
						<span class="stats"><p class="stats-icon atk">ATK</p>${pokemon.attack}</span>
						<span class="stats"><p class="stats-icon def">DEF</p>${pokemon.defense}</span>
						<span class="stats"><p class="stats-icon spa">SpA</p>${pokemon.specialAttack}</span>
						<span class="stats"><p class="stats-icon spd">SpD</p>${pokemon.specialDefense}</span>
						<span class="stats"><p class="stats-icon speed">SPD</p>${pokemon.speed}</span>
						<span class="stats"><p class="stats-icon tot">TOT</p>${pokemon.hp + pokemon.attack + pokemon.defense + pokemon.specialAttack + pokemon.specialDefense + pokemon.speed}</span>		
					</div>`;

    const weakDom = () => {
        const pokemonWeak = document.querySelector(".weakness");
        weakness[pokemon.type].forEach((weak) => {
            pokemonWeak.innerHTML += `
            <div class="icon ${weak}">
			    <img src="icons/types-icons/${weak}.svg" />
			</div>`;
        })
    }
    weakDom()
};
