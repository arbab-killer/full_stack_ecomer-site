import express from 'express';
import { allproducts, createproduct, singleproduct } from '../controlers/product.controlar.js';
import { isAuth } from '../middlewears/authmiddlewear.js';
const router = express.Router();
const  productsroute = router.get('/allproducts', allproducts)
const  createproductroute = router.post('/createnewproducts', createproduct)
const  getsingleproductroute = router.get('/product/:_id', singleproduct)
export {
    productsroute,
    createproductroute,
    getsingleproductroute
}