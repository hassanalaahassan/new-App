import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.int';
import { RECIPES } from '../server/Recipes.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes:Recipe[] = RECIPES

  constructor(private localStorage:LocalStorageService) { }

  getRecipes():Recipe[]{
    return this.localStorage.getItem<Recipe[]>("recipes") || this.recipes
  }
  addRecipe(recipe:Recipe):void{
    this.recipes.push(recipe)
    this.localStorage.setItem("recipes", this.recipes)
  }

}
