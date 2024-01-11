const mongoose = require('mongoose');
const mongoURI = "YOUR MONGODB URI STRING";
const connectToMongo = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
    } catch (error) {
      // console.log(error);
      console.log("An Error Occured");
    }
  };
module.exports = connectToMongo;