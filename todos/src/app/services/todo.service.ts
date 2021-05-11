import {Injectable} from '@angular/core';
import {Todo} from "../models/Todo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  }),

};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';
  todos: Todo[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.todosUrl + this.todosLimit);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${todo.id}`;

    return this.httpClient.put(url, todo, httpHeaders)

  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.httpClient.delete<Todo>(url, httpHeaders);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.todosUrl, todo, httpHeaders);
  }
}
