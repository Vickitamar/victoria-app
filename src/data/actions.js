export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};

export const delArticle = ( id ) => {
	return {
		type: "delArticle",
		id: id,
	};
};

export const editArticle = ({ title, article }, id) => {
    return {
        type: "editArticle",
        title: title,
        article: article,
        id: id,
    };
};