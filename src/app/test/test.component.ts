import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
test='container text-center';

title: any;
quantity:number=1;
i=1
plus(){
  if(this.i !=5){
    this.i++;
    this.quantity=this.i;
  }
}
minus(){
  if(this.i !=1){
    this.i--;
    this.quantity=this.i;
  }
}

}
