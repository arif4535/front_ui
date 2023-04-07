import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
  providers: [ UserService],

})
export class UserGridComponent {
  constructor (
    private userService: UserService,
    ) {
      this.getAllUsers();
     
    }
  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (success: any) => {
        // this.userData = success.data;
        this.rowData = success.data
      }
    )
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
];

rowData = [];
}
  





