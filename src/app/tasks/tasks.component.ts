import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {} from '@angular/core';
import { type NewTaskData } from './tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  // @Output() selectAddTask = new EventEmitter<boolean>();

  addingTask = false;


  constructor(private TasksService:TasksService){
    // dependency injection just like springBoot
  }


  get selectedUserTasks() {
    return this.TasksService.getUserTasks(this.userId);
  }

  // onCompleteClickEvent(id: string) {
  //   console.log('Complete Task Clicked!');

  //   // this.selectedUserTasks = this.selectedUserTasks.filter((selectedUserTask)=> selectedUserTask.id !== id);
  //   return this.TasksService.removeTask(id);
  // }

  // Receive the custom object from the $event parameter
  // onAddNewTaskSubmit(taskData: NewTaskData) {
   
  //   this.TasksService.addTask(taskData,this.userId);

  //   // Close the form modal automatically
  //   this.addingTask = false;
  // }

  onAddTaskBtnClick() {
    this.addingTask = true;
  }

  onCloseAddTask() {
    this.addingTask = false;
  }

  // @Input({required:true}) name!: string;
  /*
  here we have to provide the name in string format otherwise throw an exception, using "!" doesn't gauranteee anuthing
  it is just a way to tell the TS that we are sure that we will(must) give you the value in string type
  */
  // @Input() name?: string;
  /*
    same as previuos, just we are defining here that the value isn't strictly required, it can be undefined also, thats ok is it a simple and easy way to demonstrate
  
    */
  // @Input() name?: string | undefined;
  /*
        more explicit way of defining that the name can be undefined or we have have the value also
        */

  // @Input({required:true}) task!: string;
}
