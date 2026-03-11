const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, lowercase: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
);

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    icon: { type: String, default: "" },
    description: { type: String, default: "" },
  },
);

const learningPathSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    steps: [{ type: String }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
);

const Category = mongoose.model("Category", categorySchema);
const Subcategory = mongoose.model("Subcategory", subcategorySchema);
const LearningPath = mongoose.model("LearningPath", learningPathSchema);

module.exports = { Category, Subcategory, LearningPath };
