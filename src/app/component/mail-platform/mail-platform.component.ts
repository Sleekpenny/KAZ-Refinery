import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { mailService } from 'src/app/interface/menu-items';

@Component({
  selector: 'app-mail-platform',
  templateUrl: './mail-platform.component.html',
  styleUrls: ['./mail-platform.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MailPlatformComponent   {

  constructor(private modalController: ModalController) { }

  mailServices: mailService[]  = [
    {url: 'http://mail.google.com/', name: "Gmail", icon:'assets/icon/images.png'},
    {url: 'http://outlook.live.com/', name: "Yahoo", icon:'yahoo'},
    {url: 'http://mail.yahoo.com/', name: "Outlook", icon:'outlook'},
  ]

  dismissModal() {
    this.modalController.dismiss();
  }

  sendMail(mail){
    window.open(mail, '_blank');
    this.dismissModal();
  }

}
