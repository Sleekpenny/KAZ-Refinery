import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PopOpenService {
  popover: any;
  
  constructor( private popoverController: PopoverController) { }

  async presentPopover(e: Event, component: any) {
    if (this.popover) return;


    this.popover = await this.popoverController.create({
      component,
      event: e,  
      dismissOnSelect: true,
      showBackdrop: false,
      translucent: true,  
      animated: true,
      arrow: true,

    });

    await this.popover.present();

    const { role } = await this.popover.onDidDismiss();

    if (role || role == undefined) this.popover = null;
  }
}
