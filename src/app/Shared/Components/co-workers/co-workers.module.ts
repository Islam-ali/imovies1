import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoWorkersComponent } from '../co-workers/co-workers.component';
import { ErrorMessageModule } from '../error-message/error-message.module';



@NgModule({
  declarations: [
    CoWorkersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorMessageModule
  ],
  exports:[
    CoWorkersComponent
  ]
})
export class CoWorkersModule { }
