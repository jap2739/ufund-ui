import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedsComponent } from './needs/needs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedDetailComponent } from './need-detail/need-detail.component';
<<<<<<< HEAD
import { FundingBasketComponent } from './funding-basket/funding-basket.component';
=======
>>>>>>> 8b1e258 (Got the front end side of things working with the)

const routes: Routes = [
  { path: 'needs', component: NeedsComponent },
  { path: 'dashboard', component: DashboardComponent},
<<<<<<< HEAD
  { path: 'funding-basket', component: FundingBasketComponent},
=======
>>>>>>> 8b1e258 (Got the front end side of things working with the)
  { path: 'detail/:id', component: NeedDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }