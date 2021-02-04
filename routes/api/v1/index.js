const router = require("express").Router();
const { Product, Table, Utility } = require('../../../controllers');

router.route("/products")
    .get(Product.all);

router.route("/products/:id")
    .get(Product.findById)
    .put(Product.update)
    .delete(Product.removeById);

router.route('/products/page/:page')
    .get(Product.loadMore);

router.route("/products/unique/settings").get(Utility.settings)
router.route("/products/unique/settings/:profile").get(Utility.settings)

router.route('/profile/:profile').get(Product.findByProfile)
router.route("/profile/:profile/unique").get(Product.findUnique)

router.route("/table").get(Table.nextPage)
router.route("/table/length").get(Table.count)
router.route("/table/page/:pageNumber").get(Table.nextPage)



module.exports = router;