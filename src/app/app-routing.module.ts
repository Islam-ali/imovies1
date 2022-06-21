import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'register',
    loadChildren: () => import('src/app/Components/auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'login',
    loadChildren: () => import('src/app/Components/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'home',
    loadChildren: () => import('src/app/Components/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path:'trend',
    loadChildren: () => import('src/app/Components/trend/trend.module').then(m => m.TrendModule),
    canActivate: [AuthGuard]
  },
  {
    path:'search',
    loadChildren: () => import('src/app/Components/search/search.module').then(m => m.SearchModule),
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    loadChildren: () => import('src/app/Components/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
