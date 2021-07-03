import { User } from '../user/user.schema';
import { Place } from '../places/place.schema';
import * as mongoose from 'mongoose';
export declare class UserPlace {
    favorit: string;
    rate: string;
    id_user: User;
    id_place: Place;
}
export declare const UserPlaceSchema: mongoose.Schema<mongoose.Document<UserPlace, any>, mongoose.Model<any, any, any>, undefined>;
