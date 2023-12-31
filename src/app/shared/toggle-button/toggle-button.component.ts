import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  @Output() alert: EventEmitter<string> = new EventEmitter();

  onThemeSwitchChange() {
    this.alert.emit();
  }
}
