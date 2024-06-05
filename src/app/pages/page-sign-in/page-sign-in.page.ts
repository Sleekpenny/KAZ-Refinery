import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.page.html',
  styleUrls: ['./page-sign-in.page.scss'],
})
export class PageSignInPage  {

  constructor(private authService: AuthGuardService, private router: Router) { }

  signIn(){
    this.authService.logIn();
    this.router.navigate(['/main'])
  }

}
