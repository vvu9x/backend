import mongoose,{Connection} from "mongoose";
import config from "../config/config";


const connectToDB = async ()=>{
    const db:Connection = mongoose.connection;
    db.on('error',(error:any)=>{
        console.log('error')
        process.exit(1);
    })

    db.on('connected',()=>{
        console.log('connect')
    })

    db.on('disconnected',()=>{
        console.log('disconnect')
    })

    return mongoose.connect(config.DB_CONNECTION_STRING);
}

export default connectToDB;