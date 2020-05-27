import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
