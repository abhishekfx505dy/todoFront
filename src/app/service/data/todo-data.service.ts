import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/common/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }

  retieveAllTodos(username){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.httpClient.delete
            (`http://localhost:8080/users/${username}/todos/${id}`)
  }
  
  retrieveTodo(username, id){
    return this.httpClient.get<Todo>
            (`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    return this.httpClient.put
            (`http://localhost:8080/users/${username}/todos/${id}`
              , todo)
  }

  createTodo(username, todo){
    return this.httpClient.post
            (`http://localhost:8080/users/${username}/todos`
            , todo)
  }
}
