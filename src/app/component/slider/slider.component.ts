import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { sliderItems } from 'src/app/interface/menu-items';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  //encapsulation: ViewEncapsulation.None,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent   {

  constructor() { }


 images: sliderItems[] = [
    {image: "https://source.unsplash.com/factory-smoke-coming-out-from-factory--CwiIE7D5Qk/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://source.unsplash.com/https://unsplash.com/photos/white-and-brown-factory-during-day-wW5854gAm1c", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://cdn-img.oraimo.com/2023/12/14/banner-l1.jpg", title:'Kaz Address ', about: ' Ask the managing director' },
    ]

  

}
