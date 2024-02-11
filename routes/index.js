const Product = require('../models/productModel');
const response=require('../utils/response');
const productController=require('../controllers/productController')

const routes={
    "/":{
        GET:(_req,res)=>{
        response(res,{data:{message:"running node js api"}})     
        }
    }, 
    "/users":{
        GET:(req,res)=>{
            response(res,{data:{message:"hi i am user"}})  
        },
    // "/users/products": {
    //         GET:(req,res)=>{
    //             productController.getAllProducts
    //         response(res,{data:{message:"running node js api"},})  
    //         },
    //         POST: productController.createProduct,
            

    //     }
    }
}
module.exports=routes;