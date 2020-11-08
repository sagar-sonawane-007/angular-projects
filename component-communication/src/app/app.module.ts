import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineModule } from './line/line.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
