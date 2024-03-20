const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

// // Create Order --by Customer
exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.create(req.body);

  if (!order) {
    return next(new ErrorHandler("Order not completed", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// Get all Orders --by Admin
exports.getAllOrders = catchAsyncErrors(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json({
    success: true,
    orders,
  });
});
