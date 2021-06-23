import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { Category } from './category.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly category: Model<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.category.create(createCategoryDto);
  }

  findAll() {
    return this.category.find({});
  }

  findOne(id: string) {
    return this.category.findOne({ _id: id });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.category.findOne({ _id: id }).updateOne(updateCategoryDto);
  }

  remove(id: string) {
    return this.category.deleteOne({ _id: id });
  }
}
