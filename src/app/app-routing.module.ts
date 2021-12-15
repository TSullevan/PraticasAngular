import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { MasterPageComponent } from './shared/pages/master-page/master-page.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

const desktopRoutes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    loadChildren: () => import('./shared/shared.module').then(module =>module.SharedModule)
  }
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];


@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes]), ChartModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...desktopRoutes, ...defaultRoutes]);
  }
 }
