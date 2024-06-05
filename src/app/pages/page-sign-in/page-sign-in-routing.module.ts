import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSignInPage } from './page-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: PageSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSignInPageRoutingModule {}
