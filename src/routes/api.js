const express = require('express');
const {CreateProduct,ReadProduct,UpdateProduct,DeleteProduct} = require('../controllers/ProductsController');
const router=express.Router();

//Api Routing end points

//C=Create

router.post("/CreateProduct",CreateProduct);

//R=Read

router.get("/ReadProduct",ReadProduct);

//U=Update
router.post("/UpdateProduct/:id",UpdateProduct);

//D=Delete

router.get("/DeleteProduct/:id",DeleteProduct);


module.exports =router;