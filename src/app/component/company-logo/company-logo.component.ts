import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, RouterLink]
})
export class CompanyLogoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

