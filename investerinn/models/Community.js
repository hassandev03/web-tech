const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    body: { type: String, required: true },
  },
);

const updateSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
);

const faqSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
);

const Comment = mongoose.model("Comment", commentSchema);
const Update = mongoose.model("Update", updateSchema);
const FAQ = mongoose.model("FAQ", faqSchema);

module.exports = { Comment, Update, FAQ };
