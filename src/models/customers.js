const mongoose = require('mongoose')

//Difining a schema
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})
//Creating a collection
const Model = mongoose.model('Customers', schema)

module.exports = Model