import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SwiperModule } from 'swiper/angular';
import { MatSelectModule } from '@angular/material/select';
import { SafePipePipe } from './Pipe/safe-pipe.pipe';

const metrials = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  CdkAccordionModule,
  MatTabsModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  SwiperModule,
  MatSelectModule,
];
@NgModule({

  declarations: [
    SafePipePipe,
  ],
  imports: [
    CommonModule,
    metrials
  ],
  exports:[
    metrials,
    SafePipePipe
  ]
})
export class SharedModule { }
