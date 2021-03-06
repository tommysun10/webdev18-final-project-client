
import { Injectable } from '@angular/core';
import { Constants } from '../common/constants';

@Injectable()
export class RecipeServiceClient {

    constructor(
        private constants: Constants) { }

    deleteRecipe = (recipeId) =>
        fetch(this.constants.RECIPE_URL + '/' + recipeId, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json'
            },
        })

    createRecipe = (cuisineId, newRecipe) => {
        return fetch(this.constants.CUISINE_URL + '/' + cuisineId + '/recipe', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        }).then(resp => resp.json());
    }

    getRecipesForCuisine = (cuisineId) =>
         fetch(this.constants.CUISINE_URL + '/' + cuisineId + '/recipes', {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json());

    getRecipe = (recipeId) => 
        fetch(this.constants.RECIPE_URL + '/' + recipeId, {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json());

    getRecipeLikes = (recipeId) => 
        fetch(this.constants.RECIPE_URL + '/' + recipeId + '/like', {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json());

    getChef = (recipeId) => 
        fetch(this.constants.RECIPE_URL + '/' + recipeId + '/chef', {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json());

     updateRecipe = (newRecipe) => {
         return fetch(this.constants.RECIPE_URL + '/' + newRecipe.id, {
             method: 'put',
             headers: {
                 'Content-type': 'application/json'
             },
             body: JSON.stringify(newRecipe)
         }).then(resp => resp.json());
     }
}
