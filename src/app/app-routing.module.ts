import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  {
    path: 'main', canActivate: [authGuardGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'page-sign-in',
    loadChildren: () => import('./pages/page-sign-in/page-sign-in.module').then( m => m.PageSignInPageModule)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error-404/error-404.module').then( m => m.Error404PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
