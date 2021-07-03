import { CreateUserPlaceDto } from './dto/create-user-place.dto';
import { UpdateUserPlaceDto } from './dto/update-user-place.dto';
import { Model } from 'mongoose';
import { UserPlace } from './user-place.interface';
export declare class UserPlaceService {
    private readonly userplace;
    constructor(userplace: Model<UserPlace>);
    create(createUserPlaceDto: CreateUserPlaceDto): Promise<UserPlace>;
    findAll(): import("mongoose").Query<UserPlace[], UserPlace, {}>;
    findOne(id: number): import("mongoose").Query<UserPlace, UserPlace, {}>;
    update(id: number, updateUserPlaceDto: UpdateUserPlaceDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, UserPlace, {}>;
    remove(id: number): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, UserPlace, {}>;
}
