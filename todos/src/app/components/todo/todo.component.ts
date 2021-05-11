import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/Todo";
import {Observable} from "rxjs";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService ) {
  }

  ngOnInit(): void {
  }

  setClasses(): string {
    let classes = 'todo';

    if (this.todo.completed) {
      classes += ' is-completed'
    }
    return classes
  }


  onToggle(todo: Todo) {
    //zmienic wartosc completed
    //wyslac zadanie zmiany wlasciwosci
    this.todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo=>{
      console.log('todo updated', todo)
    });
  }

  onDelete( todo: Todo){
    this.deleteTodo.emit(todo);
  }



}
