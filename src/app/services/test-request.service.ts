import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestRequestService {

  // dependency injection
  constructor(
    private _http: HttpClient
  ) { }

  public apiRequest(): any {
    return this._http.get('http://localhost:3000/get_angular').pipe(map((res: any) => res));
  }

  public postReq(data: any) : any{
    // code here...
    return this._http.post('http://localhost:3000/post_angular', data).pipe(map((res: any) => {
      return res;
    }));
  }

  public putReq(data:any): any {
    return this._http.post('http://localhost:3000/update_angular',data) .pipe(map((res:any)=>{
      return res;
    }));

  }

  public deleteReq(data:any): any {
    return this._http.delete('http://localhost:3000/delete_angular', data).pipe(map((res: any) => {
      return res;
    }));

  }
}
