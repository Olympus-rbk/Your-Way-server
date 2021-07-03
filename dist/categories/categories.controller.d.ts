/// <reference types="mongoose" />
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./category.interface").Category>;
    findAll(): import("mongoose").Query<import("./category.interface").Category[], import("./category.interface").Category, {}>;
    findOne(id: string): import("mongoose").Query<import("./category.interface").Category, import("./category.interface").Category, {}>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("./category.interface").Category, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("./category.interface").Category, {}>;
}
