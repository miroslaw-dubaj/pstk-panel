import * as mongoose from 'mongoose';
import { UserStatus, UserRank} from '../../src/app/models/User';

export interface IUser extends mongoose.Document {
    _id: string,
    userNumber?: number,
    firstName: string,
    lastName: string,
    status: UserStatus,
    email: string,
    dateOfAcceptance?: Date,
    dateOfFirstPayment?: Date,
    dateOfLeave?: Date,
    rank: UserRank,
    founder?: boolean,
    certificateIssued?: boolean,
    phone: number,
    imgUrl?: string,
    pidNo: string,
    pidIssuedBy: string,
    pesel: number,
    dob: Date,
    pob: string,
    address: {
        street: string,
        city: string,
        postal: string,
        state: string
    },
    occupation?: string,
    shootingPermitions?: string[],
}

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

export const User = mongoose.model<IUser>('User', userSchema);