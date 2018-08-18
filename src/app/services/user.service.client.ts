
import { Injectable } from "@angular/core";
import { Constants } from '../common/constants';

@Injectable()
export class UserServiceClient {

	constructor(
		private constants: Constants) { }


	login = (user) =>
		fetch(this.constants.LOGIN_URL, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})

	register = (newUser) =>
		fetch(this.constants.REGISTER_URL, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})

	currentUser() {
		return fetch(this.constants.PROFILE_URL, {
			credentials: 'include'
		}).then(response => {
			if (response.status == 403) {
				return null;
			}
			return response.json()
		});
	}


	updateUser = (updatedUser) =>
		fetch(this.constants.USER_URL + '/' + updatedUser.id, {
			method: 'put',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updatedUser)
		})

	logout = () =>
		fetch(this.constants.LOGOUT_URL, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json'
			},
		})

	findAllUsers = () =>
		fetch(this.constants.USERS_URL, {
			method: 'get',
			headers: {
				'Content-type': 'application/json'
			},
		}).then(resp => resp.json());

	deleteUser = (userId) =>
		fetch(this.constants.USER_URL + '/' + userId, {
			method: 'delete',
			headers: {
				'Content-type': 'application/json'
			},
		})

	createUser = (newUser) => {
	return fetch(this.constants.USER_URL, {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(newUser)
	}).then(resp => resp.json());
	}

	likeRecipe = (recipeId) => {
		return fetch(this.constants.USER_URL + '/recipe/' + recipeId + '/like', {
			method: 'post',
			credentials: 'include',
			headers: {
				'Content-type': 'application/json'
			},
		})
	}

}
