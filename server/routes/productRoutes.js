import express from "express";
import Product from "../models/Product.js";

const productRoutes = express.Router();


const getProducts = async (request, response) => {
    const products = await Product.find({});
    response.json(products)
};

productRoutes.route('/').get(getProducts);

export default productRoutes;

