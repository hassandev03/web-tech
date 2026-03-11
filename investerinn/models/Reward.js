const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    minPledge: { type: Number, required: true },  // minimum amount to claim this reward

    includes: [{ type: String }],                  // list of items included
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reward", rewardSchema);
