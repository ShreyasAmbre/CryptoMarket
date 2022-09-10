import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: 'coin-detail', 
    loadChildren: () => import('../app/components/coin-detail/coin-detail.module').then(m => m.CoinDetailModule) 
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
