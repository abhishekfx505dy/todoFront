import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../common/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {


  public id : number;
  public todo : Todo;

  constructor(
    private todoService: TodoDataService,
    private actiatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.actiatedRoute.snapshot.params['id'];

    //This is to just load the page with a dummy todo,  untill the date from subscription comes
    this.todo =  new Todo(this.id,'',false, new Date());

    if (this.id != -1){
      this.todoService.retrieveTodo('Abhishek',this.id)
      .subscribe(
        data => this.todo = data
      )
    }
  
        console.log(this.todo)
  }

  saveTodo(){

    if ( this.id === -1){
      //call create todo
      this.todoService.createTodo('Abhishek', this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }

    else {
      this.todoService.updateTodo('Abhishek', this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos'])
          }
        )
    }
    
  }

}
