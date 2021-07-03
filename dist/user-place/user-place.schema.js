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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPlaceSchema = exports.UserPlace = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/user.schema");
const place_schema_1 = require("../places/place.schema");
const mongoose = require("mongoose");
let UserPlace = class UserPlace {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserPlace.prototype, "favorit", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], UserPlace.prototype, "rate", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], UserPlace.prototype, "id_user", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }),
    __metadata("design:type", place_schema_1.Place)
], UserPlace.prototype, "id_place", void 0);
UserPlace = __decorate([
    mongoose_1.Schema()
], UserPlace);
exports.UserPlace = UserPlace;
exports.UserPlaceSchema = mongoose_1.SchemaFactory.createForClass(UserPlace);
//# sourceMappingURL=user-place.schema.js.map