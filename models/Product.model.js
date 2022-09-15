const { Schema, model } = require("mongoose");

const procductSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
        type: String,
    },
    price: Number,
    rating: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    discount: {
        type: Boolean
    },
    discountAmount: {
        discountType: {
            type: String,
            enum: ['Percent', 'Flat'],
        },
        amount: {
            type: Number,
        }
    }
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", procductSchema);

module.exports = Product;
