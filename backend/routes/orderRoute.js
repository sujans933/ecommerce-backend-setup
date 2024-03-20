const express = require("express");
const { getAllOrders, createOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/order").post(createOrder);
router.route("/orders").get(getAllOrders);

module.exports = router;
