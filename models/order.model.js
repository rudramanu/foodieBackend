const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: String,
  restaurantId: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
  status: {
    type: String,
    enum: ["placed", "preparing", "on the way", "delivered"],
    default: "placed",
  },
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
