import { Express, RequestHandler } from "express";
import * as bodyparser from "body-parser";
import * as mongoose from 'mongoose';

import { router as usersRoutes } from './routes/users'

const logRequest: RequestHandler = (req, res, next) => {
    console.log(req.method + " Request: " + req.url);
    next();
}

mongoose.connect('mongodb://localhost:27017/pstk-panel');
mongoose.connection.once('open', () => {
    console.log('Connection to MongoDB has been successful')
}).on('error', (err) => {
    console.log('Connection error' + err);
})

export function setupRoutes(app: Express) {

    app.use(logRequest);
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use('/api/users', usersRoutes);
}
