import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PopOpenService } from 'src/app/service/pop-open.service';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';


@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss'],
    standalone: true,
    imports: [IonicModule]
})
export class ProfileHeaderComponent   {

  constructor(private popOpenService: PopOpenService) { }

  openPopup(event: any){
    this.popOpenService.presentPopover(event, ProfilePopoverComponent)
  }

}
