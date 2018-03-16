import { connect } from "react-redux";
import Article from "../components/Articles/Article";
import { delArticle } from "../data/actions/state";
import { getArticle } from "../data/actions/api";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    const articles = state.get("articles");
    const article = articles.find(a => a.get("id") === id);
    return {
        article: article,
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
	return {
		onClick: () => dispatch(delArticle(id)),
		onLoad: () => dispatch(getArticle(id)),

	}
}

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);