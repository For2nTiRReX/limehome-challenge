import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
