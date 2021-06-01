import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipe, RecipeSchema } from './models/recipe.model';
import { RecipesResolver } from './resolvers/recipes.resolver';
import { RecipesService } from './services/recipes.service';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])
  ],
  providers: [RecipesResolver, RecipesService],
})
export class RecipesModule {}
