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

const createComment = (email, comment) => {
    return Map({
        email: email,
        comment: comment,
    })
}

// use the createArticle function
const addArticle = (state, action) => state.update("articles", articles => articles.push(createArticle(action)));

const delArticle = (state, {id}) => state.update("articles", articles => articles.filter( article => article.get("id") !== id));

const editArticle = (state, {title, article, id}) => state.update("articles", articles => articles.map( a => {
        if (a.get("id") === id){
            return a.set("title", title).set("article", article);
        }
        return a;
    }
));

const addComment = (state, {email, comment, id}) => state.update("articles", articles => articles.map(
    a => {
        if (a.get("id") === id){
            return a.update("comments", comments => comments.push(createComment(email, comment)))
        }
        return a;
    }
))

//check id matches
//push comment to comments


const reducer = (state, action) => {
    switch (action.type) {
    	case "addArticle": return addArticle(state, action);
        case "delArticle": return delArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        default: return state;
    }
}


export default reducer