const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid')

const productSchema = new Schema({
    uuid: {
        type: String,
        unique: true,
        default: shortid.generate()
    },
    brand: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    flavor: {
        type: String,
        default: ''
    },
    profile: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    discountPrice: {
        type: String,
        default: ''
    },
    discountPercent: {
        type: String,
        default: ''
    },
    size: [{
        type: String,
        default: ''
    }],
    nicotineStrength: [{
        type: String,
        default: ''
    }],
    viscosity: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    pictureURI: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model("Product", productSchema);