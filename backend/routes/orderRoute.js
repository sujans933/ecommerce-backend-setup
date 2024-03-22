const express = require("express");
const { getAllOrders, createOrder } = require("../controllers/orderController");
const upload = require("../middleware/uploader.middleware");

const router = express.Router();

router.route("/order").post(
  upload.fields([
    { name: "cardLogo", maxCount: 1 },
    { name: "paymentReceipt", maxCount: 1 },
  ]),
  createOrder
);
router.route("/orders").get(getAllOrders);

module.exports = router;
