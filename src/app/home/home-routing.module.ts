import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../pages/welcome/welcome.module').then( m => m.WelcomePageModule)
      },
      {
        path: 'production',
        loadChildren: () => import('../pages/production/production.module').then( m => m.ProductionPageModule)
      },
      {
        path: '',
        redirectTo: '/main/welcome',
        pathMatch: 'full',
      },
      {
        path: '**',
        loadChildren: () => import('../pages/error-404/error-404.module').then( m => m.Error404PageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
