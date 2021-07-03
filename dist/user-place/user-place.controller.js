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
exports.UserPlaceController = void 0;
const common_1 = require("@nestjs/common");
const user_place_service_1 = require("./user-place.service");
const create_user_place_dto_1 = require("./dto/create-user-place.dto");
const update_user_place_dto_1 = require("./dto/update-user-place.dto");
let UserPlaceController = class UserPlaceController {
    constructor(userPlaceService) {
        this.userPlaceService = userPlaceService;
    }
    create(createUserPlaceDto) {
        return this.userPlaceService.create(createUserPlaceDto);
    }
    findAll() {
        return this.userPlaceService.findAll();
    }
    findOne(id) {
        return this.userPlaceService.findOne(+id);
    }
    update(id, updateUserPlaceDto) {
        return this.userPlaceService.update(+id, updateUserPlaceDto);
    }
    remove(id) {
        return this.userPlaceService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_place_dto_1.CreateUserPlaceDto]),
    __metadata("design:returntype", void 0)
], UserPlaceController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPlaceController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPlaceController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_place_dto_1.UpdateUserPlaceDto]),
    __metadata("design:returntype", void 0)
], UserPlaceController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPlaceController.prototype, "remove", null);
UserPlaceController = __decorate([
    common_1.Controller('userplace'),
    __metadata("design:paramtypes", [user_place_service_1.UserPlaceService])
], UserPlaceController);
exports.UserPlaceController = UserPlaceController;
//# sourceMappingURL=user-place.controller.js.map