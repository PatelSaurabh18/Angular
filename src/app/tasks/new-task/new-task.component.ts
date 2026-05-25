import { Component,EventEmitter,inject,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],// here we are uisng module(FormModule) in a standalone-component
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {


enteredTitle = '';
enteredSummary = '';
enteredDueDate='';

private taskService = inject(TasksService);


@Input({required:true}) userId!:string;
// @Output() create = new EventEmitter<{title:string,summary:string,dueDate:string}>();
// we dont need this since we are using service and DI
@Output() close = new EventEmitter<void>();

onSubmitForm(){
  // this.create.emit({
  //   title:this.enteredTitle,
  //   summary:this.enteredSummary,
  //   dueDate:this.enteredDueDate
  // });
  this.taskService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    dueDate:this.enteredDueDate
  },this.userId);
  this.close.emit();
}

onCancelClick(){
  this.close.emit();
}

}
