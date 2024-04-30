const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Podcast = new Schema({
    _id: ObjectId,
    title: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Podcast', Podcast);
