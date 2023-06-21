
import costumerModel from "../model/signUp_model.js";
export const addSignup = async (req,res)=>{
    const {name,email,password}= req.body;
    const newCostumer = costumerModel({
    name: name,
    email:email,
    password:password
});

try {
    await newCostumer.save();
    console.log("data saved in the db") 
} catch (error) {
    console.log("data is not saved in the db");
}
}