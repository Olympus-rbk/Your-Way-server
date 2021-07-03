/// <reference types="mongoose" />
export declare class User {
    username: string;
    password: string;
    email: string;
    phone: number;
    date_of_birth: string;
    gender: string;
}
export declare const UserSchema: import("mongoose").Schema<import("mongoose").Document<User, any>, import("mongoose").Model<any, any, any>, undefined>;
