const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async ()=>{
    try {
      const conn = await mongoose.connect(process.env.mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      //   useFindAndModify: true,
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
    }
}
module.exports = connectToMongo;

