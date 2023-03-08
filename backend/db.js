/*const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();

    singleton = client.db(process.env.MONGO_DATABASE);
    console.log("conectado");
    return singleton;
}

const COLLECTION = "users";
 

async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}
 
module.exports = { findAll } */

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sgip');
 
const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }