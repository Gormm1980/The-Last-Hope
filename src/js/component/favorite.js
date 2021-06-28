import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

function Favorites(props) {
	const { store, actions } = useContext(Context);
	console.log(props);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">
				Favorites
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{store.favorites.map((fav, index) => {
					return (
						<Dropdown.Item key={index} onClick={() => actions.deleteFavorites(fav)}>
							{fav}
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default Favorites;
