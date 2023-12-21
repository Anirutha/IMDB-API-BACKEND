require("dotenv").config();
const express = require ('express');
const mongoose = require ('mongoose');
const routes=require('./routes');
const cors=require("cors");

const mongoString=`mongodb+srv://aniruthasivakumar03:Mahathi03@cluster0.i39hwwf.mongodb.net/?retryWrites=true&w=majority`

const app = express();

const allowedOrigins=["http://localhost:3000"];

app.use(
    cors({
        origin:(origin,callback)=>{
            if(!origin) return callback(null,true);
            if(allowedOrigins.indexOf(origin)===-1){
                const msg=
                "The CORS policy for this site does not allow access from the specified origin";
            }
            return callback(null,true);
        }
    })
)

app.use(express.json());

app.use('/api',routes)

mongoose.connect(mongoString);


const database=mongoose.connection;

database.on('error',(err)=> console.log(err));

database.on('connected', ()=>console.log('Database Connected'));

app.listen(4000,()=>{
    console.log(`Server started at localhost:4000`)
})