const express = require('express');
const app = express();
const compression = require('compression');
const cors = require('cors');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// const morgan = require("morgan");

const databaseConfig = require('./utils/db');

// app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(cors());

databaseConfig();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

app.use(routes)

// Start the API server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});