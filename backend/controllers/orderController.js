const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary");

// // Create Order --by Customer
// exports.createOrder = catchAsyncErrors(async (req, res, next) => {
//   const order = await Order.create(req.body);

//   if (!order) {
//     return next(new ErrorHandler("Order not completed", 404));
//   }

//   res.status(200).json({
//     success: true,
//     order,
//   });
// });
exports.createOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    customerName,
    customerJob,
    customerEmail,
    customerPhone,
    companyName,
    shippingAddress,
  } = req.body;

  // Create the order with the updated request body
  const order = await Order.create({
    customerName,
    customerJob,
    cardLogo: {
      public_id: req.files.cardLogo[0].filename,
      url: req.files.cardLogo[0].path,
    },
    customerEmail,
    customerPhone,
    companyName,
    shippingAddress,
    paymentReceipt: {
      public_id: req.files.paymentReceipt[0].filename,
      url: req.files.paymentReceipt[0].path,
    },
  });
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

// Delete order by ID --by Admin

exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }
  await order.deleteOne();

  res.status(200).json({
    success: true,
    message: "Order deleteed successfully",
  });
});
