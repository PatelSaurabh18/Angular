import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations :[CardComponent],
    exports : [CardComponent]

})
/*
In an older Angular project (before Standalone Components), an NgModule acts like a fenced-in yard.
declarations: These are components you build inside your yard. They can see each other, but the outside world cannot see them.
exports: This is your public shop window. By placing a component here, you allow other yards (other modules) to import your module and use that component in their templates.
*/

/*
If you leave exports empty, your component is private and can only be used inside its own module. If you add it to exports,
 you make it public so any other module importing yours can use it.
*/
export class SharedModule{

}