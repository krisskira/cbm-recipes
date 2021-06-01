import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument, RecipeModel } from '../models/recipe.model';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) { }

  async load(): Promise<RecipeModel[]> {

    const recipes = await this.recipeModel.find().exec();
    return  recipes.map(recipeRow => {
      const recipe = new RecipeModel();
      recipe.name = recipeRow.name;
      recipe.image = recipeRow.image;
      recipe.ingredients = recipeRow.ingredients;
      return recipe;
    });
  }
}