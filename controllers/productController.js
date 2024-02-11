const Product=require('../models/productModel')
createProduct = async (req,res) => {
    try {
    const product=await Product.create(json.parse(data));
        res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ data }));
        } catch (error) {
            console.error("Error fetching users:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }

}
module.exports=createProduct;

getAllproducts = async (req, res) => {
    try {
    const product= await  Product.find();
    res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success:true,product }));
    } catch (error) {
        console.error("Error fetching users:", error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
}
 
module.exports=getAllproducts;