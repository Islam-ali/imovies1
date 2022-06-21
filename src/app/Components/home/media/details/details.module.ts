import { MediaCategoryModule } from '../../../../Shared/Components/media-category/media-category.module';
import { CoverDetailsModule } from '../../../../Shared/Components/cover-details/cover-details.module';
import { ReviewsModule } from '../../../../Shared/Components/reviews/reviews.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { VideoModule } from 'src/app/Shared/Components/video/video.module';
import { CarouselTvModule } from 'src/app/Shared/Components/carousel-tv/carousel-tv.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    CoverDetailsModule,
    VideoModule,
    CarouselTvModule,
    ReviewsModule,
    MediaCategoryModule
  ]
})
export class DetailsModule { }
