import React from "react";

import {
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Articles from "./containers/Articles";
import Article from "./containers/Article";
import Add from "./containers/Add";
import Edit from "./containers/Edit";
import Tagged from "./containers/Tagged";
// import Comments from "./containers/Comments";

const App = () => (
    <div>
        { /* header should show on all pages */ }
        <Header subtitle="Very insightful">My Blog</Header>

        { /* route switch, to handle 404s */ }
        <Switch>
            
             <Route exact path="/" component={ Articles } />
            { /* show the add form - has to come before :id so "add" doesn't get treated as an id  */ }
            <Route exact path="/articles/add" component={ Add } />

            { /* pass through the id to the container */ }
            <Route exact path="/articles/:id" render={ ({ match }) => (
                <Article id={ +match.params.id } />
            )} />
            
            <Route path="/articles/:id/edit" render={ ({ match }) => (
                <Edit id={ +match.params.id }/> 
            )} />

            <Route path="/:tag" render={ ({ match }) => (
                <Tagged tag={ match.params.tag }/> 
            )} />

            { /* 404 page */}
            <Route component={ FourOhFour } />
        </Switch>

    </div>
);

export default App;
