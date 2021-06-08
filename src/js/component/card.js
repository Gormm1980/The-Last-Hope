import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Heart from "./Heart.js";
import Favorites from "./favorite.js";

function Card(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img className="card-img-top" alt="..." />
			<div className="card-body">
				<Link className="btn btn-outline-primary" id="button-info">
					Learn More!
				</Link>
				<Heart />
			</div>
		</div>
	);
}

export default Card;
