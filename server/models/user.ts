import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userNumber: {type: Number, required: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    status: {type: String, required: true},
    email: {type: String, required: true},
    dateOfAcceptance: {type: Date, required: true},
    dateOfFirstPayment: {type: Date, required: true},
    dateOfLeave: {type: Date, required: true},
    rank: {type: String, required: true},
    founder: {type: Boolean, required: false},
    certificateIssued: {type: Boolean, required: false},
    phone: {type: Number, required: false},
    imgUrl: {type: String, required: false},
    pidNo: {type: String, required: true},
    pidIssuedBy: {type: String, required: true},
    pesel: {type: Number, required: true},
    dob: {type: Date, required: true},
    pob: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    postal: {type: String, required: true},
    state: {type: String, required: true},
    occupation: {type: String, required: true},
    shootingPermitions: {type: [[String]], required: false}
})

export const User = mongoose.model('User', userSchema);