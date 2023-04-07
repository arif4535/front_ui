import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateModalComponent } from '../modals/update-modal/update-modal.component';

@Component({
  selector: 'app-update-btn-cell-renderer',
  template: `
    <button class="btn btn-primary" (click)="openModal()">
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </button>
  `,
  // styleUrls: ['./update-btn-cell-renderer.component.scss']
})
export class UpdateBtnCellRendererComponent {

  constructor(
    private modalService: NgbModal
  ){}
  param: any;
  agInit(param: any): void {
    this.param = param['value'];
  }
  openModal() {
    const modalRef = this.modalService.open(UpdateModalComponent, {size:'lg'});
		// modalRef.componentInstance.modalform.reset(data) ;
    // if(this.modalService.hasOpenModals()) {
    //   modalRef.componentInstance.modaldata.subscribe((param: any) => {
    //     param.value['id'] = data.id;
    //     this.userService.upuser(param.value).subscribe((success: any) => {
    //       console.log('updated');
    //       this.getAllUsers();
    //     })
    //   })
    // }
  }
}

