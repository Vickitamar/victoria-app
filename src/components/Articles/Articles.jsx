import React, { Component } from "react";
import { Link } from "react-router-dom";


class Articles extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { titles } = this.props;

        return (
            <div>
                { /* check there are articles to show */ }
                { titles.count() ?
                    <ul className="list-group">
                        { /* map over each article and display a list item for each one */ }
                        { titles.map(title => (
                            <li className="list-group-item" key={ title.get("id") }>
                                { /* link to the article using its id */ }
                                <Link to={ "/articles/" + title.get("id") }>{ title.get("title") }</Link>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No articles found</p>
                }
            </div>
 
        ); 

    }
 }   

export default Articles;
