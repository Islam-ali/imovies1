import { EpisodesRoutingModule } from './episodes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes.component';
import { DiscoverModule } from 'src/app/Shared/Components/discover/discover.module';
import { CarouselTvModule } from 'src/app/Shared/Components/carousel-tv/carousel-tv.module';



@NgModule({
  declarations: [
    EpisodesComponent,
  ],
  imports: [
    CommonModule,
    DiscoverModule,
    EpisodesRoutingModule,
    CarouselTvModule
  ]
})
export class EpisodesModule { }
