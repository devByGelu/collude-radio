import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options1: string[] = ['one', 'two', 'three'];
  minOptionWidth: number = 100;
  optionsGap: number = 20;
  handleChangeChosenFilmCategory(chosen: MatRadioChange) {
    // alert(chosen.value);
  }
}
