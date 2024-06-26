import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loggedIn:boolean = false;

  constructor() { }

  isAuthenticated(){
    let promise = new Promise(
      (resolve, reject) => {
        setTimeout(()=> {
          resolve (this.loggedIn);
        }, 400)
      }
    )
    return promise;
  };

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }

}
