import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, SharedModule],
  exports: [SharedModule, TaskComponent],
})
export class TaskModule {}
