import { NgStyle } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent {
  @Input()
  options: string[] = [];

  @Input()
  minOptionWidth: number = 100;

  @Input()
  optionsGap: number = 100;

  @Output() changeChosenEvent = new EventEmitter<MatRadioChange>();

  chosen: string | null = null;

  getRadioGridContainerStyyle(): NgStyle['ngStyle'] {
    return {
      'grid-template-columns': `repeat(auto-fill, minmax(${this.minOptionWidth}px, 1fr))`,
      'grid-gap': `${this.optionsGap}px`,
    };
  }

  handleChangeChosen(value: MatRadioChange) {
    this.changeChosenEvent.emit(value);
  }
}
