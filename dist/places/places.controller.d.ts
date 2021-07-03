/// <reference types="mongoose" />
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
    create(createPlaceDto: CreatePlaceDto): Promise<import("./places.interface").Place>;
    findAll(): import("mongoose").Query<import("./places.interface").Place[], import("./places.interface").Place, {}>;
    findAllCat(id_category: any): import("mongoose").Query<import("./places.interface").Place[], import("./places.interface").Place, {}>;
    findAllP(long: any, lat: any): import("mongoose").Query<import("./places.interface").Place[], import("./places.interface").Place, {}>;
    findOne(id: string): import("mongoose").Query<import("./places.interface").Place, import("./places.interface").Place, {}>;
    update(id: string, updatePlaceDto: UpdatePlaceDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("./places.interface").Place, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("./places.interface").Place, {}>;
}
