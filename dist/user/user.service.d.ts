import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { UpdatePwDto } from './dto/updatepw.dto';
export declare class UserService {
    private readonly user;
    private readonly jwtService;
    constructor(user: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): import("mongoose").Query<User[], User, {}>;
    signup(createUserDto: CreateUserDto): Promise<User | "This email exists">;
    login(updateUserDto: UpdateUserDto): Promise<string>;
    updatePassword(id: string, updatepwDto: UpdatePwDto): Promise<any>;
    findUser(email: string): import("mongoose").Query<User, User, {}>;
    update(id: string, updateUserDto: any): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, User, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, User, {}>;
}
