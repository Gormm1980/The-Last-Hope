import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function Heart(props) {
	const [active, setActive] = useState(false);

	const { store, actions } = useContext(Context);
	// console.log(props);

	return (
		<button
			onClick={e => {
				actions.addFavorites(props.name);
				setActive(!active);
			}}
			type="button"
			className="btn heart">
			<i className={"far fa-heart " + (active ? "active" : "inactive")} />
		</button>
	);
}
Heart.propTypes = {
	name: PropTypes.string
};
export default Heart;
