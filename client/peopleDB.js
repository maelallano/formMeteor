import { Template } from 'meteor/templating';
import peopleDB from "../imports/db/peopleDB";

// Template.hello.helpers({
//     playlist: function() {
//         return playlist.find();
//     },
// });

// Template.hello.helpers({
//     playlist() {
//         return playlist.find();
//     },
// });

Template.hello.helpers({
    peopleDB: () => peopleDB.find(),
});