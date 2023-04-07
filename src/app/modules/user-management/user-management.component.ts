import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestRequestService } from 'src/app/services/test-request.service';
import { UserService } from 'src/app/services/user.service';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { UpdateModalComponent } from './modals/update-modal/update-modal.component';
import { ColDef } from 'ag-grid-community';
import { UpdateBtnCellRendererComponent } from './btn-cell-renderer/update-btn-cell-renderer.component';
import { DeleteBtnCellRendererCompopnent } from './btn-cell-renderer/delete-btn-cell-renderer.component';
import { interval, subscribeOn, timer } from 'rxjs';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  providers: [TestRequestService, UserService]

})
export class UserManagementComponent implements AfterViewInit {
  ngAfterViewInit(){
    timer(0,3000).subscribe(n=>this.getAllUsers());
  }
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

  userData: any[] = [];

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
  constructor (
    private userService: UserService,
    private modalService: NgbModal) {
      this.getAllUsers();
     
    }
 


  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (success: any) => {
       // this.userData = success.data;
       this.rowData = success.data;
      }
    )
  }
    
  public postCreateUsers(): void{  
    const data = {
      name: this.userForm.get('name')?.value,
      lastname: this.userForm.get('lastname')?.value,
      password:this.userForm.get('password')?.value,
      email:this.userForm.get('email')?.value,
      username:this.userForm.get('username')?.value
    }
    this.userData.push(data);

   /*this.userService.postCreateUsers(data).subscribe(
    (success:any)=> {
      this.userData=success.data;
    }
   )*/
  }
  public deluser(id: any) {
    let data = {
      id: id
    }
    console.log('data: ', data);
    console.log('id: ', id)
    this.userService.deluser(data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.getAllUsers();
      }
    })
  }
  public upuser(id:any) {
    let data ={
      id:id
    }
    console.log('data:', data );
    console.log('id:', id)
    this.userService.upuser(data).subscribe((res:any)=> {
      if (res.statusCode == 200){
        this.postCreateUsers();
      }
    })
  }
  public saveUser(): void{
   /* const userdata = {
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
    
    this.users.push(data);*/
    
  }
  // functional programming
  public deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  openuser(data: any) { 
    console.log(data);
		const modalRef = this.modalService.open(UpdateModalComponent, {size:'lg'});
		modalRef.componentInstance.modalform.reset(data) ;
    if(this.modalService.hasOpenModals()) {
      modalRef.componentInstance.modaldata.subscribe((param: any) => {
        param.value['id'] = data.id;
        this.userService.upuser(param.value).subscribe((success: any) => {
          console.log('updated');
          this.getAllUsers();
        })
      })
    }
	} 
  removeuser(data:any){
    console.log(data);
    const modalRef=this.modalService.open(DeleteModalComponent, {size:'lg'});
      modalRef.componentInstance.deldata.subscribe((param: any)=>{
        if (param == true) {
          const T = {
            id: data
          }
           this.userService.deluser(T).subscribe((success:any)=>{
            if(success.statusCode == 200) {
              this.getAllUsers();
            }
          })
        }
        
      })
    
  }
  public get _fControls() {
    return this.userForm.controls;
  }
  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
  }
  frameworkComponents = {
    updateBtnComponent: UpdateBtnCellRendererComponent,
    deleteBtnComponent:DeleteBtnCellRendererCompopnent
  }
  columnDefs: ColDef[] = [
    { 
      headerName:'İd',
      field: 'id' ,
      filter: 'agNumberColumnFilter'
    },
    { 
      field: 'name',
      filter: 'agTextColumnFilter'
    },
    {
      headerName:'LastName',
      field: 'lastname',
      filter: 'agTextColumnFilter'
     },
    { 
      headerName:'UserName',
      field: 'username',
      filter:' agTextColumnFilter' 
    },
    { 
      headerName:'Password',
      field: 'password',
      filter: 'agTextColumnFilter'
    },
    { 
      headerName: 'Email',
      field: 'email',
      filter:' agTextColumnFilter'  
    },
    {
      headerName: 'Edit',
      field: 'id',
      filter: false,
      width: 60,
      cellRenderer: 'updateBtnComponent',
      cellRendererParams: (params: any) => {
        return {
          params: params
        }
      }
    },
    {
      headerName:'Remove',
      field:'id',
      filter:false,
      width:120,
      cellRenderer:'deleteBtnComponent',
      cellRendererParams:(params:any)=>{
        return{
          params:params
        }
      }
    }
];
rowData = [
];
}
  



