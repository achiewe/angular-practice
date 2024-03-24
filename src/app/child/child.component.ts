import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() public x: string = '';
  @Output() public dataFromChild: EventEmitter<any> = new EventEmitter();

  sendData() {
    this.dataFromChild.emit('hello from child component');
  }
}
