import express, { json } from "express";
import data from "../data.js";
import User from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async (req, res) =>{
    console.log("inside products");
    //await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));

productRouter.get('/', expressAsyncHandler(async (req, res) =>{
    const products = await Product.find({});
    //console.log(products);
    res.send(products);
}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) =>{
    const product = await Product.findById(req.params.id);
    if(Product)
        console.log(product);
    res.send(product);
}));

export default productRouter;