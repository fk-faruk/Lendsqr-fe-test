import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { routeGuard } from '../services/authguard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: '',
    component: ModulesComponent,
    children: [
    
      // {
      //   path: 'employee',
      //   component: MediaComponent
      // },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [routeGuard]
      },
      {
        path: 'user-profile',
        component: UsersDetailsComponent,
        canActivate: [routeGuard]
      }
    
    ]
  },

  
  // { path: 'media', component: MediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
