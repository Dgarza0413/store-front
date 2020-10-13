const db = require('../models');

//update many 
db.Product.updateMany(
    {},
    { $set: { profile: '' } },
    { multi: true }
)