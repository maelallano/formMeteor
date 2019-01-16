import React, { Component } from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";

class LoginPage extends Component {
    constructor() {
        super();
        this.nameInput = React.createRef();
        this.mailInput = React.createRef();
        this.passAdminInput = React.createRef();

        this.state = {
            isFormSignIn: true,
            isChecked: false,
        }
    }

    handleSignIn = (name, mail) => {
        const isInDb = this.props.tasks.filter(user => user.mail === mail);

        if (!isInDb[0]) {
            return null;
        }

        if (isInDb[0].name === name) {
            window.location.replace(`/single/${isInDb[0]._id}`);
            return null;
        }

        alert('nope');
        return null;

    }

    handleSignUp = (name, mail, passAdmin) => {
        const isInDb = this.props.tasks.filter(user => user.mail === mail);

        if (isInDb[0]) {
            alert(`${isInDb[0].mail}: account already exists`);
            return null;
        }

        if (this.state.isChecked) {
            if (passAdmin === 'shlagLife') {
                peopleDB.insert({
                    name: this.nameInput.current.value,
                    mail: this.mailInput.current.value,
                    role: 'ADMIN',
                }, (error, response) => {
                    window.location.replace(`/single/${response}`);
                })
            }
            return null;
        }

        peopleDB.insert({
            name: this.nameInput.current.value,
            mail: this.mailInput.current.value,
            role: 'USER',
        }, (error, response) => {
            window.location.replace(`/single/${response}`);
        })
    }

    handleSubmit = () => {
        const name = this.nameInput.current.value;
        const mail = this.mailInput.current.value;
        const passAdmin = this.state.isChecked ? this.passAdminInput.current.value : null;

        if (!name || !mail || (!passAdmin && this.state.isChecked)) {
            return null;
        }

        if (this.state.isFormSignIn) {
            this.handleSignIn(name, mail);
        } else {
            this.handleSignUp(name, mail, passAdmin);
        }
    }

    handleChecked = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        })
    }

    toggleIsFormSignIn = () => {
        this.setState({
            isFormSignIn: !this.state.isFormSignIn,
        })
    }

    render() {
        const { isFormSignIn, isChecked } = this.state;
        return (
            <div>
                <h1>{isFormSignIn ? 'SIGN IN' : 'SIGN UP'}</h1>
                <div name="form">
                    <label className="form_label_name" htmlFor="name">Name</label><input ref={this.nameInput} name="name" id="name" type="text" />
                    <label className="form_label_name" htmlFor="mail">Mail</label><input ref={this.mailInput} name="mail" id="mail" type="text" />
                    {!isFormSignIn ? <label htmlFor="checkboxAdmin">Are you an admin ?<input onChange={this.handleChecked} name="checkboxAdmin" type="checkbox" checked={isChecked}/></label> : null}
                    {!isFormSignIn && isChecked ? <label><input ref={this.passAdminInput} placeholder="ADMIN PASSWORD"/></label> : null}
                    <button onClick={this.handleSubmit} id="addGuyBtn">Just do it !</button>
                </div>
                <a onClick={this.toggleIsFormSignIn}>{isFormSignIn ? `No account yet ? Let's sign up !` : `Already have an account ? Let's sign in !`}</a>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
})(LoginPage);