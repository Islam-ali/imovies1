import { Result, Discover } from 'src/app/Model/discover';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs ,Autoplay ,EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs ,Autoplay ,EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  // thumbsSwiper: any;
  TopratedMovie:Discover={};
  TopratedTv:Discover={};
  TrendingAll:Discover={};
  links = ['movie', 'tv'];
  errorMessage!:string;
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void {

  this.getAllTrend();
  this.getTopratedMovie();
  this.getTopratedTv();

  }
  getAllTrend(){
    this._ApiService.getTrending('all','week',1).subscribe((res:Discover)=>{
      this.TrendingAll = res ;
      console.log(this.TrendingAll)
  });
  }
  getTopratedMovie(){
    this._ApiService.getData('movie','top_rated',1).subscribe({
      next:(res:Discover)=>{this.TopratedMovie = res;},
      error:(err:any)=>{this.errorMessage = err}
    })
  }
  getTopratedTv(){
    this._ApiService.getData('tv','top_rated',1).subscribe({
      next:(res:Discover)=>{this.TopratedTv = res;},
      error:(err:any)=>{this.errorMessage = err}
    })
  }

}
