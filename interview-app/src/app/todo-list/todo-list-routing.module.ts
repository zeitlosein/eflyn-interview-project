import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  {
    path: 'list/:id',
    component: ListComponent,
  },
  {
    path: 'todo/:id',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
