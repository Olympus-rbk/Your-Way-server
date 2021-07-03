import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from './category.interface';
export declare class CategoriesService {
    private readonly category;
    constructor(category: Model<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): import("mongoose").Query<Category[], Category, {}>;
    findOne(id: string): import("mongoose").Query<Category, Category, {}>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, Category, {}>;
    remove(id: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, Category, {}>;
}
