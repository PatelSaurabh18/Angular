import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  standalone: false, // for module component I have to do it false and remove the imports array from here(decorator)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId ?: string;

  // onSelectedUser(id:string){
  //   console.log("Selected User with Id :"+ id);

  // }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectedUserShowTask(id: string) {
    console.log('The ID of user is : ' + id);

    this.selectedUserId = id;
  }
}

/*
In TypeScript:

1. Object syntax (same as JavaScript)

You use commas ,, not semicolons ;

const user = {
  name: "Amit",
  age: 25
};

So:

, → separates properties in object literals
: → separates key and value
2. Type definitions (TypeScript type / interface)

You use semicolons ; (optional but common) or new lines

type User = {
  name: string;
  age: number;
};

or also valid:

type User = {
  name: string
  age: number
}

Both work, but ; is standard style.

*/
