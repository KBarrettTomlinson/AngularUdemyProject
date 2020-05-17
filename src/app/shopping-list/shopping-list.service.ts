import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';


@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject();
  startedEditing = new Subject();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
