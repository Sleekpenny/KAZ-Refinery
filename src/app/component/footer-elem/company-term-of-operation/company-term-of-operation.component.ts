import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-company-term-of-operation',
  templateUrl: './company-term-of-operation.component.html',
  styleUrls: ['./company-term-of-operation.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class CompanyTermOfOperationComponent  implements OnInit {
    
  date: Date = new Date();

  constructor() { }

  ngOnInit() {}

}
