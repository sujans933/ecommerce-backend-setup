const express = require("express");
const {
  getAllOrders,
  createOrder,
  deleteOrder,
} = require("../controllers/orderController");
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
router.route("/orders/:id").delete(deleteOrder);

module.exports = router;
