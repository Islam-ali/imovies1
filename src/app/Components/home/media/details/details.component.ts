import { Reviews } from './../../../../Model/reviews';
import { Details } from './../../../../Model/details';
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Discover, Result } from 'src/app/Model/discover';
import { Video } from 'src/app/Model/video';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  Details:Details={};
  video:Video={};
  recommendation:Discover={};
  similar:Discover={};
  reviews:Reviews={};
  mediaType:string='';
  idTv!:number;

  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // get details movie & tv
    this.getDetails();
    // get video
    this.getVideo();
    // get recommendation & similar
    this.getRecommendation();
    this.getSimilar();
    // get reviews movie & tv
    this.getReviews();
  }
  // get Details movie & tv
  getDetails(){
    this._ActivatedRoute.params.pipe(map((prams) => [prams['media'],prams['id']])).subscribe(([mediatype,id]) =>{
    mediatype == 'tv' ? this.idTv = id : ''
    this._ApiService.getDetails(mediatype,id).subscribe({
      next:(res:Details) => {this.Details = res;}
    })
  });
  }
  // get video
  getVideo(){
    this._ActivatedRoute.params.pipe(map((prams) => [prams['media'],prams['id']])).subscribe(([mediatype,id])=>
    this._ApiService.getvideos(mediatype,id).subscribe({
      next:(res:any)=>{this.video = res;},
      error:(err:any)=>{}}
    )
  )
  }
  // get recommendation
  getRecommendation(){
    this._ActivatedRoute.params.pipe(map((prams) => [prams['media'],prams['id']])).subscribe(([mediatype,id]) =>{
      this.mediaType = mediatype;
      this._ApiService.getMoreDetails(mediatype,id,'recommendations').subscribe((res:Discover) => {
        this.recommendation = res;
      })}
    );
  }
  // get similar
  getSimilar(){
    this._ActivatedRoute.params.pipe(map((prams) => [prams['media'],prams['id']])).subscribe(([mediatype,id]) =>{
      this.mediaType = mediatype;
      this._ApiService.getMoreDetails(mediatype,id,'similar').subscribe((res:Discover) => {
        this.similar = res;
      })}
    );
  }
  // get Reviews movie & tv
  getReviews(){
    this._ActivatedRoute.params.pipe(map((prams) => [prams['media'],prams['id']])).subscribe(([mediatype,id]) =>
    this._ApiService.getreviews(mediatype,id).subscribe((res:Reviews) => {
      this.reviews = res;
    })
    );
  }

}
