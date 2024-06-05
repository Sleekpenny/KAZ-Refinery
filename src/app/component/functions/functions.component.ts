import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedDirectiveModule } from 'src/app/directive/sharedmodule.module';
import { functionItems } from 'src/app/interface/menu-items';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, SharedDirectiveModule]
})
export class FunctionsComponent   {

  constructor() { }

  items:functionItems[] = [
    {image:"assets/svg/service-flasks.svg", 
    title:"PETROCHEMICALS", 
    body:"In 2019, Our company processed 778.0 Mt of raw materials and produced 475.0 thousand tons of saleable products: high density polyethylene, ethylene, propylene, styrene, polystyrene, benzene, and etc.", 
    path:""},
    {image:"assets/svg/service-oil.svg", 
    title:"PIPELINES", 
    body:"We operate large offshore hydrocarbon assets in Kazakhstan, manage one of the world's largest integrated oil processing terminals and pipeline links to regional and world markets. Our pipelines export oil to the world markets", 
    path:""},
    {image:"assets/svg/service-tower.svg", 
    title:"EXPLORATION AND DRILLING", 
    body:"Kaz Refinery Oil makes it rhough theuse of cutting-edge downhold equipment, remote onlien monitoring technology, and organisational technologies directed at optimising the drilling process and reducing costs", 
    path:""},
    {image:"assets/svg/service-transformer.svg",
     title:"PRODUCTION", 
     body:"In production & operations (P&O) we find and develop hydrocarbon resources, operate oil and gas production assets, as well as refineries, pipelines and terminal around the world. We make it - safely, cleanly and efficiently", 
     path:""},
  ]

}
