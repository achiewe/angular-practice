import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public parentText: string = 'parent text from component.ts';
  public textFromParent: string = 'text from parent';
  public textFromChild: string = '';

  dataFromChild($event: any) {
    this.textFromChild = $event;
    console.log($event);
  }
}
