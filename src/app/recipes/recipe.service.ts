import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChangedSubject = new Subject();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.',
      'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5e653010dd06591c50b3bd75aa332dc6',
      [new Ingredient('mozzarella', 2), new Ingredient('pizza sauce', 1)]),
    new Recipe(
      'Coffee',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.',
      'https://c0.wallpaperflare.com/preview/62/451/829/coffee-cold-freddo-cafe.jpg',
      [new Ingredient('dark roast coffee', 2), new Ingredient('milk', 1)]),
    new Recipe(
      'Carrots',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.',
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Carrots_of_many_colors.jpg',
      [new Ingredient('carrots', 2), new Ingredient('dill', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangedSubject.next(this.getRecipes());
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipes[index] = updatedRecipe;
    this.recipesChangedSubject.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChangedSubject.next(this.getRecipes());
  }

}
