import { Template } from "meteor/templating";
import peopleDB from "../imports/db/peopleDB";

Template.form.events({
    "click #addGuyBtn": (event, template) => {
        peopleDB.insert({
            name: template.find("#name").value,
            mail: template.find("#mail").value,
        })
    }
})