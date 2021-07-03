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
exports.PlaceSchema = exports.Place = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("../categories/category.schema");
const coordinates_schema_1 = require("./coordinates.schema");
const mongoose = require("mongoose");
let Place = class Place {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Place.prototype, "picture", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Place.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Place.prototype, "tags", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }),
    __metadata("design:type", category_schema_1.Category)
], Place.prototype, "id_category", void 0);
__decorate([
    mongoose_1.Prop({ index: '2dsphere' }),
    __metadata("design:type", coordinates_schema_1.Coordinates)
], Place.prototype, "location", void 0);
Place = __decorate([
    mongoose_1.Schema()
], Place);
exports.Place = Place;
exports.PlaceSchema = mongoose_1.SchemaFactory.createForClass(Place);
//# sourceMappingURL=place.schema.js.map