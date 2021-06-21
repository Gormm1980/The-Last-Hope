function getState({ getStore, getActions, setStore }) {
	return {
		store: {
			loading: true,
			people: [],
			planets: [],
			species: [],
			favorites: []
		},
		actions: {
			getPeople() {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/people/";
				const config = {
					method: "GET"
				};
				if (store.people.length === 0) {
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							console.log("@@@@", json.results);
							setStore({ people: json.results });
						});
				}
			},
			getPlanets() {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/planets/";
				const config = {
					method: "GET"
				};
				if (store.planets.length === 0) {
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ planets: json.results });
						});
				}
			},
			getSpecies() {
				const store = getStore();
				const endpoint = "https://swapi.dev/api/species/";
				const config = {
					method: "GET"
				};
				if (store.species.length === 0) {
					fetch(endpoint, config)
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ species: json.results });
						});
				}
			},
			getFavorites() {
				const store = getStore();
				return store.favorites;
				//[... convierte un set en un array] lo devuelve como elemento coma elemento coma elemento
			},

			addFavorites(favorite_name) {
				const store = getStore();
				store.favorites.add(favorite_name);
				//no va con push porque no es un array, es un set y no puede ir con push
				setStore({ favorites: store.favorites });
			},

			deleteFavorites(favorite_name) {
				const store = getStore();
				store.favorites.delete(favorite_name);
				setStore({ favorites: store.favorites });
			},
			setLoading(status) {
				setStore({ loading: status });
			},
			toggleLoader() {
				const store = getStore();
				setStore({ loading: !store.loading });
			}
		}
	};
}
export default getState;
