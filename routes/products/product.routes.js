const router = require("express").Router();
const Product = require('../../models/Product.model');

router.post("/", (req, res) => {
    Product.create(req.body).then((newlyCreatedProduct) => {
        res.json({success: true, product: newlyCreatedProduct});
    }).catch(err => res.json({success: false, error: err}))
});

router.get("/", (req, res) => {
    Product.find().then((allProducts) => {
        res.json({success: true, products: allProducts});
    }).catch(err => res.json({success: false, error: err}))
});

router.get("/:productId", (req, res) => {
    Product.findById(req.params.productId).then((foundItem) => {
        res.json({success: true, product: foundItem});
    }).catch(err => res.json({success: false, error: err}))
});

router.put("/", (req, res) => {
    Product.findByIdAndUpdate(req.body.productId, req.body, {new: true}).then((updatedProduct) => {
        res.json({success: true, product: updatedProduct});
    }).catch(err => res.json({success: false, error: err}))
});

router.delete("/:productId", (req, res) => {
    Product.findByIdAndRemove(req.params.productId).then(() => {
        res.json({success: true, product: false, message: 'You Have Successfully Removed a product!'});
    }).catch(err => res.json({success: false, error: err}))
});

module.exports = router;