import dotenv from 'dotenv';

dotenv.config()

interface OptionalConfigs {
    PORT:number,
    NODE_ENV:string,
}

interface RequiredConfigs {
    [key: string]: any;
}

const optionalConfigs:OptionalConfigs = {
    PORT:process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    NODE_ENV:process.env.NODE_ENV || 'dev',
}

const requiredConfigs:RequiredConfigs = {
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || "mongodb+srv://vvu9xp:QuZyFwqHTt65nJYc@cluster0.9xlh7vv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ,
}

for (const key in requiredConfigs){
    if (requiredConfigs.hasOwnProperty(key)){
        if(requiredConfigs[key] === null){
            throw new Error(`Missing value for environment variable ${key}`)
        }
    }
}

const config: RequiredConfigs & OptionalConfigs = {
    ...requiredConfigs,
    ...optionalConfigs,
};

export default config;