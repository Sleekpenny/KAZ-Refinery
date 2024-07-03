import { Component, ViewChild } from '@angular/core';
import { MenuItems } from '../interface/menu-items';
import { Observable } from 'rxjs';
import { ScreenHelperService } from '../service/screen-helper.service';
import { PopOpenService } from '../service/pop-open.service';
import { ProfilePopoverComponent } from '../component/profile-popover/profile-popover.component';
import { NavDropdownEnvironmentComponent } from '../component/nav-dropdown-environment/nav-dropdown-environment.component';
import { NavDropdownServiceComponent } from '../component/nav-dropdown-service/nav-dropdown-service.component';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild("popover") popover;

  handleClick(event) {
   console.log('Bottom Clicked' + event)
  }

  isDesktop: Observable<any>;
  Open: boolean = false;  
  selectedItem = null;
  menuOpen: boolean = true;

  constructor(private screenHelperSrv: ScreenHelperService, private popOpenService: PopOpenService, private menuCtrl: MenuController) {
   this.isDesktop =  this.screenHelperSrv.getIsDesktopView;
   }

  
  menuItem:MenuItems[] = [
  {path:'welcome', title: 'Home', dropDown: false},
  {path:'', title: 'About', dropDown: false},
  {path:'', title: 'Service', dropDown: true, open: false,
   subItems: [
      {path:'', lists: 'Production'},
      {path:'', lists: 'PetroChemical'},
      {path:'', lists: 'Drilling & Exploration'}
   ]},
  {path:'', title: 'Environment', dropDown: true, open: false, 
   subItems:[
      {path:'', lists:'Safety'},
      {path:'', lists:'Social Responsibility'},
      {path:'', lists:'Social Policies'}
   ]},
  {path:'', title: 'Contact Us'}
 ] 


 openPopupService(event: any){
    this.popOpenService.presentPopover(event, NavDropdownServiceComponent)
 }

 openPopupEnvionment(event: any){
    this.popOpenService.presentPopover(event, NavDropdownEnvironmentComponent)
 }

 toggleDropDown(event, p){
   event.stopPropagation();

   if (this.selectedItem && this.selectedItem !== p) {
      this.selectedItem.open = false;
   }

   p.open = !p.open;
   this.selectedItem = p.open ? p: null;
 }

 closeMenu() {
   this.menuCtrl.close();
 }
 
}
