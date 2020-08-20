import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { TodosComponent } from './todos/todos.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'todos', component: TodosComponent, canActivate:[RouteGuardService]},
  {path: 'todos/:id', component: TodoDetailsComponent,  canActivate:[RouteGuardService]},

  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
