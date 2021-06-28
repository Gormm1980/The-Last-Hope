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
				return [...store.favorites];
			},

			addFavorites(favorite_name) {
				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite_name] });
			},

			deleteFavorites(favorite_name) {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item != favorite_name) });
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
