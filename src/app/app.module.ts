import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdderComponent } from './adder/adder.component';
import { ManagerComponent } from './manager/manager.component';
import { PresenterComponent } from './presenter/presenter.component';
import { CheckedDirective } from './directives/checked.directive';
import { TaskTrasformerPipe } from './pipes/task-trasformer.pipe';
import { SorterPipe } from './pipes/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    ManagerComponent,
    PresenterComponent,
    CheckedDirective,
    TaskTrasformerPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
