import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductionPageRoutingModule } from './production-routing.module';

import { ProductionPage } from './production.page';
import { SharedDirectiveModule } from 'src/app/directive/sharedmodule.module';
import { FooterComponent } from "../../component/footer-elem/footer/footer.component";

@NgModule({
    declarations: [ProductionPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductionPageRoutingModule,
        SharedDirectiveModule,
        FooterComponent
    ]
})
export class ProductionPageModule {}
