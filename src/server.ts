import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/config';
//import morgan from './utils/morgan';
import rateLimit from './utils/rateLimit';
//import createLogger from './utils/logger';
import unknownErrorMiddleware from './middlewares/error/unknownError.middleware';
import v1Router from './routes/book.router';
import connectToDB from './utils/db';
import pathNotFoundMiddleware from './middlewares/error/pathNotFoundError.middleware';
import validationErrorMiddleware from './middlewares/error/validationError.middleware';

const app = express();
app.use(helmet());
app.use(rateLimit);
app.use(cors());
app.use(express.json());
//app.use(morgan);

app.use('/v1', v1Router);

app.use(pathNotFoundMiddleware);
app.use(validationErrorMiddleware);
app.use(unknownErrorMiddleware);

//const logger = createLogger();

connectToDB().then(() => {
    app.listen(config.PORT, () => {
        console.log(`Server listening on port ${config.PORT}`);
    });
});
