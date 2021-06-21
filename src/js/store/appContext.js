import React, { useState, useEffect } from "react";

import getState from "./flux.js";

export const Context = React.createContext(null);

export function useContext() {
	return React.useContext(Context);
}

function injectContext(PassedComponent) {
	function StoreWrapper(props) {
		const [state, setState] = useState(
			getState({
				getStore() {
					return state.store;
				},
				setStore(currentStore) {
					setState({
						store: Object.assign(state.store, currentStore),
						actions: state.actions
					});
				},
				getActions() {
					return state.actions;
				}
			})
		);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	}
	return StoreWrapper;
}

export default injectContext;
