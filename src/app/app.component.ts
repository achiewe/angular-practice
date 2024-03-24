import { Component, ViewEncapsulation } from '@angular/core';

interface Data {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public data: Data[] = [
    { id: '1', name: 'achi' },
    { id: '2', name: 'gena' },
    { id: '3', name: 'cxela' },
  ];
}
