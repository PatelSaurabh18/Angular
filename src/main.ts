// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';
// bootstrapApplication(AppComponent).catch((err) => console.error(err));
/*
    commented this because this works for standalone root component only
*/
// bootstrapApplication(HeaderComponent); 


import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

/*
    so to work with Modeule components we have another way of implementation a module component as a root component
*/

platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.log(err));



