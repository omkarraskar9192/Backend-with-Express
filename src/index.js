import dotenv from 'dotenv'
import express from 'express';
import ConnetDB from './db/index.js'
dotenv.config();
const app = express();


ConnetDB()
.then(  
    console.log("Connetion sucessful"),
    process.exit(0)
)
.catch(
    app.listen("error",(error)=>{
        console.log(`Error in DB Connection : ${error}` )
    }).
    process.exit(1)
)
app.use(cors())
app.use(express.json())











