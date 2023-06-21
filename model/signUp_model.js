import mongoose from 'mongoose';

const personStructure= mongoose.Schema({
name:String,
email:String,
password:String
});


const costumerModel = mongoose.model('costumer',personStructure);

export default costumerModel;