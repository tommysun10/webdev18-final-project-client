
import { Injectable } from "@angular/core";
import { Constants } from '../common/constants';

@Injectable()
export class CuisineServiceClient {

    constructor(
        private constants: Constants) { }

    deleteCuisine = (cuisineId) =>
        fetch(this.constants.CUISINE_URL + '/' + cuisineId, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json'
            },
        })

    createCuisine = (newCuisine) => {
        return fetch(this.constants.CUISINE_URL, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCuisine)
        }).then(resp => resp.json());
    }

    getCuisines = () => 
         fetch(this.constants.CUISINE_URL + 's', {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(resp => resp.json());

    updateCuisine = (newCuisine) => {
        return fetch(this.constants.CUISINE_URL + '/' + newCuisine.id, {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCuisine)
        }).then(resp => resp.json());
    }
}
