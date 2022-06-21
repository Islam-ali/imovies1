import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsEpisodesComponent } from './details-episodes.component';

const routes: Routes = [
  {
    path:':episode_number',component:DetailsEpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsEpisodesRoutingModule { }
