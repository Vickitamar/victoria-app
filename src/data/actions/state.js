export const addArticle = (article) => {
    return {
        type: "addArticle",
        article
    };
};

export const delArticle = ( id ) => {
	return {
		type: "delArticle",
		id: id,
	};
};

export const editArticle = ({ title, article, tags }, id) => {
    return {
        type: "editArticle",
        title: title,
        article: article,
        tags: tags.split(", "),
        id: id,
    };
};

export const addComment = ({ email, comment }, id) => {
    return {
        type: "addComment",
        email: email,
        comment: comment,
        id: id,
    };
};

export const setArticles = articles => {
    return {
        type: "setArticles",
        articles: articles,
    };
};