import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { VendorListingComponent } from './vendor-listing/vendor-listing.component';
import { AddNewListingComponent } from './add-new-listing/add-new-listing.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vendor', component: VendorListingComponent },
  { path: 'new-listing', component: AddNewListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
