import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCategoryComponent } from './media-category.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [
    MediaCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    MediaCategoryComponent
  ]
})
export class MediaCategoryModule { }
