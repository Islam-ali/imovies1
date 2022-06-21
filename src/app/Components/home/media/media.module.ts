import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { DiscoverModule } from 'src/app/Shared/Components/discover/discover.module';
import { MediaCategoryModule } from 'src/app/Shared/Components/media-category/media-category.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MediaRoutingModule } from './media-routing.module';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    MediaComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    MediaCategoryModule,
    DiscoverModule
  ]
})
export class MediaModule { }
