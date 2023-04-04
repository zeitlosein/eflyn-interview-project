import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfettiCanvasComponent } from '../confetti-canvas/confetti-canvas.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];
  completedTodos: Todo[] = [];
  newTodo = { title: ''};
  newTodoControl = new FormControl("", Validators.required);
  loadingDone = false;
  completedPercentage = 0;
  showGif = false;

  constructor(private listService: ListService, private todoService: TodoService, private snackBar: MatSnackBar, private confettiCanvas: ConfettiCanvasComponent) {}

  selectedTodo: Todo | null = null;

  onCompletedItemClick(todo: Todo) {
    this.selectedTodo = todo;
  }

  ngOnInit() {
    this.getTodos();
    setTimeout(() => {
      this.loadingDone = true;
    }, 3000);
  }


  //This method fetches all the ToDo items, updates the `todos` and `completedTodos` arrays, calculates the 
  // completed percentage, and checks if the percentage is 100. If all tasks are completed, it shows a 
  // snackbar message and triggers the confetti animation.
  getTodos() {
    this.todoService.findAll().subscribe((todos: Todo[]) => {
      this.todos = todos.filter(todo => !todo.completed);
      this.completedTodos = todos.filter(todo => todo.completed);
      this.completedPercentage = (this.completedTodos.length / todos.length) * 100;
  
      if (this.completedPercentage === 100) {
        // Show Snackbar for 5 seconds
        this.snackBar.open('You\'ve completed all tasks! Great work!', '', { duration: 5000 });
        this.confettiCanvas.fireConfetti(); // Trigger the confetti animation
      }
    });
  }
  

  addTodo() {
    const title = (this.newTodoControl.value ?? '').trim();
    if (title) {
      const newTodo = { title };
      this.todoService.create(newTodo).subscribe(() => {
        this.getTodos();
        this.newTodoControl.setValue('');
      });
    }
  }
  

  onTodoChange(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.update(todo.id, todo).subscribe(() => {
      this.getTodos();
      if (todo.completed) {
        // Show Snackbar for 2 seconds
        this.snackBar.open('You\'ve completed a task!', '', { duration: 2000 });
        this.showGif = true;
        setTimeout(() => {
          this.showGif = false;
        }, 3000);
      }
    });
  }
  
  

  deleteTodo(todo: Todo) {
    if(confirm('Are you sure you want to delete this item?')) {
      this.todoService.delete(todo.id).subscribe(() => {
        this.getTodos();
      })
    }
  }

  deleteSelectedTodo() {
    if (this.selectedTodo) {
      this.deleteTodo(this.selectedTodo);
      this.selectedTodo = null;
    }
  }
  
  undoCompletedTodo() {
    if (this.selectedTodo) {
      const updatedTodo = { ...this.selectedTodo, completed: false };
      this.todoService.update(updatedTodo.id, updatedTodo).subscribe(() => {
        this.getTodos();
        this.selectedTodo = null;
      });
    }
  }
  
  // Method to show the loading gif when a task is completed 
  showLoadingGif() {
    this.loadingDone = false;
    setTimeout(() => {
      this.loadingDone = true;
    }, 3000);
  }
}
