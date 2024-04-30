import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IToDo} from "../../web/state/todo/todo.reducer";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCard, MatCardActions, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatCard,
    MatCardContent,
    MatButton,
    MatCardActions,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
@Input() tasksList: IToDo[] | null = [];
@Output() emitter = new EventEmitter<any>();

  goNext(event$: string){
    const message = {
      event: 'ToDoComponent:buttonClick',
      rout: event$
    };
    this.emitter.emit(message)
  }

  delete(task: number){
    const message = {
      event: 'DeleteTask:buttonClick',
      task
    };
    this.emitter.emit(message);
  }

  setComplete(task: number){
    const message = {
      event: 'SetComplete:buttonClick',
      task
    };
    this.emitter.emit(message);
  }

}
