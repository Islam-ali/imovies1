import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-episodes',
  templateUrl: './details-episodes.component.html',
  styleUrls: ['./details-episodes.component.scss']
})
export class DetailsEpisodesComponent implements OnInit {
  detailsEpisodes:any;
  videoEpisode:any;
  errorMessage!:string;
  allEpisodes:any;
  idTv!:number;
  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetailsEpisodes();
    this.getEpisodeVideos();
    this.getEpisodes();
  }
  getDetailsEpisodes(){
    this._ActivatedRoute.params.pipe(map((params)=>[params['id'],params['season_number'],params['episode_number']])).subscribe(([id,season_number,episode_number]) =>{
      this._ApiService.getDetailsEpisode(id,season_number,episode_number).subscribe({
        next:(res:any)=>{this.detailsEpisodes = res;console.log(res) },
        error:(err:any)=>{this.errorMessage = err}
      })
    })
  }
  getEpisodeVideos(){
    this._ActivatedRoute.params.pipe(map((params)=>[params['id'],params['season_number'],params['episode_number']])).subscribe(([id,season_number,episode_number]) =>{
      this._ApiService.getEpisodeVideos(id,season_number,episode_number).subscribe({
        next:(res:any)=>{this.videoEpisode = res;console.log(res) },
        error:(err:any)=>{this.errorMessage = err}
      })
    })
  }
  getEpisodes(){
    this._ActivatedRoute.params.pipe(map((params) => [params['id'],params['season_number']])).subscribe(([paramsId,paramsSeasonNumber])=>{
      this.idTv = paramsId
      this._ApiService.getEpisodes(paramsId,paramsSeasonNumber).subscribe({
        next:(res:any)=>{
          this.allEpisodes = res.episodes;
          console.log(this.allEpisodes)
        },
        error:(err:any)=>{
          this.errorMessage = err
        }
      })
    })
  }
}
