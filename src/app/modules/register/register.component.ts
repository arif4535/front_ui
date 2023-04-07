import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestRequestService } from 'src/app/services/test-request.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [TestRequestService, UserService]

})
export class RegisterComponent {
  userData:any [] = [];

  registerform = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    username:new FormControl('',[Validators.required,Validators.minLength(4),
      Validators.maxLength(20)]),
    password:new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })
  constructor (private service: TestRequestService,     private userService: UserService,
    private modalService: NgbModal) {}
  public postCreateUsers(): void{  
    const data = {
      name: this.registerform.get('name')?.value,
      lastname: this.registerform.get('lastname')?.value,
      password:this.registerform.get('password')?.value,
      email:this.registerform.get('email')?.value,
      username:this.registerform.get('username')?.value
    }
    this.userService.postCreateUsers(data).subscribe(
      (success:any)=> {
        this.userData=success.data;
      }
     )
  }
 
  public get _fControls() {
    return this.registerform.controls;
  }
  
  onSubmit() {
    if (this.registerform.invalid) {
      return;
    }
  }

}
