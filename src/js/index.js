import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "custom";
import "./styles/index.scss";

import layout from "./layout.js";

const container = document.querySelector("#app");
const component = <layout />;

ReactDOM.render(component, container);
