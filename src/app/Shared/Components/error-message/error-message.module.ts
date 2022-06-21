import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ErrorMessageComponent
  ]
})
export class ErrorMessageModule { }
