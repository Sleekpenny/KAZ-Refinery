import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { SliderComponent } from "../../component/slider/slider.component";
import { OurServicesComponent } from "../../component/our-services/our-services.component";
import { FunctionsComponent } from 'src/app/component/functions/functions.component';
import { CompanyAboutComponent } from 'src/app/component/company-about/company-about.component';
import { GuidingPrinciplesComponent } from "../../component/guiding-principles/guiding-principles.component";
import { BannerAttributesComponent } from "../../component/banner-attributes/banner-attributes.component";
import { LatestComponent } from "../../component/latest/latest.component";
import { SponsorCompaniesComponent } from "../../component/sponsor-companies/sponsor-companies.component";
import { FooterComponent } from "../../component/footer-elem/footer/footer.component";

@NgModule({
    declarations: [WelcomePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WelcomePageRoutingModule,
        SliderComponent,
        OurServicesComponent,
        FunctionsComponent,
        CompanyAboutComponent,
        GuidingPrinciplesComponent,
        BannerAttributesComponent,
        LatestComponent,
        SponsorCompaniesComponent,
        FooterComponent
    ]
})
export class WelcomePageModule {}
