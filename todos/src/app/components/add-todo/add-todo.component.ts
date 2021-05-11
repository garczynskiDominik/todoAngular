import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;

  @Output()
  addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo: Todo = {
      title: this.title,
      completed: false,

    };
    this.addTodo.emit(todo)
  }

}
