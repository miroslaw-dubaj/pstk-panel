import { Express, RequestHandler } from "express";
import * as bodyparser from "body-parser";
import * as mongoose from 'mongoose';

const logRequest: RequestHandler = (req, res, next) => {
    console.log(req.method + " Request: " + req.url);
    next();
}

import { UserStatus, UserRank, } from '../src/app/models/User';

import {User} from './models/user'

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

    app.route("/api/users").get((req, res, next) => {
        User.find().then(docs => {
            res.status(200).json({
                message: 'Users fetched!',
                users: docs
            });
        })
    }
    ).post((req, res, next) => {
        const user = new User({
            userNumber: req.body.userNumber ? req.body.userNumber : 0,
            firstName: req.body.firstName ? req.body.firstName : 'null',
            lastName: req.body.lastName ? req.body.lastName : 'null',
            status: req.body.status ? req.body.status : 'null',
            email: req.body.email ? req.body.email : 'null',
            dateOfAcceptance: req.body.dateOfAcceptance ? req.body.dateOfAcceptance : new Date,
            dateOfFirstPayment: req.body.dateOfFirstPayment ? req.body.dateOfFirstPayment : new Date,
            dateOfLeave: req.body.dateOfLeave ? req.body.dateOfLeave : new Date,
            rank: req.body.rank ? req.body.rank : 'null',
            founder: req.body.founder ? req.body.founder : false,
            certificateIssued: req.body.certificateIssued ? req.body.certificateIssued : false,
            phone: req.body.phone ? req.body.phone : 0,
            imgUrl: req.body.imgUrl ? req.body.imgUrl : 'null',
            pidNo: req.body.pidNo ? req.body.pidNo : 'null',
            pidIssuedBy: req.body.pidIssuedBy ? req.body.pidIssuedBy : 'null',
            pesel: req.body.pesel ? req.body.pesel : 0,
            dob: req.body.dob ? req.body.dob : new Date,
            pob: req.body.pob ? req.body.pob : 'null',
            street: req.body.address.street ? req.body.address.street : 'null',
            city: req.body.address.city ? req.body.address.city : 'null',
            postal: req.body.address.postal ? req.body.address.postal : 'null',
            state: req.body.address.state ? req.body.address.state : 'null',
            occupation: req.body.occupation ? req.body.occupation : 'null',
            shootingPermitions:  req.body.shootingPermitions ? req.body.shootingPermitions : ['']
        })
        user.save();
        res.status(201).json({
            message: 'Post added successfully'
        })
    });
}
