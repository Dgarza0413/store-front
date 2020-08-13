const axios = require('axios');
const path = require('path');
const express = require('express');
const Sharp = require('sharp');
const compression = require('compression');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use((req, res) => {
    // res.sendFile(path.join(__dirname, "client/build/index.html"));
    res.sendFile(path.join(__dirname, "client/public/index.html"));
})


app.get('/api/products', (req, res) => {
    const url = 'https://9427cddd994ffdf69b060ed8a535e688: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@3-ssentials.myshopify.com/admin/api/2020-07/products.json'
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(err => console.log(err))
})

// app.get('/api/pictures', async (req, res) => {
//     const data = await axios({
//         url: 'https://9427cddd994ffdf69b060ed8a535e688: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@3-ssentials.myshopify.com/admin/api/2020-07/products.json',
//         responseType: 'arraybuffer',
//         method: 'get'
//     })
//     const buffer = Buffer.from(data.data, 'binary')
//     let src = new Sharp(buffer);
//     try {
//         await src.jpeg();
//         await src.resize(null, 1920);
//         await src.resize(1080, null);
//         const metadata = await src.metadata();//this was where it failed, but now it prints an object of metadata
//         console.log(metadata);
//     } catch (error) {
//         console.error(error)
//     }
// })

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});
