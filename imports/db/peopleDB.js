import { Mongo } from "meteor/mongo";

const peopleDB = new Mongo.Collection("peopleDB");
export default peopleDB;