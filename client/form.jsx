import { Template } from "meteor/templating";
import peopleDB from "../imports/db/peopleDB";
import React, {Component} from 'react';


export default class Form extends Component {
    state = {
        name: '',
        mail: ''
    }
    addGuyBtn() {
        peopleDB.insert({
            name: template.find("#name").value,
            mail: template.find("#mail").value,
        })
    }
    handleChange = (name) => (event) => {
        console.debug(name);
        console.debug(event);
    }
    render () {
        return (
            <template>
                <label class="form_label_name" for="name">Name</label>
                <input onChange={handleChange('name')} name="name" id="name" type="text"></input>
                <label class="form_label_name" for="mail">Mail</label>
                <input onChange={handleChange('mail')} name="mail" id="mail" type="text"></input>
                <button onClick={this.addGuyBtn()}>Just do it !</button>
            </template>
        );
    }
}