import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Heart(props) {
	const [active, setActive] = React.useState("Heart inactive");
	function changeRed() {
		setActive("Heart red");
	}
	const { store, actions } = useContext(Context);
	console.log(props);

	const handleClick = () => {
		actions.addFavorites(props.name);
		console.log("store.favorites: ", store.favorites);
	};
	return (
		<button onClick={(handleClick, changeRed)} type="button" className="btn heart">
			<i className="far fa-heart" />
		</button>
	);
}
Heart.propTypes = {
	name: PropTypes.string
};
export default Heart;
