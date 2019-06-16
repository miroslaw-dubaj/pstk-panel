import { Express, RequestHandler } from "express";
import * as bodyparser from "body-parser";

const logRequest: RequestHandler = (req, res, next) => {
    console.log(req.method + " Request: " + req.url);
    next();
}

import { UserStatus, UserRank, } from '../src/app/models/User';

import {User} from './models/user'

export function setupRoutes(app: Express) {

    app.use(logRequest);
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({ extended: false }));

    app.route("/api/users").get((req, res, next) => {
        //res.send("Home");
        res.status(200).json({
            message: 'Users fetched!',
            users: [
                {
                    id: 1,
                    imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",
                    firstName: 'Mirosław',
                    lastName: "Dubaj",
                    status: UserStatus.Accepted,
                    email: "miroslaw.dubaj@gmail.com",

                    rank: UserRank.Member,
                    founder: true,
                    phone: 123123123,
                    pidNo: "AK474747",
                    pidIssuedBy: "PMRz",
                    pesel: 86021799999,
                    dob: new Date("17/02/1986"),
                    pob: "Rzeszów",
                    address: {
                        street: "Zaciszna 5B/66",
                        postal: '35-007',
                        city: 'Rzeszów',
                        state: "Podkarpackie"
                    },
                    occupation: "Web Dev",
                },
                {
                    id: 2,
                    imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

                    firstName: 'Jan',
                    lastName: "Kowalski",
                    status: UserStatus.Accepted,
                    email: "miroslaw@gmail.com",

                    rank: UserRank.Member,
                    founder: true,
                    phone: 123123123,
                    pidNo: "AK474747",
                    pidIssuedBy: "PMRz",
                    pesel: 86021799999,
                    dob: new Date("17/02/1986"),
                    pob: "Rzeszów",
                    address: {
                        street: "Zaciszna 5B/66",
                        postal: '35-007',
                        city: 'Rzeszów',
                        state: "Podkarpackie"
                    },
                    occupation: "Web Dev",
                },
                {
                    id: 3,
                    imgUrl: "https://avatars0.githubusercontent.com/u/30152904?s=460&v=4",

                    firstName: 'Jan',
                    lastName: "Nowak",
                    status: UserStatus.Accepted,
                    email: "jnow@gmail.com",

                    rank: UserRank.Member,
                    founder: true,
                    phone: 1312452342,
                    pidNo: "AR151515",
                    pidIssuedBy: "PMRz",
                    pesel: 86021799999,
                    dob: new Date("17/02/1986"),
                    pob: "Rzeszów",
                    address: {
                        street: "Zaciszna 5B/66",
                        postal: '35-007',
                        city: 'Rzeszów',
                        state: "Podkarpackie"
                    },
                    occupation: "Web Dev",
                },
            ]
        });



    }
    ).post((req, res, next) => {
        const user = new User({
            userNumber: req.body.userNumber ? req.body.userNumber : null,
            firstName: req.body.firstName ? req.body.firstName : null,
            lastName: req.body.lastName ? req.body.lastName : null,
            status: req.body.status ? req.body.status : null,
            email: req.body.email ? req.body.email : null,
            dateOfAcceptance: req.body.dateOfAcceptance ? req.body.dateOfAcceptance : null,
            dateOfFirstPayment: req.body.dateOfFirstPayment ? req.body.dateOfFirstPayment : null,
            dateOfLeave: req.body.dateOfLeave ? req.body.dateOfLeave : null,
            rank: req.body.rank ? req.body.rank : null,
            founder: req.body.founder ? req.body.founder : null,
            certificateIssued: req.body.certificateIssued ? req.body.certificateIssued : null,
            phone: req.body.phone ? req.body.phone : null,
            imgUrl: req.body.imgUrl ? req.body.imgUrl : null,
            pidNo: req.body.pidNo ? req.body.pidNo : null,
            pidIssuedBy: req.body.pidIssuedBy ? req.body.pidIssuedBy : null,
            pesel: req.body.pesel ? req.body.pesel : null,
            dob: req.body.dob ? req.body.dob : null,
            pob: req.body.pob ? req.body.pob : null,
            street: req.body.adress.street ? req.body.adress.street : null,
            city: req.body.adress.city ? req.body.adress.city : null,
            postal: req.body.adress.postal ? req.body.adress.postal : null,
            state: req.body.adress.state ? req.body.adress.state : null,
            occupation: req.body.occupation ? req.body.occupation : null,
            shootingPermitions:  req.body.shootingPermitions ? req.body.shootingPermitions : null
        })
        console.log(req.body);
        res.status(201).json({
            message: 'Post added successfully'
        })
    });
}
