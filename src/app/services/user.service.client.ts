
import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  register = (newUser) =>
    fetch('http://localhost:3000/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

  currentUser() {
    return fetch('http://localhost:3000/api/profile', {
      credentials: 'include'
    }).then(response => {
      if (response.status == 403) {
        return null;
      }
      return response.json()
    });
  }


  updateUser = (updatedUser) =>
    fetch('http://localhost:3000/api/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })

  logout = () =>
    fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })


}
