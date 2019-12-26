import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdderComponent } from './adder/adder.component';
import { ManagerComponent } from './manager/manager.component';
import { PresenterComponent } from './presenter/presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    ManagerComponent,
    PresenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
