import { Component  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent{
  constructor(public activeModal: NgbActiveModal) {}

  modalform = new FormGroup({
     lastName: new FormControl('', [Validators.required]),
     name: new FormControl('', [Validators.required]),
     username:new FormControl('',[Validators.required]),
     password:new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required, Validators.email]),
   })
   
}
