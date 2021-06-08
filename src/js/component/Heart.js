import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Heart(props) {
	const { store, actions } = useContext(Context);

	const handleClick = event => {
		actions.addFavorites();
		// console.log("props.name. ", props.name);
		console.log("store.favorites: ", store.favorites);
	};
	return (
		<button onClick={handleClick} type="button" className="btn heart">
			<i className="far fa-heart" />
		</button>
	);
}
export default Heart;
