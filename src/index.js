import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data


import store from "./data/store";
import { Provider } from "react-redux";




// pass our articles through to App using props

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
