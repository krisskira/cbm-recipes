import { Args, Query, Resolver } from "@nestjs/graphql";
import { RecipeModel } from "../models/recipe.model";
import { RecipesService } from "../services/recipes.service";

@Resolver('recipes')
export class RecipesResolver {
    constructor(private recipesService: RecipesService) { }

    @Query(returns => [RecipeModel])
    async recipes() {
        return await this.recipesService.load();
    }
}