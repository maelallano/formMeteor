import React from 'react';

const Form = () => (
    <div name="form">
        <label className="form_label_name" htmlFor="name">Name</label><input name="name" id="name" type="text" />
        <label className="form_label_name" htmlFor="mail">Mail</label><input name="mail" id="mail" type="text" />
        <button id="addGuyBtn">Just do it !</button>
    </div>
)

export default Form;