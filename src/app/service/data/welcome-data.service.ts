import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
  constructor (public message: String){

  } 
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute hello world bean service");
  }

  //http://localhost:8080/hello-world/path-variable/AbhishekModak
  executeHelloWorldServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();


    //Step 1:  Here we are creating the header object
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    //Step 2: This is how to pass the header object, in the HTTPVerb from the front end
    return this.httpClient.get<HelloWorldBean>
    (`http://localhost:8080/hello-world/path-variable/${name}`,{headers} );
                                                                      
    // console.log("Execute hello world bean service");
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password)
    return basicAuthHeaderString;
  }
}
