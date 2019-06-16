import { Express, RequestHandler } from "express";
import * as bodyparser from "body-parser";

const logRequest: RequestHandler = (req, res, next) => {
    console.log(req.method + " Request: " + req.url);
    next();
}

import { User, UserStatus, UserRank, } from '../src/app/models/User';


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
        const post = req.body
        console.log(req.body);
        res.status(201).json({
            message: 'Post added successfully'
        })
    });
}
