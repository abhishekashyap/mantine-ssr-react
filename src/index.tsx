import * as React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import App from "./App";

ReactDOM.hydrate(<App />, document.getElementById("root"));
ReactDOM.hydrate(<About />, document.getElementById("about"));
