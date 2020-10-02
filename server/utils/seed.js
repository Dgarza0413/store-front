const items = require('./items.json');
const mongoose = require('mongoose');
const db = require('../models');
const shortid = require('shortid');

const initDb = () => {
    mongoose.connect((process.env.MONGO_URI || 'mongodb://localhost/store-front'),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

    items.forEach(e => {
        const product = new db.Product({
            uuid: shortid.generate(),
            brand: e.brand,
            type: e.type,
            flavor: e.flavor,
            price: e.price,
            discountPrice: e.discountPrice,
            discountPercent: e.discountPercent,
            size: e.size.split("_"),
            nicotineStrength: e.nicotineStrength.split("-"),
            viscosity: e.viscosity,
            description: e.description
        })
        product.save().then(() => console.log("item created"))
    })

}

initDb();