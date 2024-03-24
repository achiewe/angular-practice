import { Component, ViewEncapsulation } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: Item[] = [
    { descripiton: 'davurekav vigacas', done: false },
    { descripiton: 'vedzaxis genas', done: true },
    { descripiton: 'ar vedzaxi aravis', done: false },
  ];
}
