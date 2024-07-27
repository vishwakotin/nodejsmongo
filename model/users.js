const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    email: {
      type: String,
      required: [true, "Mail ID is required"],
    },

    balance: {
      type: Number,
      required: [true, "Mail ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userschema);

module.exports = userModel;
