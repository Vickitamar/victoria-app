import { Map, List } from "immutable";

let lastID = 2;

// create a function that returns a new article Map
const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;

    return Map({
        id: lastID,
        title: title,
        article: article,
        comments: List(),
        tags: List(),
    });
};

// use the createArticle function
const addArticle = (state, data) => state.update("articles", articles => articles.push(createArticle(data)));

const delArticle = (state, {id}) => state.update("articles", articles => articles.filter( article => article.get("id") !== id));


const reducer = (state, action) => {
    switch (action.type) {
    	case "addArticle": return addArticle(state, action);
        case "delArticle": return delArticle(state, action);
        default: return state;
    }
}


export default reducer