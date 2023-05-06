const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
const ReactFormDataSchema = new mongoose.Schema({
    _id: {type: ObjectId},
    title: {type: String},
    price: {type: Number},
    category: {type: String},
    image: {type: String}
} ,
{ collection: "fakestore_catalog" }
);
const Product = mongoose.model('Product', ReactFormDataSchema);
module.exports = Product;