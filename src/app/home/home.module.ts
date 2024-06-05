import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LogoComponent } from "../component/logo/logo.component";
import { ProfileHeaderComponent } from "../component/profile-header/profile-header.component";
import { SharedDirectiveModule } from '../directive/sharedmodule.module';


@NgModule({
    declarations: [HomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        LogoComponent,
        ProfileHeaderComponent,
        SharedDirectiveModule
    ]
})
export class HomePageModule {}
