import React from 'react';
import peopleDB from '../../../imports/db/peopleDB';
import { withTracker } from 'meteor/react-meteor-data';

const Hello = ({ tasks }) => (
    <div name="hello">
        <ul>
            {tasks.map(p => (
                <li key={p._id}>Name: { p.name }, mail: { p.mail }</li>
            ))}
        </ul>
    </div>
)

export default withTracker(() => {
    return {
      tasks: peopleDB.find({}).fetch(),
    };
  })(Hello);