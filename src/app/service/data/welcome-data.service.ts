import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Execute hello world bean service");
  }
}
