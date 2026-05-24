import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {


enteredTitle = '';
enteredSummary = '';
enteredDueDate='';

@Output() create = new EventEmitter<{title:string,summary:string,dueDate:string}>();
@Output() cancel = new EventEmitter<void>();

onSubmitForm(){
  this.create.emit({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    dueDate:this.enteredDueDate
  });
}

onCancelClick(){
  this.cancel.emit();
}

}
