import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  // @Input({required:true}) name!: string;
  /*
  here we have to provide the name in string format otherwise throw an exception, using "!" doesn't gauranteee anuthing
  it is just a way to tell the TS that we are sure that we will(must) give you the value in string type
  */
    @Input() name?: string;
    /*
    same as previuos, just we are defining here that the value isn't strictly required, it can be undefined also, thats ok is it a simple and easy way to demonstrate
  
    */
        // @Input() name?: string | undefined;
        /*
        more explicit way of defining that the name can be undefined or we have have the value also
        */ 




  // @Input({required:true}) task!: string;




}
