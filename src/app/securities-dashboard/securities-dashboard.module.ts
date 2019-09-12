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



@NgModule({
  declarations: [
    SecuritiesListComponent,
    SecuritiesSingleComponent,
    SecuritiesItemComponent,
    SecuritiesDetailsComponent,
    SecuritiesGraphComponent,
    SecuritiesGraphControlsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecuritiesDashboardModule { }
