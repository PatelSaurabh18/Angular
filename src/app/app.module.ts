import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";

/*
    Important Thing to keep in mind
RuntimeError: NG0402: A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the `BrowserModule` is imported
so we have to import and use BrowserModule also which provides us FormsModule also
*/
@NgModule({
    declarations :[AppComponent],
    /*
    this declaration array is used for the non-stand-alone components
    */
    bootstrap: [AppComponent],
    /*
    this bootstrap array is used for root component which has(within/inside itself) other non-stand-alone components
    */
    imports: [BrowserModule,HeaderComponent,UserComponent,TasksComponent]
     /*
    this imports array is used for the stand-alone components which we want to keep in 
    Imp - import array isn't used for just e"nabling the standalone components" but also for" including other module"
    */
})
export class AppModule{

}