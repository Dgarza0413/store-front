const axios = require('axios');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const app = express();

const PORT = 3001 || process.env.PORT;

console.log(PORT)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/api/products', (req, res) => {
    axios.get('https://9427cddd994ffdf69b060ed8a535e688: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@3-ssentials.myshopify.com/admin/api/2020-07/products.json')
        .then(response => res.json(response.data))
        .catch(err => console.log(err))
})

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});
