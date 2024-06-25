import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sponsor-companies',
  templateUrl: './sponsor-companies.component.html',
  styleUrls: ['./sponsor-companies.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SponsorCompaniesComponent  implements OnInit {

  imageScroller: any = [ 
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
    'assets/images/ehud-neuhaus-wW5854gAm1c-unsplash.jpg',
  ]

  constructor() { }

  ngOnInit() {}

}
