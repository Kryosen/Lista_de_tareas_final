import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent {
  @Output() changeall = new EventEmitter<string>();

  inputValue: any;

  makeChange() {
    this.changeall.emit(
      (<HTMLInputElement>document.getElementById('inputTask')).value
    );
    this.inputValue = '';
  }
}
