import React from "react";
import FourOhFour from "../FourOhFour";

import Form from "../Forms/Form";


const Edit = ({fields}) => !fields ? <FourOhFour /> : (
	
    <div>
        <h2>Edit Article</h2>

        <Form className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);



export default Edit;