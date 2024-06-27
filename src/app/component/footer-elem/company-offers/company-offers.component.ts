import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonLabel, IonAccordion, IonItem, IonAccordionGroup } from '@ionic/angular/standalone';
import { FooterList } from 'src/app/interface/footer.interface';

@Component({
  selector: 'app-company-offers',
  templateUrl: './company-offers.component.html',
  styleUrls: ['./company-offers.component.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonItem, IonAccordion, IonLabel, CommonModule]
})
export class CompanyOffersComponent  implements OnInit {

  @Input() footer:FooterList;

  constructor() { }

  ngOnInit() {}

}
