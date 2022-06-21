import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendRoutingModule } from './trend-routing.module';
import { TrendComponent } from './trend.component';
import { DiscoverModule } from 'src/app/Shared/Components/discover/discover.module';


@NgModule({
  declarations: [
    TrendComponent
  ],
  imports: [
    CommonModule,
    TrendRoutingModule,
    DiscoverModule
  ]
})
export class TrendModule { }
