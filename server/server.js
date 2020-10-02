const path = require('path');
const express = require('express');
const Sharp = require('sharp');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

const databaseConfig = require('./utils/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());

databaseConfig();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/api/v1/products', (req, res) => {
    db.Product
        .find({})
        .then(response => res.json(response))
        .catch(err => console.error(err))
});

app.get('/api/v1/products/unique/settings', (req, res) => {
    db.Product.aggregate(
        [{
            $group:
            {
                _id: 0,
                brand: { $addToSet: '$brand' },
                type: { $addToSet: '$type' },
                price: { $addToSet: '$price' }
            }
        }]
    )
        .then(response => res.json(response[0]))
        .catch(err => console.error(err))
})

app.get('/api/v1/products/type/:id', (req, res) => {
    console.log('select type of vape')
});

app.get('/api/v1/products/brand/:id', (req, res) => {
    console.log('select type of brand after type')
});

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});

process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log("Mongoose disconnected");
        process.exit(0);
    })
})