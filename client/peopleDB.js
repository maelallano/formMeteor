import { Template } from 'meteor/templating';
import peopleDB from '../imports/db/peopleDB';

Template.hello.helpers({
    peopleDB: () => peopleDB.find(),
});