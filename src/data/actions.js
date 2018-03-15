export const addArticle = ({ title, article, tags }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
        tags: tags.split(", "),
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