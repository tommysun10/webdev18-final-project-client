import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  title = 'Thai Chicken';
  cuisine = 'Asian Fusion';
  videoSrc = 'https://youtu.be/YmRyCtHK_UI';
  ingredients = ['Chicken', 'Peanut Butter'];
  description = 'To make the spicy peanut sauce, whisk together peanut butter, lime juice, soy sauce, brown sugar, sambal oelek and 2-3 tablespoons water in a small bowl; set aside.\n' +
    'Cook farro according to package instructions; set aside.\n' +
    'In a small bowl, whisk together chicken stock, sambal oelek, brown sugar and lime juice; set aside.\n' +
    'In a large bowl, combine chicken, cornstarch and fish sauce, tossing to coat and letting the chicken absorb the cornstarch.\n' +
    'Heat olive oil in a large skillet over medium heat. Add chicken and cook until golden, about 3-5 minutes. Add garlic, shallot and ginger, and cook, stirring frequently, until fragrant, about 2 minutes. Stir in the chicken stock mixture until slightly thickened, about 1 minute; season with salt and pepper, to taste.\n' +
    'Divide farro into bowls. Top with chicken, kale, cabbage, bean sprouts, carrots, cilantro and peanuts.\n' +
    'Serve with spicy peanut sauce.';

  user = {
    username: 'dana',
  }

  constructor() { }

  ngOnInit() {
  }

}
