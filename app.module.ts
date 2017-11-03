import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyDirective} from './mydirective';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
