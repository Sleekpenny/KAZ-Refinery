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
      image:'https://images.unsplash.com/photo-1546185058-592ead754d27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kaz Refinery ',
      about: 'We are spider men in Refining',
    },
    {
      image:'https://plus.unsplash.com/premium_photo-1682144407366-83198874f4fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Refining of raw products',
      about: 'Ask the managing director',
    },
    {
      image:'https://images.unsplash.com/photo-1591004835879-ef7db87aabc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Refining to its purest form ',
      about: 'We are just a call away homie',
    },
    {
      image:'https://images.unsplash.com/photo-1556253253-7a17ff7de928?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kaz Kerosene ',
      about: 'They are obviously not like us homeie',
    },

    {
      image:'https://images.unsplash.com/photo-1556114846-f753bec8a9f5?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Kaz Petrochemicals',
      about: 'We have such an accommodating staff',
    },

  ];
}
