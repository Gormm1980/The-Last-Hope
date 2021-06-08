import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

import Layout from "./layout.js";

const container = document.querySelector("#app");
const component = <Layout />;

ReactDOM.render(component, container);
