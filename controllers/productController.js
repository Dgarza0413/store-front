const db = require("../models");

module.exports = {
    all: (req, res) => {
        db.Product
            .find({})
            .sort({ brand: -1, flavor: -1 })
            .then(response => res.status(200).json(response))
            .catch(err => res.status(422).json(err, "something went wrong with products"))
    },
    update: (req, res) => {
        db.Product
            .findOneAndUpdate({ uuid: req.params.id }, req.body)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(422).json(err, "something went wrong with posting"))
    },
    findById: (req, res) => {
        db.Product
            .findOne({ uuid: req.params.id })
            .then(response => res.status(200).json(response))
            .catch(err => res.status(422).json(err, "something went wrong with id"))
    },
    findByProfile: (req, res) => {
        db.Product
            .find({ profile: { $all: [req.params.profile] } })
            .then(response => res.status(200).json(response))
            .catch(err => res.status(422).json(err, "something went wrong with profile"))
    },
    findUnique: (req, res) => {
        if (req.params.profile === '' || req.params.profile === 'all') {
            db.Product
                .distinct('flavorKeywords')
                .then(response => res.status(200).json(response))
                .catch(err => console.error(err, "something went wrong with the flavors route"))
        } else {
            db.Product
                .distinct('flavorKeywords', { "profile": req.params.profile })
                .then(response => res.status(200).json(response))
                .catch(err => console.error(err, "something went wrong with the flavors route"))
        }
    },
    removeById: (req, res) => {
        db.Product
            .findOneAndRemove({ uuid: req.params.id })
            .then(response => res.status(200).send(response, "delete request complete"))
            .catch(err => res.status(422).json(err, "something went wrong with delete"))
    },

    loadMore: async (req, res) => {
        const { page } = req.params || undefined
        db.Product
            .find({})
            .skip(parseInt(page))
            .limit(10)
            .then(response => res.status(200).json(response))
            .catch(err => res.status(422).json({ err, msg: "something went wrong with adding more" }))
    }
}