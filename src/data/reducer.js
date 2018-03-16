import { Map, List } from "immutable";

const createComment = (email, comment) => {
    return Map({
        email: email,
        comment: comment,
    })
}

// use the createArticle function
const addArticle = (state, {article}) => state.update("articles", articles => articles.push(article));

const delArticle = (state, {id}) => state.update("articles", articles => articles.filter( article => article.get("id") !== id));

const editArticle = (state, {title, article, tags, id}) => state.update("articles", articles => articles.map( a => {
        if (a.get("id") === id){
            return a.set("title", title).set("article", article).set("tags", List(tags));
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

const setArticles = (state, { articles }) => state.set("articles", articles);


//check id matches
//push comment to comments


const reducer = (state, action) => {
    switch (action.type) {
    	case "addArticle": return addArticle(state, action);
        case "delArticle": return delArticle(state, action);
        case "editArticle": return editArticle(state, action);
        case "addComment": return addComment(state, action);
        case "setArticles": return setArticles(state, action);
        default: return state;
    }
}


export default reducer