import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Abhishek'
  password = ''

  invalidLogin = false


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Now we will start implementing security

  handleLogin(){
     console.log(this.username);
     
    if(this.username==="Abhishek" ){
    this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
      
    }
    else{
      this.invalidLogin=true;
    }
  }

}
