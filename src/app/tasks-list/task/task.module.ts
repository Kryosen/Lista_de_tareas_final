import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskDescriptionComponent } from './task-description/task-description.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TaskComponent, TaskDescriptionComponent],
  imports: [CommonModule, SharedModule],
  exports: [TaskDescriptionComponent, SharedModule, TaskComponent],
})
export class TaskModule {}
