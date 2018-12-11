import { Meteor } from 'meteor/meteor';
import peopleDB from "../imports/db/peopleDB";

Meteor.startup(() => {
  // code to run on server at startup
  if (peopleDB.find().count() <= 0) {
    peopleDB.insert({
      name: "Despacito",
      mail: "Wesh",
    });
    peopleDB.insert({
      name: "Stairway to heaven",
      mail: "Pas Wesh",
    });
  }
});