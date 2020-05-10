import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';


@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Tomatoes', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
