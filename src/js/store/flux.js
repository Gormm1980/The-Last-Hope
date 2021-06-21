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

			addFavorites(favorite) {
				if (!getStore().favorites.includes(favorite))
					setStore({ favorites: [...getStore().favorites, favorite] });
			},

			deleteFavorites(favorite_name) {
				if (getStore().favorites.includes(favorite))
					setStore({ favorites: [...getStore().favorites, favorite] });
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
