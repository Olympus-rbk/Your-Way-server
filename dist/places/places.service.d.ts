import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Model } from 'mongoose';
import { Place } from './places.interface';
export declare class PlacesService {
    private readonly place;
    constructor(place: Model<Place>);
    create(createPlaceDto: CreatePlaceDto): Promise<Place>;
    findAll(): import("mongoose").Query<Place[], Place, {}>;
    findAllCategories(args: any): import("mongoose").Query<Place[], Place, {}>;
    findAllPlaces(long: any, lat: any): import("mongoose").Query<Place[], Place, {}>;
    findOne(id: string): import("mongoose").Query<Place, Place, {}>;
    update(id: string, updatePlaceDto: UpdatePlaceDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, Place, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, Place, {}>;
}
