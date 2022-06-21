import { VideoComponent } from './video.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ErrorMessageModule } from '../error-message/error-message.module';



@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorMessageModule
  ],
  exports:[
    VideoComponent
  ]
})
export class VideoModule { }
