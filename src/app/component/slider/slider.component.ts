import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { sliderItems } from 'src/app/interface/menu-items';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent {
  constructor() {}

  images: sliderItems[] = [
    {
      image:'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
      title: 'Kaz Address ',
      about: 'Ask the managing director',
    },
    {
      image:'assets/images/cristina-gavrila-Ve_QjaM54OA-unsplash.jpg',
      title: 'Kaz Address ',
      about: 'Ask the managing director',
    },
    {
      image:'assets/images/patrick-hendry-6xeDIZgoPaw-unsplash.jpg',
      title: 'Kaz Address ',
      about: 'Ask the managing director',
    },
    {
      image:'assets/images/eduardo-cano-photo-co-7OML-RUYSA4-unsplash.jpg',
      title: 'Kaz Address ',
      about: 'Ask the managing director',
    },

    {
      image:'assets/images/andre-robillard-IUwLkxL49co-unsplash.jpg',
      title: 'Kaz Address ',
      about: 'Ask the managing director',
    },

  ];
}
