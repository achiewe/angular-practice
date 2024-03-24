import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDarkMode = false;

  onModeChanged(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    console.log(isDarkMode);
  }
}
