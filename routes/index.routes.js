const router = require("express").Router();
const authRoutes = require("./auth.routes");
const productRoutes = require('./products/product.routes');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);

module.exports = router;
