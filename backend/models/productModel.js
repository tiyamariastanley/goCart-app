import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {type: String ,required: true, unique: true},
  category: {type: String, require: true},
  brand: {type: String, require: true},
  img: {type: String, require: true},
  rating: {type: Number, require: true},
  numReviews: {type: Number, require: true},
  des: {type: String, require: true},
  price: {type: Number, require: true},
  countInStock: {type: Number, require: true},
},
{timestamps : true}
);

const Product = mongoose.model('Product', productSchema);
export default Product;
