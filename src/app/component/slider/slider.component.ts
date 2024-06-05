import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
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

  public sliderConfig: SwiperOptions = {
    modules: [Pagination, Navigation, EffectFade, Autoplay],
    autoHeight: true,
    spaceBetween: 20,
    navigation: true,
    autoplay: {delay: 250, disableOnInteraction: false},
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }

 images: sliderItems[] = [
    {image: "https://source.unsplash.com/gray-and-black-factory-under-blue-sky-during-daytime-9U0vAXekzgU/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://source.unsplash.com/grayscale-photo-of-high-rise-building-wOBeY8IqJQE/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://source.unsplash.com/white-and-brown-factory-during-day-wW5854gAm1c/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://source.unsplash.com/factory-smoke-coming-out-from-factory--CwiIE7D5Qk/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    {image: "https://source.unsplash.com/a-factory-building-with-a-sky-background-ceIrXAEZj4U/2000x1080", title:'Kaz Address ', about: ' Ask the managing director' },
    ]

  

}
