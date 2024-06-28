import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class LatestComponent {
  images: any = [
    {
      image:
        'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern Refinery',
    },
    {
      image:
        'https://images.unsplash.com/photo-1589725971211-7e86a631e2c2?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Products Chambers',
    },
    {
      image:
        'https://images.unsplash.com/photo-1579053335340-bbeb51aa27c3?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern Refinery',
    },
    {
      image:
        'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mid Flair',
    },
    {
      image:
        'https://images.unsplash.com/photo-1612780732269-8bff5f08fcf3?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Distillation Chamber',
    },
    {
      image:
        'https://images.unsplash.com/photo-1573153178631-49e3aa9e018b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Steaming Chambers',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1664695369039-d66c788cd2f0?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Construction Site',
    },
    {
      image:
        'https://images.unsplash.com/photo-1611581372056-30cf28a7bd2e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Refinery Plantation',
    },
  ];
  constructor() {}
}
