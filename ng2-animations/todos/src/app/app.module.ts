import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './examples/examples.component';
import { HowtoComponent } from './howto/howto.component';
import { routes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    ExamplesComponent,
    HowtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
