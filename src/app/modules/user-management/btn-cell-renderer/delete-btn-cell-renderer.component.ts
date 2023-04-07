import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
@Component({
    selector: `app-delete-btn-cell-renderer`,
    template: `
    <button class="btn btn-danger" (click)="removeuser()">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    `,
})
export class DeleteBtnCellRendererCompopnent {
    constructor(
        private modalService: NgbModal
      ){}
      param: any;
      agInit(param: any): void {
        this.param = param['value'];
      }
    removeuser(){
        const modalRef=this.modalService.open(DeleteModalComponent, {size:'lg'});
    }
}