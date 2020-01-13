import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a recipe', 'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d'),
    new Recipe('A Test 2 Recipe', 'Simply 2 a recipe', 'https://c.pxhere.com/photos/b6/a1/esfiha_kibe_tidbits_snacks_power_supply-1375826.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
