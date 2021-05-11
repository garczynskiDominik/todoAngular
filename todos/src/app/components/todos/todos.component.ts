import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.service";
import {element} from "protractor";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(todoElement => todoElement.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
    console.log('todo deleted')
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todoElement =>{
      todo.id = todoElement.id;
      this.todos.push(todo);
    });
  }

}
