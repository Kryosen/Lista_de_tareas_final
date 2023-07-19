import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss'],
})
export class ButtonDeleteComponent {
  @Input() btnName: string = '';
}
