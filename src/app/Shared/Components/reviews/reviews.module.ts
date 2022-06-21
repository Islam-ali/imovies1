import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';
import { SharedModule } from '../../shared.module';
import { ErrorMessageModule } from '../error-message/error-message.module';



@NgModule({
  declarations: [
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorMessageModule
  ],
  exports:[
    ReviewsComponent
  ]
})
export class ReviewsModule { }
