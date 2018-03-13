import React from "react";

import Form from "../Forms/Form";


const Edit = ({fields}) => (
    <div>
        <h2>Edit Article</h2>

        <Form className="panel-body" fields={ fields } button="Edit Article" />
    </div>
);



export default Edit;