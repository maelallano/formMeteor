import peopleDB from '../../../imports/db/peopleDB';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

const users = withTracker(() => {
    let users = [];
    const userHandle = Meteor.subscribe('peopleDB');
    const loading = !userHandle.ready();
    const data = peopleDB.find({});
    const dataExists = !loading && data;
    console.debug(data);

    return '';
})(List);

class List extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         mail: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    // }
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
    render () {
        return (
            <ul>
                {this.users()}
            </ul>
        );
    }
}

export default List;