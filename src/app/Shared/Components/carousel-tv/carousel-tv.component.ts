import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-carousel-tv',
  templateUrl: './carousel-tv.component.html',
  styleUrls: ['./carousel-tv.component.scss']
})
export class CarouselTvComponent implements OnInit {
  @Input() title:string='';
  @Input() data:any
  @Input() idTv!:number;
  constructor( private _Router:Router) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  checkRouterLink(id:number,season_number:number,episode_number:number){
    if(episode_number !=undefined){
      this._Router.navigate(['home','tv',this.idTv,'season',season_number,'episode',episode_number])
    }
    if(episode_number == undefined){
      this._Router.navigate(['home','tv',this.idTv,'season',season_number])
    }
    console.log(id,season_number,episode_number,this.idTv)
  }
}
