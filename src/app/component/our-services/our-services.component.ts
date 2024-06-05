import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class OurServicesComponent   {

  constructor() { }

  textBody: string = "Oil products supplied by us meet all Kazakhstan and international quality standards, have all the necessary certificates of conformity and meet the most stringent requirements. All this is possible thanks to the continuous improvement of working conditions, technologies, optimization of the production process and equipment upgrades at our refineries"
  

}
