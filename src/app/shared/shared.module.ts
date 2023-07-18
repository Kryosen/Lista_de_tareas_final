import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    ButtonDeleteComponent,
    CheckBoxComponent,
    ToggleButtonComponent,
  ],
  imports: [CommonModule],
  exports: [CheckBoxComponent, ButtonDeleteComponent, ToggleButtonComponent],
})
export class SharedModule {}
