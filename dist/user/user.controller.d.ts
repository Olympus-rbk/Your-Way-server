/// <reference types="mongoose" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdatePwDto } from './dto/updatepw.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): import("mongoose").Query<import("./user.interface").User[], import("./user.interface").User, {}>;
    signup(createUserDto: CreateUserDto): Promise<import("./user.interface").User | "This email exists">;
    findUser(email: string): import("mongoose").Query<import("./user.interface").User, import("./user.interface").User, {}>;
    login(loginDto: LoginDto): Promise<string>;
    update(id: string, updateUserDto: UpdateUserDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("./user.interface").User, {}>;
    updatePassword(id: string, updatePwDto: UpdatePwDto): Promise<any>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("./user.interface").User, {}>;
}
