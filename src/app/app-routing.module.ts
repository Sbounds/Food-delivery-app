import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
 // { path: '', redirectTo: 'dashboard-cust', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard-cust', loadChildren: './dashboard-cust/dashboard-cust.module#DashboardCustPageModule'},
  { path: 'dashboard-del', loadChildren: './dashboard-del/dashboard-del.module#DashboardDelPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'dashboard-res', loadChildren: './dashboard-res/dashboard-res.module#DashboardResPageModule' },
  { path: 'update-item', loadChildren: './update-item/update-item.module#UpdateItemPageModule' },
  { path: 'cust-cart', loadChildren: './cust-cart/cust-cart.module#CustCartPageModule' },
  { path: 'res-cart', loadChildren: './res-cart/res-cart.module#ResCartPageModule' },
  { path: 'checkout-modal', loadChildren: './checkout-modal/checkout-modal.module#CheckoutModalPageModule' },
  { path: 'dashboard-completed', loadChildren: './dashboard-completed/dashboard-completed.module#DashboardCompletedPageModule' },
  { path: 'res-history', loadChildren: './res-history/res-history.module#ResHistoryPageModule' },
  { path: 'cus-history', loadChildren: './cus-history/cus-history.module#CusHistoryPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
