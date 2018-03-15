import { connect } from "react-redux";
import Comments from "../components/Articles/Comments";
import { addComment} from "../data/actions";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onSubmit: data => dispatch(addComment(data, id)),
    };
        
    
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Comments);