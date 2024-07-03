import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from 'src/app/directive/sharedmodule.module';

@Component({
  selector: 'app-nav-dropdown-environment',
  templateUrl: './nav-dropdown-environment.component.html',
  styleUrls: ['./nav-dropdown-environment.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SharedDirectiveModule]
})
export class NavDropdownEnvironmentComponent   {

  constructor() { }

  

}
