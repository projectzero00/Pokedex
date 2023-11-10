export const fetchAPI = async () => {
	const startNumber = document.querySelector("#start-number").value;
	const correctNumber = startNumber - 1;
	const endNumber = document.querySelector("#end-number").value;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${
		endNumber - correctNumber
	}&offset=${correctNumber}`;
	const response = await fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data.results.map((pokemon) => {
				return {
					name: pokemon.name,
					url: pokemon.url,
				};
			});
		});

	return response;
};

export const getPokemons = async () => {
	try {
		const data = await fetchAPI();
		if (data) {
			return Promise.all(
				data.map(async (pokemon) => {
					const url = pokemon.url;
					try {
						const response = await fetch(url);
						if (response.ok) {
							const data = await response.json();
							return {
								name: pokemon.name,
								number: data.id,
								type: data.types[0]?.type?.name || "",
								type2: data.types[1]?.type?.name || "",
								ability1: data.abilities[0]?.ability?.name || "",
								ability2: data.abilities[1]?.ability?.name || "",
								weight: data.weight,
								height: data.height,
								xp: data.base_experience,
								hp: data.stats[0].base_stat,
								attack: data.stats[1].base_stat,
								defense: data.stats[2].base_stat,
								specialAttack: data.stats[3].base_stat,
								specialDefense: data.stats[4].base_stat,
								speed: data.stats[5].base_stat,
								image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`,
								staticImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
							};
						} else {
							throw new Error("Error fetching data");
						}
					} catch (error) {
						console.error("Error fetching data:", error);
						return null;
					}
				})
			);
		} else {
			throw new Error("Data is null or undefined");
		}
	} catch (error) {
		console.error("Error fetching API:", error);
		return null;
	}
};
