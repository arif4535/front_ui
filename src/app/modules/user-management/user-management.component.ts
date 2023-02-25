import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestRequestService } from 'src/app/services/test-request.service';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  providers: [TestRequestService]
})
export class UserManagementComponent {
  users: any[] = [
    {
      id: 0,  
      name: 'arif',
      lastname: 'değirmenci',
      username:'arif45',
      password:'123456',
      email:'arif@gmail.com'
    },
    {
      id: 1,  
      name: 'denem',
      lastname: 'deneme',
      username:'denemeeee',
      password:'dene',
      email:'deneme@gmail.com'
    },
  ]
   userForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    username:new FormControl('',[Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    password:new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })
  constructor (private service: TestRequestService, private modalService: NgbModal) {}
  public saveUser(): void{
    const data = {
      name: this.userForm.get('name')?.value,
      lastName: this.userForm.get('lastname')?.value,
      password:this.userForm.get('password')?.value,
      email:this.userForm.get('email')?.value,
      username:this.userForm.get('username')?.value
    }
    // this.service.newReq(data).subscribe((success:any)=>{
    //    console.log(success) 

    //  },
    //  (error:any)=>{
    //    console.log(error);
    //  });
    
    this.users.push(data);
    
  }
  // functional programming
  public deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  open(data: any) {
		const modalRef = this.modalService.open(UpdateModalComponent, {size:'lg'});
		modalRef.componentInstance.modalform.reset(data) ;
    if(this.modalService.hasOpenModals()) {
      modalRef.componentInstance.modaldata.subscribe((param: any) => {
        this.users[data.id]['username'] = param.get('username')?.value;
      })
    }

	} 
  public get _fControls() {
    return this.userForm.controls;
  }
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
  }
}
