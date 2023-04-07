import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServiceAppComponent } from './modules/service-app/service-app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { FormPageAppComponent } from './modules/form_page/form-page-app/form-page-app.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { UpdateModalComponent } from './modules/user-management/modals/update-modal/update-modal.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';
import { RegisterComponent } from './modules/register/register.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { UpdateBtnCellRendererComponent } from './modules/user-management/btn-cell-renderer/update-btn-cell-renderer.component';
import { DeleteBtnCellRendererCompopnent } from './modules/user-management/btn-cell-renderer/delete-btn-cell-renderer.component';
import { UserGridComponent } from './modules/user-management/user-grid/user-grid.component';
import { NgChartsModule } from 'ng2-charts';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
registerLocaleData(en);



// burası oluşan ve sonradan import ettiğimiz modüllerin tanımlandığı yer. dışarıdan yada oluşturduğun tüm modüller burda otomatik tanımlanır
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ServiceAppComponent,
    FormPageAppComponent,
    UserManagementComponent,
    UpdateModalComponent,
    ProductsCardComponent,
    AuthPageComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UpdateBtnCellRendererComponent,
    DeleteBtnCellRendererCompopnent,
    UserGridComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:"toast-center-center",
      preventDuplicates:true
    }),
    BrowserAnimationsModule,
    NgChartsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
