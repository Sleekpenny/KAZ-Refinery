import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-banner-attributes',
  templateUrl: './banner-attributes.component.html',
  styleUrls: ['./banner-attributes.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BannerAttributesComponent   {
  slide: string = "https://source.unsplash.com/factory-smoke-coming-out-from-factory--CwiIE7D5Qk/2000x1080";

  constructor() { }

  

}
