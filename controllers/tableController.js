const db = require("../models");

module.exports = {
    count: (req, res) => {
        db.Product
            .count()
            .then(response => res.json(response))
            .catch(err => res.status(422).json({ err, msg: "something went wrong with count" }));
    },
    nextPage: (req, res) => {
        const { page } = req.params || undefined
        const skip = page * 10
        db.Product
            .find()
            .skip(skip)
            .limit(10)
            .then(response => res.json(response))
            .catch(err => res.status(422).json({ err, msg: "something went wrong with next page" }))
    }
}