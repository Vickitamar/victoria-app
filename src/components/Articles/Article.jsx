import React, {Component} from "react";

import FourOhFour from "../FourOhFour";

import Actions from "./Actions";
import Tags from "./Tags";
import Comments from "../../containers/Comments";


class Article extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const { article, onClick, id } = this.props;

        return (!article ? <FourOhFour /> : (
           
            <div>
               
                   
                    { /* the edit/delete buttons  */ }
                    <Actions article={ article } onClick= { onClick }  />

                    <h2>{ article.get("title") }</h2>

                    { /* allows us to set HTML inside an element */ }
                    <div dangerouslySetInnerHTML={{ __html: article.get("article") }} />

                    { /* use the Tags component to show the tags */ }
                    <Tags tags={ article.get("tags") } />

                    <hr />

                    { /* use the comments component */ }
                    <Comments comments={ article.get("comments") } id={ id } />
               
           
            </div>
         )  
            
        )
    
    }
}





export default Article;
