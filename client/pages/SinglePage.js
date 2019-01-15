import React, { Component } from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";

class SinglePage extends Component {
    state = {
        inputName: '',
        inputMail: '',
    }

    handleClick = e => {
        peopleDB.remove(e);
        window.location.replace('/');
    }

    // nameInputChange = e => {
    //     console.log(e.target)
    //     this.setState({
    //         nameInputValue: e.target.getAttribute('value'),
    //     })
    // }

    // mailInputChange = () => {
    //     console.log('oui')
    // }

    render() {
        const user = this.props.tasks.filter(task => task._id === this.props.match.params.id)[0];
        const displayed = user ? <p key={user._id}>Name: { user.name }, mail: { user.mail } <button onClick={() => this.handleClick(user._id)}>REMOVE</button></p> : <span>LOADING</span>
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