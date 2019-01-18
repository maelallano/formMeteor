import React, { Component } from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";
import { getCookie, deleteCookie } from '../helpers/utils.js';
import LogoutBtn from '../components/LogoutBtn/LogoutBtn.js';

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
        if (JSON.parse(getCookie('login')).role === 'USER') {
            deleteCookie('login');
            window.location.replace('/login');
            return;
        }
        this.props.history.push('/');
    }

    editValues = (e, DBmail, DBname) => {
        const mail = this.state.name ? this.state.name : DBmail;
        const name = this.state.name ? this.state.name : DBname;

        if (this.state.isEdit) {
            peopleDB.update(e, {
                $set: {
                        name: this.state.inputName ? this.state.inputName : name,
                        mail: this.state.inputMail ? this.state.inputMail : mail,
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
            Name: { this.state.isEdit ? <input onChange={this.nameInputChange} value={this.state.inputName ? this.state.inputName : user.name}/> : this.state.inputName ? this.state.inputName : user.name }, 
            Mail: { this.state.isEdit ? <input onChange={this.mailInputChange} value={this.state.inputMail ? this.state.inputMail : user.mail}/> : this.state.inputMail ? this.state.inputMail : user.mail }, 
            <button onClick={() => this.editValues(user._id)}>EDIT</button> 
            <button onClick={() => this.handleClick(user._id)}>REMOVE</button>
        </p> : <span>LOADING</span>
        const notes = user ? <div>Notes</div> : null;
        return (
            <div name="hello">
                {JSON.parse(getCookie('login')).role === "ADMIN" ? <Link to='/'>Back home</Link> : null }
                {displayed}
                {notes}
                {JSON.parse(getCookie('login')).role === "USER" ? <LogoutBtn /> : null}
            </div>
        )
    }
}

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
})(SinglePage);