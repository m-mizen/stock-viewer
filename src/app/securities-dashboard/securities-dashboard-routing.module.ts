import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuritiesListComponent } from './containers/securities-list/securities-list.component';
import { SecuritiesDetailsComponent } from './components/securities-details/securities-details.component';
import { SecuritiesDashboardComponent } from './securities-dashboard/securities-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SecuritiesDashboardComponent,
    children: [
      {
        path: '',
        component: SecuritiesListComponent,
      },
      {
        path: 'search/:term',
        component: SecuritiesListComponent,
      },
      {
        path: 'view/:id',
        component: SecuritiesDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuritiesDashboardRoutingModule { }
