import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Forms from "./forms";
import SelectForm from "./selectForm";
import NameForm from "./nameForm";


ReactDOM.render(<Forms />, document.getElementById("root"));
ReactDOM.render(<SelectForm />, document.getElementById("root1"));
ReactDOM.render(<NameForm />, document.getElementById("root2"));
ReactDOM.render(<App />, document.getElementById("root3"));
