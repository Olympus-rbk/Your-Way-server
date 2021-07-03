"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(user, jwtService) {
        this.user = user;
        this.jwtService = jwtService;
    }
    create(createUserDto) {
        return this.user.create(createUserDto);
    }
    findAll() {
        return this.user.find({});
    }
    async signup(createUserDto) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
        const emaill = createUserDto.email;
        const findlogin = await this.user.findOne({ email: emaill }).exec();
        if (findlogin) {
            return 'This email exists';
        }
        const createdUser = this.user.create({
            username: createUserDto.username,
            email: createUserDto.email,
            password: hash,
            phone: createUserDto.phone,
            date_of_birth: createUserDto.date_of_birth,
            gender: createUserDto.gender,
        });
        return createdUser;
    }
    async login(updateUserDto) {
        const user = await this.user.findOne({ email: updateUserDto.email }).exec();
        if (!user)
            return `email don't exist`;
        const { password } = user;
        const isMatch = await bcrypt.compare(updateUserDto.password, password);
        if (isMatch) {
            const payload = { email: user.email };
            const token = this.jwtService.sign(payload);
            return JSON.stringify({ token, user });
        }
        else {
            return 'incorrect password';
        }
    }
    async updatePassword(id, updatepwDto) {
        const user = await this.user.findOne({ _id: id }).exec();
        const { password } = user;
        console.log(password);
        const isMatch = await bcrypt.compare(updatepwDto.password, password);
        console.log('^^^', updatepwDto.password);
        if (isMatch) {
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(updatepwDto.newpassword, saltOrRounds);
            return user.updateOne({ password: hash });
        }
        else {
            return 'incorrect password';
        }
    }
    findUser(email) {
        return this.user.findOne({ email });
    }
    update(id, updateUserDto) {
        return this.user.findOne({ _id: id }).updateOne(updateUserDto);
    }
    remove(id) {
        return this.user.deleteOne({ _id: id });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map