const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
  },

  customerJob: {
    type: String,
    // required: [true, "Please enter your job"],
  },

  cardLogo: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],

  customerEmail: {
    type: String,
    unique: [true, "Please enter your new email"],
    required: [true, "Please enter your email Id"],
  },

  customerPhone: {
    type: Number,
    required: true,
    // require: [true, "Please enter your phone number"],
  },

  companyName: {
    type: String,
  },

  shippingAddress: {
    type: String,
    required: true,
  },

  paymentReceipt: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  cardQuantity: {
    type: Number,
    default: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
