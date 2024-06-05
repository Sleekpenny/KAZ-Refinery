import { Component } from '@angular/core';
import { IonList, IonItem, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from 'src/app/directive/sharedmodule.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { MailModalService } from 'src/app/service/mail.modal.service';

@Component({
  selector: 'app-profile-popover',
  templateUrl: './profile-popover.component.html',
  styleUrls: ['./profile-popover.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedDirectiveModule ]
})
export class ProfilePopoverComponent   {

  constructor(private router: Router, private authService: AuthGuardService, private mailModal: MailModalService) { }

  SignOut(){
    this.authService.logOut();
    this.router.navigate(['/page-sign-in'])
  }

  openModalMail(){
    this.mailModal.presentModal();
  }
}
