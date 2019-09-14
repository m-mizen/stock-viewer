import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Containers
import { SecuritiesListComponent } from './containers/securities-list/securities-list.component';
import { SecuritiesSingleComponent } from './containers/securities-single/securities-single.component';

// Components
import { SecuritiesItemComponent } from './components/securities-item/securities-item.component';
import { SecuritiesDetailsComponent } from './components/securities-details/securities-details.component';
import { SecuritiesGraphComponent } from './components/securities-graph/securities-graph.component';
import { SecuritiesGraphControlsComponent } from './components/securities-graph-controls/securities-graph-controls.component';
import { SecuritiesDashboardRoutingModule } from './securities-dashboard-routing.module';
import { SecuritiesDashboardComponent } from './securities-dashboard/securities-dashboard.component';
import { AsxService } from './services/asx.service';
import { SecuritiesDataService } from './services/securities-data.service';

@NgModule({
  declarations: [
    SecuritiesListComponent,
    SecuritiesSingleComponent,
    SecuritiesItemComponent,
    SecuritiesDetailsComponent,
    SecuritiesGraphComponent,
    SecuritiesGraphControlsComponent,
    SecuritiesDashboardComponent
  ],
  imports: [
    CommonModule,
    SecuritiesDashboardRoutingModule,
  ],
  providers: [
    AsxService,
    SecuritiesDataService
  ],
  exports: [],
})
export class SecuritiesDashboardModule { }
