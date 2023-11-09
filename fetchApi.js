export const fetchAPI = async () => {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
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
								image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${data.id}.gif`,
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


