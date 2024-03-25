import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrl: './input-filter.component.scss',
})
export class InputFilterComponent {
  @Input() isDarkMode: boolean = false;
}
