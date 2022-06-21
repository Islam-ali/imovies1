import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselTvComponent } from './carousel-tv.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarouselTvComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports:[
    CarouselTvComponent
  ]
})
export class CarouselTvModule { }
