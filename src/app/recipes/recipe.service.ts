import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


export class RecipeService {

  recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.', 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0793-crusty-pizza-with-salami-mushrooms-onion.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5e653010dd06591c50b3bd75aa332dc6'),
    new Recipe('Coffee', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.','https://c0.wallpaperflare.com/preview/62/451/829/coffee-cold-freddo-cafe.jpg'),
    new Recipe('Carrots','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet lectus justo. Ut mollis, purus sit amet rutrum vestibulum, urna ipsum placerat dui, sit amet efficitur sapien ante vel sapien.', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Carrots_of_many_colors.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
