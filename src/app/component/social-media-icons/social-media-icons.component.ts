import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { Social } from 'src/app/interface/social-media.interface';
import { UtilitiesService } from 'src/app/service/utilities.service';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule]
})
export class SocialMediaIconsComponent  implements OnInit {

  constructor(private utilities: UtilitiesService) { }

  ngOnInit() {}

  socials: Social[] = [
    {url: 'https://twitter.com', icon: '/assets/icon/logo-twitter.svg'},
    {url: 'https://whatsapp.com', icon: '/assets/icon/logo-whatsapp.svg'},
    {url: 'https://instagram.com', icon: '/assets/icon/logo-instagram.svg'},
    {url: 'https://youtube.com', icon: '/assets/icon/logo-youtube.svg'},
  ] 
  
  openAppStore(link: string){
    this.utilities.openCapacitorSite(link);
  }

}
