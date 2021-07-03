/// <reference types="mongoose" />
import { UserPlaceService } from './user-place.service';
import { CreateUserPlaceDto } from './dto/create-user-place.dto';
import { UpdateUserPlaceDto } from './dto/update-user-place.dto';
export declare class UserPlaceController {
    private readonly userPlaceService;
    constructor(userPlaceService: UserPlaceService);
    create(createUserPlaceDto: CreateUserPlaceDto): Promise<import("./user-place.interface").UserPlace>;
    findAll(): import("mongoose").Query<import("./user-place.interface").UserPlace[], import("./user-place.interface").UserPlace, {}>;
    findOne(id: string): import("mongoose").Query<import("./user-place.interface").UserPlace, import("./user-place.interface").UserPlace, {}>;
    update(id: string, updateUserPlaceDto: UpdateUserPlaceDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("./user-place.interface").UserPlace, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("./user-place.interface").UserPlace, {}>;
}
