import React from "react";
import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <div>
        { tags.map((tag, i) => (
            <Link to={"/"+tag} ><span className="label label-primary" key={ i }>{ tag }</span></Link>
        ))}
    </div>
);

export default Tags;
