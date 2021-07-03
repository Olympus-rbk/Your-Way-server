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
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PlacesService = class PlacesService {
    constructor(place) {
        this.place = place;
    }
    create(createPlaceDto) {
        return this.place.create(createPlaceDto);
    }
    findAll() {
        return this.place.find({}).populate('id_category');
    }
    findAllCategories(args) {
        return this.place.find(args).populate('id_category');
    }
    findAllPlaces(long, lat) {
        this.place.createIndexes({ point: '2dsphere' });
        return this.place.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [Number(long), Number(lat)],
                    },
                    $minDistance: 0,
                    $maxDistance: 200000,
                },
            },
        });
    }
    findOne(id) {
        return this.place.findOne({ id });
    }
    update(id, updatePlaceDto) {
        return this.place.findOne({ _id: id }).updateOne(updatePlaceDto);
    }
    remove(id) {
        return this.place.deleteOne({ _id: id });
    }
};
PlacesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Place')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PlacesService);
exports.PlacesService = PlacesService;
//# sourceMappingURL=places.service.js.map