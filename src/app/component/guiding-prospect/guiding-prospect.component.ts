import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-guiding-prospect',
  templateUrl: './guiding-prospect.component.html',
  styleUrls: ['./guiding-prospect.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class GuidingProspectComponent   {
  @Input() safety: string;
  @Input() bodyText: string;
  @Input() pageNumber: string;

  constructor() { }

  

}
