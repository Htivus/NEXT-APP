import { error } from "console";
import mongoose, { connection } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log("DB connection success!")
        })

        connection.on('error',(error)=>{
            console.log("mongo db connection error"+error);
            process.exit();
        })
    } catch (error) {
        console.log('something went wrong',error)
    }
}