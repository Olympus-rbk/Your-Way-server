"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPlaceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_place_dto_1 = require("./create-user-place.dto");
class UpdateUserPlaceDto extends mapped_types_1.PartialType(create_user_place_dto_1.CreateUserPlaceDto) {
}
exports.UpdateUserPlaceDto = UpdateUserPlaceDto;
//# sourceMappingURL=update-user-place.dto.js.map