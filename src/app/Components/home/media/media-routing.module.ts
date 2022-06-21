import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media.component';

const routes: Routes = [
  {
    path:'',
    component:MediaComponent
  },
  {
    path:':id',
    loadChildren: () => import('src/app/Components/home/media/details/details.module').then(m => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
