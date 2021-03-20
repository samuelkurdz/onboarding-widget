import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'renmoney-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalState(): void {
    this.closeModal.emit(false);
  }

}
