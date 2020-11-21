import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

const container = document.getElementById("root");

container ? ReactDOM.render(<Login />, container) : false;
