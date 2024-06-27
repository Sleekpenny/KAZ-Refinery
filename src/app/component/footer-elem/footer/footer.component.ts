import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel, IonIcon, IonList, IonItem, IonAccordionGroup, IonAccordion} from '@ionic/angular/standalone';
import { FooterList } from 'src/app/interface/footer.interface';
import { CompanyOffersComponent } from "../company-offers/company-offers.component";
import { CompanyLogoComponent } from "../../company-logo/company-logo.component";
import { SocialMediaIconsComponent } from "../../social-media-icons/social-media-icons.component";
import { CompanyTermOfOperationComponent } from "../company-term-of-operation/company-term-of-operation.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [IonAccordion, IonAccordionGroup, IonList, IonItem, IonIcon, IonLabel, CommonModule, CompanyOffersComponent, CompanyLogoComponent, SocialMediaIconsComponent, CompanyTermOfOperationComponent]
})

export class FooterComponent implements OnInit {

  footerContent: FooterList[] = [
    {
      title: 'About MishPro',
      content: [
        'About Us', 
        'Where to Buy', 
        'O-CLUB', 
        'Explorer Point Program'
      ],
    },
    {
      title: 'Terms',
      content: [
        'Warranty',
        'Shipping & Delivery',
        'Return & Refund Policy',
        'Terms & Conditions',
        'Privacy Policy',
      ],
    },
    {
      title: 'Get Help',
      content: [
        'Track Order',
        'Visit Carlcare',
        'Contact Us',
        'Online Shopping Guide',
        'Product Authentication',
      ],
    },
    {
      title: 'Service',
      content: [
        'Find a Store', 
        'XCLUB', 
        'XPark', 
        'XOS'
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
