import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  {
    path:'',
    component:EpisodesComponent
  },
  {
    path:'episode',
    loadChildren: () => import('src/app/Components/home/media/details/episodes/details-episodes/details-episodes.module').then(m => m.DetailsEpisodesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
