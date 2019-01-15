import React from 'react';
import peopleDB from '../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from "react-router-dom";
import Form from '../components/Form/Form';

const HomePage = ({ tasks }) => (
    <div>
        <h1>WELCOME TO THE HOMEPAGE GUYS</h1>
        <Form />
        <ul>
            {tasks.map(p => (
                <li key={p._id}>Name: { p.name }, mail: { p.mail } <Link to={`/single/${p._id}`}>Click here please</Link></li>
            ))}
        </ul>
    </div>
)

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
})(HomePage);