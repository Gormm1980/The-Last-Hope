import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Heart from "./Heart.js";
import Favorites from "./favorite.js";

function Card(props) {
	const { store, actions } = useContext(Context);
	console.log(props);

	return (
		<div className="card">
			<img
				className="card-img-top"
				alt="..."
				src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
			/>
			<div className="card-body">
				{props.children}
				<Link className="btn btn-outline-primary" id="button-info">
					Learn More!
				</Link>
				<Heart name={props.favorite} />
			</div>
		</div>
	);
}
Card.propTypes = {
	children: PropTypes.array,
	favorite: PropTypes.string
};
export default Card;
