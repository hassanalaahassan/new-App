import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RecipesComponent } from '../Components/recipes/recipes.component';
import { CreateRecipeComponent } from '../Components/create-recipe/create-recipe.component';


export const routes: Routes =[
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:RecipesComponent
      },
      {
        path:"All-Recipes",
        component:RecipesComponent
      },
      {
        path:"Create-Recipe",
        component:CreateRecipeComponent
      },
      {
        path:"Fav-Recipe",
        component:RecipesComponent
      },

    ]
  }
];
