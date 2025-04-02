import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from "./recipe-card/recipe-card.component";
import { Recipe } from '../../interfaces/recipe.int';
import { RecipeDetailesComponent } from "../recipe-detailes/recipe-detailes.component";
import { RecipesService } from '../../services/Recipes.service';
import { SearchTypesService } from '../../services/search-types.service';
import { HomeHeaderComponent } from "./home-header/home-header.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, RecipeDetailesComponent, FormsModule, HomeHeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [];
  recipeDetailes: Recipe = {} as Recipe;
  showModel: boolean = false;


  constructor(private recipesService: RecipesService , private SearchService:SearchTypesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  filterRecipes(letterSearch:string):void{
    this.recipes = this.SearchService.searchByTitle(letterSearch)
  }

  receiveRecipeFromChild(recipeId: number): void {
    this.recipeDetailes = this.showedRecipeById(recipeId);
    this.toggleModel();
  }

  showedRecipeById(recipeId: number): Recipe {
    return this.SearchService.searchById(recipeId);
  }

  toggleModel(): void {
    this.showModel = !this.showModel;
  }

}
