import { Component,Input  } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

// @Component({
// 	selector: 'ngbd-offcanvas-content',
// 	template: `
// 		<div class="offcanvas-header">
// 			<h5 class="offcanvas-title ">Menu</h5>
// 			<button
// 				type="button"
// 				class="btn-close text-reset"
// 				aria-label="Close"
// 				(click)="activeOffcanvas.dismiss('Cross click')"
// 			></button>
//       </div>
// 		<div class="offcanvas-body">
// 			<div>
//       <ul class="navbar-nav me-auto  mb-lg-0">
//           <li class="nav-item ">
//             <a class="nav-link" href="http://localhost:4200/user_management" >
//             <i class="fa fa-home fa-lg p-2" aria-hidden="true"></i> 
//             Anasayfa</a>
//           </li>
//           <li class="nav-item" >
//             <a class="nav-link" href="http://localhost:4200/card">
//             <i class="fa fa-shopping-bag fa-lg p-2" aria-hidden="true"></i>Products <span class="sr-only"></span></a> 
//           </li>
//         </ul>
//       </div>
// 		</div>
// 	`,
// })
// export class NgbdOffcanvasContent {
// 	@Input() name: any;

// 	constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
// }



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
	
})
export class HeaderComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

	// open() {
	// 	const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
	
	//}
	isCollapsed = false;



}
