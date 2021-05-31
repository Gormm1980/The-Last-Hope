import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "./style.css";

import layout from "./layout.js";

const container = document.querySelector("#app");
const component = <layout />;

ReactDOM.render(component, container);
