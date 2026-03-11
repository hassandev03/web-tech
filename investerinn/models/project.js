const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    tagline: { type: String, default: "" },
    description: { type: String, default: "" },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
    },

    goalAmount: { type: Number, required: true },
    pledgedAmount: { type: Number, default: 0 },
    currency: { type: String, default: "USD" },
    backerCount: { type: Number, default: 0 },

    launchDate: { type: Date },
    deadline: { type: Date, required: true },

    coverImage: { type: String, default: "" },
    images: [{ type: String }],
    videoUrl: { type: String, default: "" },

    location: {
      city: String,
      country: String,
    },

    status: {
      type: String,
      enum: ["draft", "pending", "active", "funded", "failed", "cancelled", "flagged"],
      default: "draft",
    },
    isFeatured: { type: Boolean, default: false },

    tags: [{ type: String }],
  },
);

module.exports = mongoose.model("Project", projectSchema);
