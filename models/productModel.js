const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true,"please enter product Name"],
        trim:true 
       },
       description:{
           type:String,
           required:[true,"please enter description"]
       },
       price:{
           type : Number ,
           required:[true,'Please provide the Price'],
           maxlength:[8,"please cannot exceed 8 character"]
       
       },
       images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required: true
        }
    }
],
     category: {
        id: Number,
        name: String,
        image: String,
        creationAt: Date,
        updatedAt: Date
    },
    

});

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
