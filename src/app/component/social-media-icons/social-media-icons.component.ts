import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { Social } from 'src/app/interface/socials.interface';
import { UtilitiesService } from 'src/app/service/utilities.service';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss'],
  standalone: true,
  imports: [IonIcon, CommonModule]
})
export class SocialMediaIconsComponent   {

  constructor(private utilities: UtilitiesService) { }

  

  socials: Social[] = [
    {url: 'https://twitter.com', icon: 'logo-twitter'},
    {url: 'https://whatsapp.com', icon: 'logo-whatsapp'},
    {url: 'https://instagram.com', icon: 'logo-instagram'},
    {url: 'https://youtube.com', icon: 'logo-youtube'},
  ] 
  
  openAppStore(link: string){
    this.utilities.openCapacitorSite(link);
  }

}
