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
    db.Product.updateMany(
        {},
        { $set: { profile: '' } },
        { multi: true }
    )

    console.log("update complete")
}

updateDB();