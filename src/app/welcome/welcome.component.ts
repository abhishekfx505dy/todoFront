import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: String
  name =''

  constructor(private activatedRoute: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());

    //But this will be blocked by the Cors policy
    //Until @CrossOrigin is added to the controller.
    this.service.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage()");
  }

  getWelcomeMessagewithParameter(){

    //But this will be blocked by the Cors policy
    //Until @CrossOrigin is added to the controller.
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService =  response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error;
  }

}
