import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name:String,
        price:Number,
        image:String
    }
)

const productModel = mongoose.model('product',productSchema)

export default productModel