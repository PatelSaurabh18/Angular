import { Component,EventEmitter,Input,Output } from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {  } from '@angular/core';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;

  // @Output() selectAddTask = new EventEmitter<boolean>();
  


  addingTask = false;


dummyTasks = [
  // u1 → 2 tasks
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all basic and advanced Angular features.',
    dueDate: '2025-12-31',
  },
  {
    id: 't4',
    userId: 'u1',
    title: 'Practice TypeScript',
    summary: 'Improve TypeScript understanding with daily exercises.',
    dueDate: '2025-10-15',
  },

  // u2 → 1 task
  {
    id: 't5',
    userId: 'u2',
    title: 'Read System Design Basics',
    summary: 'Understand load balancing, caching and databases.',
    dueDate: '2025-08-20',
  },

  // u3 → 4 tasks
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build prototype of online shop website.',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary: 'Create issue template for project management.',
    dueDate: '2024-06-15',
  },
  {
    id: 't6',
    userId: 'u3',
    title: 'Fix UI bugs',
    summary: 'Resolve responsive design issues in dashboard.',
    dueDate: '2025-03-10',
  },
  {
    id: 't7',
    userId: 'u3',
    title: 'Write unit tests',
    summary: 'Add unit tests for core components.',
    dueDate: '2025-04-01',
  },

  // u4 → 3 tasks
  {
    id: 't8',
    userId: 'u4',
    title: 'Learn RxJS basics',
    summary: 'Understand observables and operators.',
    dueDate: '2025-06-12',
  },
  {
    id: 't9',
    userId: 'u4',
    title: 'Improve Git skills',
    summary: 'Practice branching, merging and rebasing.',
    dueDate: '2025-05-18',
  },
  {
    id: 't10',
    userId: 'u4',
    title: 'Portfolio website',
    summary: 'Create personal portfolio using Angular.',
    dueDate: '2025-07-01',
  },

  // u5 → 6 tasks (heavy user)
  {
    id: 't11',
    userId: 'u5',
    title: 'Learn Angular routing',
    summary: 'Understand navigation and lazy loading.',
    dueDate: '2025-09-10',
  },
  {
    id: 't12',
    userId: 'u5',
    title: 'API integration',
    summary: 'Connect frontend with backend services.',
    dueDate: '2025-09-15',
  },
  {
    id: 't13',
    userId: 'u5',
    title: 'State management',
    summary: 'Learn services and RxJS for state handling.',
    dueDate: '2025-09-20',
  },
  {
    id: 't14',
    userId: 'u5',
    title: 'Optimize performance',
    summary: 'Improve rendering and reduce bundle size.',
    dueDate: '2025-09-25',
  },
  {
    id: 't15',
    userId: 'u5',
    title: 'Deploy app',
    summary: 'Deploy Angular app to cloud platform.',
    dueDate: '2025-10-01',
  },
  {
    id: 't16',
    userId: 'u5',
    title: 'Code review practice',
    summary: 'Review and refactor existing codebase.',
    dueDate: '2025-10-05',
  },
];

get selectedUserTasks(){
  return this.dummyTasks.filter((dummyTask)=> dummyTask.userId === this.userId);
}

onCompleteClickEvent(id:string){
  console.log("Complete Task Clicked!");

  // this.selectedUserTasks = this.selectedUserTasks.filter((selectedUserTask)=> selectedUserTask.id !== id);
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);

  
}

// Receive the custom object from the $event parameter
onAddNewTaskSubmit(taskData: {title:string,summary:string,dueDate:string}){
  // this.addingTask= true;
   let newTaskObj = {
    id: new Date().getTime().toString(), // Generates a unique simple timestamp ID string
    userId: this.userId,                 // Links the new task directly to the active user!
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate
  };

    // Push it into your main dummy data array
    this.dummyTasks.push(newTaskObj);

      // Close the form modal automatically
    this.addingTask=false;
}

onAddTaskBtnClick(){
  this.addingTask=true;
}

onCancelAddTask(){
  this.addingTask=false;
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
