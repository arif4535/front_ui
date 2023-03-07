import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
  @Output() modaldata: EventEmitter<object>= new EventEmitter();

  deltedata(){
    this.modaldata.emit();
    this.activeModal.close('Close modal');
  }


}
