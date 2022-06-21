import { CoWorkersModule } from '../../../../../../Shared/Components/co-workers/co-workers.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsEpisodesRoutingModule } from './details-episodes-routing.module';
import { CoverDetailsModule } from 'src/app/Shared/Components/cover-details/cover-details.module';
import { VideoModule } from 'src/app/Shared/Components/video/video.module';
import { CarouselTvModule } from 'src/app/Shared/Components/carousel-tv/carousel-tv.module';
import { ReviewsModule } from 'src/app/Shared/Components/reviews/reviews.module';
import { DetailsEpisodesComponent } from './details-episodes.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ErrorMessageModule } from 'src/app/Shared/Components/error-message/error-message.module';


@NgModule({
  declarations: [
    DetailsEpisodesComponent
  ],
  imports: [
    CommonModule,
    DetailsEpisodesRoutingModule,
    CoverDetailsModule,
    VideoModule,
    CarouselTvModule,
    ReviewsModule,
    CoWorkersModule,
    ErrorMessageModule,
    SharedModule
  ]
})
export class DetailsEpisodesModule { }
