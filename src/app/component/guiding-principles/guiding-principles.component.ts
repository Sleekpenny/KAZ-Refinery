import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GuidingProspectComponent } from "../guiding-prospect/guiding-prospect.component";

@Component({
    selector: 'app-guiding-principles',
    templateUrl: './guiding-principles.component.html',
    styleUrls: ['./guiding-principles.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule, GuidingProspectComponent]
})
export class GuidingPrinciplesComponent   {

  constructor() { }

  

}
