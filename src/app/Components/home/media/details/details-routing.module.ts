import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:DetailsComponent
  },
  {
    path:'season/:season_number',
    loadChildren: () => import('src/app/Components/home/media/details/episodes/episodes.module').then(m => m.EpisodesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
