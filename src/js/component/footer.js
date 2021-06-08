import React, { useContext } from "react";

import { Context } from "../store/appContext";

function Footer(props) {
	const { store, actions } = useContext(Context);

	return (
		<footer className="footer">
			<div className="container mt-5">
				<p>&copy; 2020. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
}

export default Footer;
