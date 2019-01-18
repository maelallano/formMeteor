import React, { Component } from 'react';
import peopleDB from '../../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';

class Hello extends Component {
    state = {
        inputName: '',
        inputMail: '',
    }

    handleClick = e => {
        peopleDB.remove(e)
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
        return (
            <div name="hello">
                <ul>
                    {this.props.tasks.map(p => (
                        <li key={p._id}>Name: <input onChange={this.nameInputChange} value={ p.name }/>, mail: <input onChange={this.mailInputChange} value={ p.mail }/> <button key={p._id} onClick={() => this.handleClick(p._id)}>X</button></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
})(Hello);