const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: String,
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    tags: {
        type: [String],
        default: []
    },
    spiceLevel: {
        type: String,
        enum: ["mild", "medium", "hot", "extra hot"],
        default: "medium",
    },
    preparationTime: {
        type: Number,
        required: true
    },
    isVegetarian: {
        type: Boolean,
        default: false,
        required: true
    },
    rating: {
        type: Number,
        min: 1.0,
        max: 5.0,
        default: 4
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);