import { FormsModule } from '@angular/forms';
import { DiscoverComponent } from './discover.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ErrorMessageModule } from '../error-message/error-message.module';



@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ErrorMessageModule
  ],
  exports:[
    DiscoverComponent
  ]
})
export class DiscoverModule { }
