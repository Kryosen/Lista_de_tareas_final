import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  @Output() sendTask = new EventEmitter<string>();

  task = '';

  listenChange(value: string) {
    this.task = value;
    this.makeChange();
  }

  makeChange() {
    this.sendTask.emit(this.task);
  }
}
