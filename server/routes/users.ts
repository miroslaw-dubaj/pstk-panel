import { Router } from 'express';
import { User } from '../models/user'
import * as  multer from 'multer';

enum MIME_TYPE_MAP {
    'image/png'= 'png',
    'image/jpeg'= 'jpg',
    'image/jpg'= 'jpg'
}

export const router = Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype]
        let error = new Error('Invalid mime type');
        if (isValid) {
            error = null;
        }
        cb(error, 'server/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, `${name}-${Date.now()}.${ext}`)
    }
});

router.route("")
        .get((req, res, next) => {
            User.find().then(docs => {
                res.status(200).json({
                    message: 'Users fetched!',
                    users: docs
                });
            })
        }
        )
        .post(multer({ storage: storage }).single('image'), (req, res, next) => {
            const url = `${req.protocol}://${req.get('host')}`
            User.find().limit(1).sort({ $natural: -1 }).then(lastUser => {
                const user = new User({
                    userNumber: lastUser[0] ? lastUser[0].userNumber + 1 : 1,
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
                    imgUrl: req.body.imgUrl ? req.body.imgUrl : `${url}/images/${req.file.filename}`,
                    pidNo: req.body.pidNo ? req.body.pidNo : 'null',
                    pidIssuedBy: req.body.pidIssuedBy ? req.body.pidIssuedBy : 'null',
                    pesel: req.body.pesel ? req.body.pesel : 0,
                    dob: req.body.dob ? req.body.dob : new Date,
                    pob: req.body.pob ? req.body.pob : 'null',
                    address: {
                        street: req.body.address.street ? req.body.address.street : 'null',
                        city: req.body.address.city ? req.body.address.city : 'null',
                        postal: req.body.address.postal ? req.body.address.postal : 'null',
                        state: req.body.address.state ? req.body.address.state : 'null',
                    },
                    occupation: req.body.occupation ? req.body.occupation : 'null',
                    shootingPermitions: req.body.shootingPermitions ? req.body.shootingPermitions : ['']
                })
                user.save().then(createdUser => {
                    res.status(201).json({
                        message: 'Post added successfully',
                        savedUser: createdUser
                    })
                });
            })

        }
        );
    router.route('/:user_id')
        .get((req, res, next) => {
            User.findById(req.params.user_id).then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({message: 'User not found!'})
                }
            })
        })
        .put((req, res, next) => {
            let userNumber = 1;
            User.findById(req.params.user_id).then(lastUser => {
                userNumber = lastUser.userNumber ? lastUser.userNumber : 1;
            })
            const user = new User({
                _id: req.params.user_id,
                userNumber: userNumber,
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
                address: {
                    street: req.body.address.street ? req.body.address.street : 'null',
                    city: req.body.address.city ? req.body.address.city : 'null',
                    postal: req.body.address.postal ? req.body.address.postal : 'null',
                    state: req.body.address.state ? req.body.address.state : 'null',
                },
                occupation: req.body.occupation ? req.body.occupation : 'null',
                shootingPermitions: req.body.shootingPermitions ? req.body.shootingPermitions : ['']
            })
            User.updateOne({_id: req.params.user_id}, user).then(result => {
                res.status(200).json({message: 'Update successful!'})
            })
        })
        .delete((req, res, next) => {
            User.deleteOne({ _id: req.params.user_id }).then(result => {
                res.status(200).json({
                    message: 'User added successfully'
                })
            }
            )
        });
