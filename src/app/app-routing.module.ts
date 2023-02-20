import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageAppComponent } from './modules/form_page/form-page-app/form-page-app.component';
import { ServiceAppComponent } from './modules/service-app/service-app.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'test_service', component: ServiceAppComponent },
  { path: 'form_page', component: FormPageAppComponent},
  { path: 'user_management', component:UserManagementComponent},
  { path: 'new_api' , component: UserManagementComponent},
];

// burası routing işleminin yapıldığı yer yani adresleme işlemleri
// örneğin bir sayfaya gideceğiz burda yapıyoruz. oluşturduğumuz sayfayı burda route ekleyerek gösterelim

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
