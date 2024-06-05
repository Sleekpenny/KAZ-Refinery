import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.page.html',
  styleUrls: ['./error-404.page.scss'],
})
export class Error404Page  {

  errorMessage:string;

  constructor(private route:ActivatedRoute) { 
    this.errorMessage = this.route.snapshot.params['data']
  }

  

}
