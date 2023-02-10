import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
];

// burası routing işleminin yapıldığı yer yani adresleme işlemleri
// örneğin bir sayfaya gideceğiz burda yapıyoruz. oluşturduğumuz sayfayı burda route ekleyerek gösterelim

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
