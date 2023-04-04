import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListComponent } from './list/list.component';
import { TodoComponent } from './todo/todo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingComponent } from './loading/loading.component';
import { ConfettiCanvasComponent } from './confetti-canvas/confetti-canvas.component';


@NgModule({
  declarations: [
    TodoListComponent,
    ListComponent,
    TodoComponent,
    LoadingComponent,
    ConfettiCanvasComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    ConfettiCanvasComponent
  ],
  exports: [
    ConfettiCanvasComponent
  ]
})
export class TodoListModule { }
