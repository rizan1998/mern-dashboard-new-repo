import mongoose from "mongoose";

const ProdcutSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    catetegory: String,
    rating: Number,
    supply: Number,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProdcutSchema);
export default Product;
