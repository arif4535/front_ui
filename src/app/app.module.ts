import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServiceAppComponent } from './modules/service-app/service-app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormPageAppComponent } from './modules/form_page/form-page-app/form-page-app.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { UpdateModalComponent } from './modules/user-management/modals/update-modal/update-modal.component';


// burası oluşan ve sonradan import ettiğimiz modüllerin tanımlandığı yer. dışarıdan yada oluşturduğun tüm modüller burda otomatik tanımlanır
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServiceAppComponent,
    FormPageAppComponent,
    UserManagementComponent,
    UpdateModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
