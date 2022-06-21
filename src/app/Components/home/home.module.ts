import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrendComponent } from './trend/trend.component';
import { MediaCategoryModule } from 'src/app/Shared/Components/media-category/media-category.module';


@NgModule({
  declarations: [
    HomeComponent,
    TrendComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    MediaCategoryModule
  ]
})
export class HomeModule { }
