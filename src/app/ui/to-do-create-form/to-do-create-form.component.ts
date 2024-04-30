import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'create-form',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './to-do-create-form.component.html',
  styleUrl: './to-do-create-form.component.scss'
})
export class ToDoCreateFormComponent {
  @Output() emitter = new EventEmitter<any>();

  titleToDo = '';
  descriptionToDo = '';

  createTask(titleToDo: string, descriptionToDo: string) {
    if (this.titleToDo) {
      const message = {
        event: 'ToDoComponent:buttonClick',
        titleToDo,
        descriptionToDo
      };
      this.emitter.emit(message);

      this.titleToDo = '';
      this.descriptionToDo = '';
    }
  }

  goNext(event$: string){
    const message = {
      event: 'ToDoComponent:buttonClick',
      rout: event$
    };
    this.emitter.emit(message)
  }
}
