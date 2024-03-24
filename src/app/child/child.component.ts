import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildComponent {}
