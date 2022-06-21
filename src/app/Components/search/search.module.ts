import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from '../search/search.component';
import { DiscoverModule } from 'src/app/Shared/Components/discover/discover.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    DiscoverModule
  ]
})
export class SearchModule { }
