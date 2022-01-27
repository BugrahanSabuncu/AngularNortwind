import { Component } from '@angular/core';
//component bileşen demektir.
//angularda component html'in datasını yönettiğimiz yerdir.
//@ işareti ile deklarasyon tanımlar bunlar attribute'lar gibi çalışırlar.
//deklerasyonlar class'a çalışma anında anlam yüklemeye yarar.
//Bir imza niteliği taşır attribute gibi
// {} => demek obje demektir.

@Component({
  selector: 'app-root', //index html'deki app-root buradan gelir.
  //selector içine yazılan html tagı olarak kullanılabilir.
  templateUrl: './app.component.html', //nerenin compenenti olduğunu bildirir.
  styleUrls: ['./app.component.css']
  //[] js'de array demek.Birden fazla css ekleme... ./ aynı klasör demek.
})
export class AppComponent {
  title: string = 'nortwind';
  
}
