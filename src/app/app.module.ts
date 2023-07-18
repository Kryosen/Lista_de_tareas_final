import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { TaskAddModule } from './task-add/task-add.module';
import { SharedModule } from './shared/shared.module';
import { TasksListModule } from './tasks-list/tasks-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    TaskAddModule,
    SharedModule,
    TasksListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
