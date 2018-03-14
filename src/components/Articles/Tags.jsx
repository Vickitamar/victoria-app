import React from "react";
import { Link } from "react-router-dom";

// show each tag - tags passed in by parent
const Tags = ({ tags }) => (
    <div>
        { tags.map((tag, i) => (
            <Link to={"/"+tag} key={ i }><span className="label label-primary" >{ tag }</span></Link>
        ))}
    </div>
);

export default Tags;
