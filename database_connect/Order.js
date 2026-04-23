const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
            },
            priceAtPurchase: {
                type: Number,
                required: true,
            }
        }
        ]
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "refunded", "delivered"],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);