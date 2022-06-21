import { Router } from '@angular/router';
import { AuthGuard } from './../../Shared/guards/auth.guard';
import { Component,AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements  AfterContentInit{

  activelink:any
  links = ['movie', 'tv'];
  Loading:any
  query:string=''
  toggleSearch:boolean=true
  searchMovies:any
  isLogin:boolean=false;
  constructor(public _ApiService:ApiService,private _AuthGuard:AuthGuard,private _Router:Router) {
    this._AuthGuard.IsLogin.subscribe((login)=>{
      this.isLogin = login
    })
  }
  ngAfterContentInit()
  {
    this.Loading = this._ApiService.isLoading
  }
  toggleS()
  {
    this.toggleSearch = !this.toggleSearch
  }
  logout(){
    localStorage.removeItem("token")
    this._AuthGuard.IsLogin.next(false)
    this._Router.navigateByUrl("/login")
  }

}
