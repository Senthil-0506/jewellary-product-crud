import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  manufactureDate: { type: Date, default: Date.now },
}, { timestamps: true });

// ✅ ES module export
const Product = mongoose.model("Product", productSchema);
export default Product;
