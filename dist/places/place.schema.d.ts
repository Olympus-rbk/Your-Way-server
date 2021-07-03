import { Category } from '../categories/category.schema';
import { Coordinates } from './coordinates.schema';
import * as mongoose from 'mongoose';
export declare class Place {
    name: string;
    picture: string;
    description: string;
    tags: string;
    id_category: Category;
    location: Coordinates;
}
export declare const PlaceSchema: mongoose.Schema<mongoose.Document<Place, any>, mongoose.Model<any, any, any>, undefined>;
