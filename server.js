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

app.get('/api/v1/products/table/length', (req, res) => {
    db.Product
        .count()
        .then(response => res.json(response))
        .catch(err => console.error(err))

})

app.get('/api/v1/products/table', (req, res) => {
    db.Product
        .find()
        // .skip(req.params)
        .limit(10)
        .then(response => res.json(response))
        .catch(err => console.error(err))
});

app.get('/api/v1/products/:page', (req, res) => {
    const { page } = req.params
    const skip = page * 10
    db.Product
        .find()
        .skip(skip)
        .limit(10)
        .then(response => res.json(response))
        .catch(err => console.error(err))
});


app.get('/api/v1/product/:id', (req, res) => {
    db.Product
        .findOne({ uuid: req.params.id })
        .then(response => res.json(response))
        .catch(err => console.error(err))
});


app.post('/api/v1/product/:id', (req, res) => {
    db.Product
        .findOneAndUpdate({ uuid: req.params.id }, req.body)
        .then(response => res.json(response))
        .catch(err => console.error(err))
})


app.get('/api/v1/products/unique/settings', (req, res) => {
    db.Product.aggregate(
        [{
            $group:
            {
                _id: 0,
                brand: { $addToSet: '$brand' },
                type: { $addToSet: '$type' },
                profile: { $addToSet: '$profile' }
            }
        }]
    )
        .then(response => res.json(response[0]))
        .catch(err => console.error(err))
})

app.post('/api/v1/products/search', (req, res) => {
    db.Product.aggregate([
        {
            $project:
            {
                brand: 1,
                description: 1,
                discountPercent: 1,
                discountPrice: 1,
                flavor: 1,
                flavorKeywords: 1,
                nicotineStrength: 1,
                pictureURI: 1,
                price: 1,
                profile: 1,
                profile: 1,
                size: 1,
                type: 1,
                uuid: 1,
                viscosity: 1,
                _id: 0,
                set: {
                    $and: [
                        { $eq: ["$brand", req.body.brand] },
                        { $eq: ["$type", req.body.type] },
                        { $eq: ["$profile", req.body.profile] }
                    ]
                },
            }
        },
        {
            $match: { "set": true }
        }

    ])
        .then(response => { return res.json(response) })
        .catch(err => console.error(err))
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