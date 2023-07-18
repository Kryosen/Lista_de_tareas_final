import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskAddComponent, ButtonAddComponent, TaskInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [ButtonAddComponent, TaskInputComponent, TaskAddComponent],
})
export class TaskAddModule {}
