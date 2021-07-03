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
exports.PlacesController = void 0;
const common_1 = require("@nestjs/common");
const places_service_1 = require("./places.service");
const create_place_dto_1 = require("./dto/create-place.dto");
const update_place_dto_1 = require("./dto/update-place.dto");
let PlacesController = class PlacesController {
    constructor(placesService) {
        this.placesService = placesService;
    }
    create(createPlaceDto) {
        return this.placesService.create(createPlaceDto);
    }
    findAll() {
        return this.placesService.findAll();
    }
    findAllCat(id_category) {
        return this.placesService.findAllCategories({ id_category });
    }
    findAllP(long, lat) {
        console.log(long);
        console.log(lat);
        return this.placesService.findAllPlaces(long, lat);
    }
    findOne(id) {
        return this.placesService.findOne(id);
    }
    update(id, updatePlaceDto) {
        return this.placesService.update(id, updatePlaceDto);
    }
    remove(id) {
        return this.placesService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_place_dto_1.CreatePlaceDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findAll", null);
__decorate([
    common_1.Get('/onecategory'),
    __param(0, common_1.Query('id_category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findAllCat", null);
__decorate([
    common_1.Get('/nearest'),
    __param(0, common_1.Query('long')), __param(1, common_1.Query('lat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findAllP", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_place_dto_1.UpdatePlaceDto]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlacesController.prototype, "remove", null);
PlacesController = __decorate([
    common_1.Controller('places'),
    __metadata("design:paramtypes", [places_service_1.PlacesService])
], PlacesController);
exports.PlacesController = PlacesController;
//# sourceMappingURL=places.controller.js.map