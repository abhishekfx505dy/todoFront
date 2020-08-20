import { Component, OnInit } from '@angular/core';
import { Todo } from '../common/Todo';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  message : String


  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retieveAllTodos('Abhishek').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('Abhishek',id).subscribe(
      response => {
        console.log(response);
        this.refreshTodos();
        this.message = "Todo Deleted Successfully";
      }
    )
  }

  updateTodo(id){
    console.log(`Updated ${id}`)
    this.router.navigate(['todos',id])
    console.log('navigated')
  }

}
