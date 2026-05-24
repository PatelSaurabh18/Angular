import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserTaskObj } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // @Input({required:true}) name?:string;

  @Input() userTaskObjs!: UserTaskObj;

  @Output() completeClick = new EventEmitter<string>();

  onCompleteClick() {
    this.completeClick.emit(this.userTaskObjs.id);
  }
}
