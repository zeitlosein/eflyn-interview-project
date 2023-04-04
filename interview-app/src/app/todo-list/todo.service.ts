import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo-list/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly API_URL = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {}

  findAll(): Observable<[]> {
    return this.http.get<any>(this.API_URL);
  }

  create(todo: any): Observable<any> {
    return this.http.post<any>(this.API_URL, todo);
  }

  update(id: number, todo: any): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/${id}`, todo);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
