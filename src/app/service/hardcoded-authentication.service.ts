import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username === "Abhishek" ){
      sessionStorage.setItem("authenticatedUser", username);
      // localStorage.setItem("authUserLocal", username);
      return true;
    }
    return false;
  }

  //Check if user is logged in
  isUserLoggedIn(){
    let user =  sessionStorage.getItem('authenticatedUser');
    return !(user === null)
  }
}
