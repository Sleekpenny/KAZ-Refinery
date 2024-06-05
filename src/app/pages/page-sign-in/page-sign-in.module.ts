import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSignInPageRoutingModule } from './page-sign-in-routing.module';

import { PageSignInPage } from './page-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSignInPageRoutingModule
  ],
  declarations: [PageSignInPage]
})
export class PageSignInPageModule {}
