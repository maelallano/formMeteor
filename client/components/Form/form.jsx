import peopleDB from "../../../imports/db/peopleDB";
import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    addGuyBtn() {
        if (this.state.name === '') {
            console.error('no name given, user wasn\'t register');
        }
        if (this.state.mail === '') {
            console.error('no mail given, user wasn\'t register');
        }
        peopleDB.insert({
            name: this.state.name,
            mail: this.state.mail,
        });
    }
    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render () {
        return (
            <div>
                <label className="form_label_name" htmlFor="name">Name</label>
                <input onChange={this.handleChange} name="name" id="name" type="text" value={this.state.name}></input>
                <label className="form_label_name" htmlFor="mail">Mail</label>
                <input onChange={this.handleChange} name="mail" id="mail" type="text" value={this.state.mail}></input>
                <button onClick={this.addGuyBtn}>Just do it !</button>
            </div>
        );
    }
}

export default Form;