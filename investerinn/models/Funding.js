const mongoose = require("mongoose");

const fundingSchema = new mongoose.Schema(
  {
    backer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    reward: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reward",
      default: null,   // null = no reward (just donating)
    },

    amount: { type: Number, required: true },
    currency: { type: String, default: "USD" },

    status: {
      type: String,
      enum: ["pending", "charged", "failed"],
      default: "pending",
    },

    paymentRef: { type: String, default: "" },
    isAnonymous: { type: Boolean, default: false },
  },
);

module.exports = mongoose.model("Funding", fundingSchema);
