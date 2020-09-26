import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  private url = 'https://angularudemy-66281.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe(response => { console.log(response); }, error => { console.log(error); });
  }

  fetchRecipes() {
    return  this.http.get<Recipe[]>(this.url)
      .pipe(
        map(recipes => recipes.map(recipe => ({ ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }))),
        tap( recipes => this.recipeService.setRecipes(recipes) ));
  }

}
