import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverDetailsComponent } from './cover-details.component';



@NgModule({
  declarations: [
    CoverDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoverDetailsComponent
  ]
})
export class CoverDetailsModule { }
