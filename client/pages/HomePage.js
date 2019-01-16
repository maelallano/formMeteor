import React, { Component } from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";
import Form from '../components/Form/Form';
import { getCookie } from '../helpers/utils.js';

class HomePage extends Component {
    componentDidMount() {
        if (!getCookie('login')) {
           window.location.replace(`/login`);
        }
    }

    render() {
        const { tasks } = this.props;
        return (
            <div>
                <h1>WELCOME TO THE HOMEPAGE GUYS</h1>
                <Form />
                <ul>
                    {tasks.map(p => (
                        <li key={p._id}>Name: { p.name }, mail: { p.mail }, role: { p.role } <Link to={`/single/${p._id}`}>Click here please</Link></li>
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
})(HomePage);