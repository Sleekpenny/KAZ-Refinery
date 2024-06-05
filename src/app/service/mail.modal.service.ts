import { Injectable, model } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MailPlatformComponent } from '../component/mail-platform/mail-platform.component';

@Injectable({
  providedIn: 'root'
})
export class MailModalService {

  constructor(private mailController: ModalController) { }

  async presentModal(){
    const modal = await this.mailController.create({
      component: MailPlatformComponent,
      cssClass:'my-custom-class'
    })
    return await modal.present();
  }
}
