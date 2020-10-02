const mongoose = require("mongoose");

const databaseConfig = function () {
    const mongooseURI = process.env.MONGO_URI || 'mongodb://localhost/store-front';

    mongoose.connect(mongooseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })

    mongoose.connection.on('error', console.error.bind(console, "connection error:"));
    mongoose.connection.once('open', function () {
        console.log('connection successful')
    })
}

module.exports = databaseConfig
