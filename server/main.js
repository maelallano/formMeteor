import { Meteor } from 'meteor/meteor';
import peopleDB from "../imports/db/peopleDB";

Meteor.startup(() => {
  // code to run on server at startup
  if (peopleDB.find().count() <= 0) {
    peopleDB.insert({
      name: "Maël",
      mail: "truc@gmail.com",
    });
    peopleDB.insert({
      name: "Alex",
      mail: "machin@hotmail.com",
    });
  }
});