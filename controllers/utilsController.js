const db = require("../models");

module.exports = {
    settings: async (req, res) => {
        console.log(req.params)
        if (req.params.profile) {
            try {
                const typesUnique = await db.Product.distinct('type');
                const flavorsUnique = await db.Product.distinct('flavorKeywords', { "profile": req.params.profile });
                const profilesUnique = await db.Product.distinct('profile');
                await res.json({
                    type: typesUnique,
                    flavors: flavorsUnique,
                    profiles: profilesUnique
                })
            } catch (error) {
                res.status(422).json({ ...error, msg: 'something went wrong with settings' })
            }
        } else {
            console.log('non all fired')
            try {
                const typesUnique = await db.Product.distinct('type');
                const flavorsUnique = await db.Product.distinct('flavorKeywords');
                const profilesUnique = await db.Product.distinct('profile');
                await res.json({
                    type: typesUnique,
                    flavors: flavorsUnique,
                    profiles: profilesUnique
                })
            } catch (error) {
                res.status(422).json({ ...error, msg: 'something went wrong with settings and profile' })
            }
        }
    }
}
