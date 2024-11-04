import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

// import { BodyComponent } from './Navbar/navbar.component';
import { NavbarComponent } from './Navbar/navbar.component'
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
// import { EditModalComponent } from './components/edit-modal/edit-modal.component';


@NgModule({
  declarations: [
    ModulesComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    MediaComponent,
    SublevelMenuComponent,
    UsersComponent,
    UsersTableComponent,
    FormModalComponent,
    UsersDetailsComponent,
    // EditModalComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
