import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './modules/hero/pages/hero/hero.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent  //added 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] // added for custom Seclector <app-hero>
})
export class AppModule { }
