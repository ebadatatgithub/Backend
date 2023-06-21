import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express' ;
import product from './routes/product.js'
import mongoose from 'mongoose';
 import signUp from './routes/signUp_router.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
const url="mongodb+srv://ekas:tjks1967@cluster0.0apstki.mongodb.net/?retryWrites=true&w=majority";
const connection=mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
connection.then(()=>{
    console.log("DB Connected.")
}).catch((e)=>{
    console.log("Error: ",e)

})


// const app = express();
// const url=
// mongoose.connect(url,{useUnifieldTopology :true , useNewUrlParser:true})
// .then(()=>{
//     console.log("connection successful")
// })
// .catch((error)=>{
//     console.log("error",error);
// });
app.listen(5000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended:true} ));

app.use('/product',product)
app.use('/signUp',signUp)



