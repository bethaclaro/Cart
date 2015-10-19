/**
 * Created by Beth Aclaro on 10/19/15.
 */


var mongoose = require('mongoose');

var bookStoreSchema = new mongoose.Schema({
    bookID: Number,
    title: String,
    author: String,
    price: Number
});

var cartSchema = new mongoose.Schema({
    itemID: [bookStoreSchema.bookID],
    price: [bookStoreSchema.price]
});

var Books = mongoose.model("Books", bookStoreSchema);
var BookCart = mongoose.model("BookCart", cartSchema);

mongoose.connect("localhost");