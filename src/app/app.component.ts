import { Component } from '@angular/core';

@Component({
  selector: 'renmoney-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayModal = false;

  toggleDisplayModal(): void {
    this.displayModal = !this.displayModal;
  }
}
