import React, { Component } from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";
import { getCookie } from '../helpers/utils.js';

class SinglePage extends Component {
    state = {
        inputName: '',
        inputMail: '',
        isEdit: false,
    }

    componentDidMount() {
        if (!getCookie('login')) {
           window.location.replace(`/login`);
        }
    }

    handleClick = e => {
        peopleDB.remove(e);
        window.location.replace('/');
    }

    editValues = e => {
        if (this.state.isEdit) {
            peopleDB.update(e, {
                $set: {
                        name: this.state.inputName,
                        mail: this.state.inputMail
                    }
            })
        }
        this.setState({
            isEdit: !this.state.isEdit,
        })
    }

    nameInputChange = e => {
        this.setState({
            inputName: e.target.value,
        })
    }

    mailInputChange = e => {
        this.setState({
            inputMail: e.target.value,
        })
    }

    render() {
        const user = this.props.tasks.filter(task => task._id === this.props.match.params.id)[0];
        const displayed = user ? 
        <p key={user._id}>
            Name: { this.state.isEdit ? <input onChange={this.nameInputChange} value={this.state.inputName}/> : this.state.inputName ? this.state.inputName : user.name }, 
            Mail: { this.state.isEdit ? <input onChange={this.mailInputChange} value={this.state.inputMail}/> : this.state.inputMail ? this.state.inputMail : user.mail }, 
            <button onClick={() => this.editValues(user._id)}>EDIT</button> 
            <button onClick={() => this.handleClick(user._id)}>REMOVE</button>
        </p> : <span>LOADING</span>

        return (
            <div name="hello">
                <Link to='/'>Back home</Link>
                {displayed}
            </div>
        )
    }
}

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
})(SinglePage);