const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

// // Create Order
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

// Create Order -- by Customer
// exports.createOrder = async (req, res, next) => {
//   try {
//     const order = await Order.create(req.body);

//     res.status(201).json({
//       success: true,
//       order,
//     });
//   } catch (error) {
//     if (
//       error.code === 11000 &&
//       error.keyPattern &&
//       error.keyPattern.customerEmail === 1
//     ) {
//       // Duplicate key error for customerEmail
//       return res
//         .status(400)
//         .json({ success: false, error: "Duplicate customer email" });
//     } else {
//       // Other MongoDB errors
//       return res
//         .status(500)
//         .json({ success: false, error: "Internal server error" });
//     }
//   }
// };

// Get all Orders --by Admin
exports.getAllOrders = catchAsyncErrors(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json({
    success: true,
    orders,
  });
});
