import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontApp'; // bu sayfa içinde yani .ts olan sayfa aslında typescript yani javascript düzenlemelerini yapacağın kısım
  // angular component dediğimiz paket dosyalar haline yapılarla düzenlenir. burası senin ana componentin 
  // title değişkeninin değerini html sayfasında dinamik olarak nasıl gösterdik anlamışsındır.
  // app içerisinde bir katman oluşturuyorum düzen için
  // yeni component açarken ng g c şeklinde kısaca kullanabilirsin komutu
}
