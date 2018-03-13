import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data


import store from "./data/store";
import initial from "./data/initial";



let articles = store.getState().get("articles");
// pass our articles through to App using props
ReactDOM.render(
    <Router>
        <App articles={ articles } />
    </Router>,
    document.getElementById("root"),
);
