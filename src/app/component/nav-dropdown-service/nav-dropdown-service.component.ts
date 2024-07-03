import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from 'src/app/directive/sharedmodule.module';

@Component({
  selector: 'app-nav-dropdown-service',
  templateUrl: './nav-dropdown-service.component.html',
  styleUrls: ['./nav-dropdown-service.component.scss'],
  standalone:true,
  imports: [CommonModule, IonicModule, SharedDirectiveModule]
})
export class NavDropdownServiceComponent   {

  constructor() { }

  

}
