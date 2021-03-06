const db = require('../models');
const mongoose = require("mongoose");


const updateDB = () => {
    mongoose.connect((process.env.MONGO_URI || 'mongodb://localhost/store-front'),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

    console.log('mongoose connected!!')
    //update many 
    db.Product.update(
        {},
        {
            $set: {
                profiles: '',
                types: ''
            }
        },
        {
            upsert: false,
            multi: true
        })
        .then((res) => console.log('update finished'))
        .catch(err => console.error(err))

    console.log("update complete")
}

updateDB();