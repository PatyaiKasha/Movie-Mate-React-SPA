import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";


const roots = document.querySelector("#root");

ReactDOM.render(<App />, roots);

registerServiceWorker();
