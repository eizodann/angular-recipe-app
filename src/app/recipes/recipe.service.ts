import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'Simply a recipe', 
      'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'A Test 2 Recipe', 
      'Simply 2 a recipe', 
      'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Carrot', 7)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
