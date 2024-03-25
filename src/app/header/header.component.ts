import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  ischecked = false;
  @Output() modeChanged: EventEmitter<boolean> = new EventEmitter();

  changeMode() {
    this.ischecked = !this.ischecked;
    this.modeChanged.emit(this.ischecked);
  }
}
