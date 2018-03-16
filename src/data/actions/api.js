// import our axios config file
import axios from "../../axios";
import { fromJS } from "immutable";

// import the setArticles action
import { setArticles } from "./state";
import { addArticle } from "./state";

export const getArticles = () => dispatch => {
    axios.get("/articles").then(response => {
        // wrap the response.data with fromJS to convert it into an Immutable List
        const articles = fromJS(response.data);

        // dispatch the setArticles action, passing along the articles List
        dispatch(setArticles(articles));
    });
};

export const postArticle = (data) => dispatch => {
	axios.post("/articles", {
			title: data.title,
			article: data.article,
			tags: data.tags.split(", "),
		}).then(response => {
			const article = fromJS(response.data);
			console.log(fromJS(response.data));

		//set up what we want to send to server in the same format as yesterday
		//then call dispatch to add article to state
			dispatch(addArticle(article));
	})
}