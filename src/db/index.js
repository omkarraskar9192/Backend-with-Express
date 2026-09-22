import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import 'dotenv/config';

const ConnetDB = async ()=>{
    try {
        const ConnectionInstanceDB = await (mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`));
        // console.log(process.env.MONGODB_URI)
        const jsonFile = await JSON(ConnectionInstanceDB)
        console.log(`/n MONGODB IS HOSTED ON : ${Object.keys(ConnectionInstanceDB)}`)
        console.log(ConnectionInstanceDB)

        
        
    } catch (error) {
        console.error("DB CONNECTION FAILS :" ,error)
        process.exit(1)
        
    }
}

export default ConnetDB