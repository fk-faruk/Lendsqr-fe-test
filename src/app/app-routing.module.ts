import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' },
  { path: 'auth/signin', component: AuthComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/modules.module').then((m) => m.ModulesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
