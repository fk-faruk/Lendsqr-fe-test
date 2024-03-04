import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';
import { CoupenListComponent } from './coupens/coupen-list/coupen-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: 'home',
        component: ProductsComponent
      },
      {
        path: 'employee',
        component: MediaComponent
      },
      {
        path: 'business-office/viewsols',
        component: CoupenListComponent
      }
    ]
  }
  // { path: 'media', component: MediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
