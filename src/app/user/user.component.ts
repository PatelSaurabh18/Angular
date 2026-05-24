import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { Task } from 'zone.js/lib/zone-impl';
import { type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id:string;
//   avatar:string;
//   name:string
// }
/*
this is not much preferred, use interface insted, but using type we can define any datatype data.
*/

// interface User{
//   id:string;
//   avatar:string;
//   name:string
// }
/*
using interface is most common and preferred,this can ONLY use objects.z
*/

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // these @Input is used to take input from parent wihout using signal(1st approach)


  @Input({required:true}) selected!:boolean;
  @Input({required:true}) user!: User;
  /*
  uisng directly an object is not recomenended instead use TS type or interface
  */

    @Output() select = new EventEmitter<string>();

  // @Output() select = new EventEmitter<string>();
  // this whole output thing is used to send the event to parennt from child
  //   Very important thing
  // EventEmitter does NOT directly call parent method.

  // It only emits an event.

  // Parent chooses whether to listen:

  // (select)="onSelectUser($event)"

  // If parent doesn't listen, nothing happenss)

  // select = output<string>();
  // this output is same for @Output as it was for input to @Input



  // avatar = input.required<string>();
  // name = input.required<string>();
  // this lowercase(input) is used as signal input
  // Important- These input signals are READ-ONLY so we can not change it after, we can change it outside of this user component changes

  // imagePath = computed(()=> "../../assets/users/"+this.avatar());

  get ImagePath() {
    return '../../assets/users/' + this.user.avatar;
  }
  //both get and simple variable works with input signals so can use either
  //if using signal input so don't use getter although it works fine
  // public selectedUser = signal(DUMMY_USERS[randomIndex]);
  // new way of doing with signals(since angular 16.o)

  // public selectedUserImage = '../../assets/users/' + this.selectedUser().avatar;
  // public selectedUser = DUMMY_USERS[randomIndex];
  // old way of doing without signals(since angular 2.o)

  // get ImagePath(){
  //   return "../../assets/users/"+this.selectedUser().avatar;
  //   // same like selectedUserImage both are same
  // }

  // public imagePath = computed(()=> '../../assets/users/' + this.selectedUser().avatar);
  // used with "signals" and it is a function, not variable,s o we have to use it as imagePath()

  onSelectUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
    console.log('Clicked!');
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // new way of value updation(when signal is used)

    // this.selectedUser =  DUMMY_USERS[randomIndex];
    // old way of value updation
  }


}
