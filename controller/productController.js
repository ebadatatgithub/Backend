import Product from '../model/productModel.js'

export const getProduct =async (req,res)=>{
    const data = await Product.find();
    res.json(data)

}

export const addProduct = async (req,res)=>{
    try{
        const item = req.body
        console.log(req.body)
        const product=new Product(item)
        await product.save();
    }catch(e){

    }
  
}