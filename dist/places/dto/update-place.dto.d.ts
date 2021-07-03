import { CreatePlaceDto } from './create-place.dto';
declare const UpdatePlaceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePlaceDto>>;
export declare class UpdatePlaceDto extends UpdatePlaceDto_base {
    name: string;
    picture: string;
    description: string;
    tags: string;
    id_category: string;
    long: number;
    lang: number;
}
export {};
