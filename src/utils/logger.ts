import winston,{Logger} from "winston";
import path from "path";

const createLogger = (filename:string) =>{
    const logger:Logger = winston.createLogger({
        level: 'info',
        defaultMeta: {
            file: filename ? path.basename(filename) : undefined,
        },
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(({ timestamp, file, level, message }) => {
                return `[${timestamp}] [${level}] ${file ? `[${file}]` : ''}: ${message}`;
            })
        ),
        transports: [new winston.transports.Console()],
    })
   // logger.stream = {
   //     write: (message:any) => {
   //         logger.info(message);
   //     },
   // };
}