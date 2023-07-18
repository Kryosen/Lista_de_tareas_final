import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chech-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent {
  @Output() newItemEvent = new EventEmitter<boolean>();

  checkStatus(value: any) {
    this.newItemEvent.emit(value.target.checked);
  }
}
