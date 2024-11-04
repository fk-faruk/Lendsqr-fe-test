import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { MediaComponent } from './media/media.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

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
        component: UsersComponent
      },
      {
        path: 'user-profile',
        component: UsersDetailsComponent
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
