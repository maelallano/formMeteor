import React, { Component } from 'react';
import peopleDB from "../../../imports/db/peopleDB";

class Form extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.mailInput = React.createRef();
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.nameInput.current.value && this.mailInput.current.value) {            
            peopleDB.insert({
                name: this.nameInput.current.value,
                mail: this.mailInput.current.value,
            })
        }

        this.nameInput.current.value = "";
        this.mailInput.current.value = "";
    }

    render() {
        return (
            <div name="form" onClick={this.handleSubmit}>
                <label className="form_label_name" htmlFor="name">Name</label><input ref={this.nameInput} name="name" id="name" type="text" />
                <label className="form_label_name" htmlFor="mail">Mail</label><input ref={this.mailInput} name="mail" id="mail" type="text" />
                <button id="addGuyBtn">Just do it !</button>
            </div>
        )
    }
}

export default Form;