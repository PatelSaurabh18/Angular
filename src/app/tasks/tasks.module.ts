import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],

  exports: [TasksComponent],
  /*
    only TasksComponent is added because the importing module(AppModule) has the components in declaration array those are used by AppModule
    but in that UserComponent and HeaderComponent doesn't use any of these 3 declaration's components instead  inside AppComponent of importing
    module(AppModule) uses TasksComponent in his template so we have to make available TasksComponent to AppMoule so that it can use TasksComponent
    to use it for its component AppComponent
    */
  //    imports:[SharedModule,DatePipe,FormsModule]//FormsModule because NewTaskComponet uses the features like ngSubmit/ngModel etc
  imports: [SharedModule, CommonModule, FormsModule],
  /*
 Instead of importing DatePipe we can use CommonModule provided by Angular which provides us the DatePipe internally
 */
  /*
    If Module A imports Module B, the exported components from Module B are only given to the components listed in 
    Module A's declarations array. They do not automatically pass sideways into other modules that Module A happens to import.
    */
})
export class TasksModule {}
