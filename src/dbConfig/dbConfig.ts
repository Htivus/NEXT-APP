
import mongoose from "mongoose";


export async function connect(){
    try {
        const key=process.env.MONGO_URI;

        mongoose.connect(`${key}`!);
        const connection=mongoose.connection;

        connection.on('error',(error)=>{
            console.log("mongo db connection error"+error);
            process.exit();
        })

        connection.on('connected',()=>{
            console.log("DB connection success!")
        })
        
    } catch (error) {
        console.log('something went wrong',error)
    }
}