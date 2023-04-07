import { Component } from '@angular/core';
import { TestRequestService } from 'src/app/services/test-request.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-service-app',
  templateUrl: './service-app.component.html',
  styleUrls: ['./service-app.component.scss'],
  providers: [TestRequestService]
})
export class ServiceAppComponent {
  testservice: any;
  users: any;

  // di
  constructor (private service: TestRequestService,
    private toastr:ToastrService 
    ) {}

  testData: any = [
    {
      id: 0,
      username: 'user1'
    },
    {
      id: 1,
      username: 'user2'
    }
  ];
  
  click(): void {
    this.service.apiRequest().subscribe(
      (success: any) => {
        console.log(success);
      },
      (error: any) => {
        console.error();
      }
    )
    }
  
  public get(): void {
    this.service.apiRequest().subscribe((success: any)=>{
      console.log(success);
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  postData: any = {id: 5, username: 'testtest'}
  public post():void{
    this.service.postReq(this.postData).subscribe((success:any)=>{
      console.log(success);
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  updateData:any={id:0,username:'arif'}
  public postUpdate():void{
    this.service.putReq(this.updateData).subscribe((success:any)=>{
      console.log(success);
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  deleteData:any={id:5,}
  public deleted():void{
    this.service.deleteReq(this.deleteData).subscribe((success:any)=>{
      console.log(success);
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
 
  
  // post ...

}
