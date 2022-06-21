import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes:any[]=[];
  allSeason:any[]=[];
  errorMessage:any;
  idTv!:number;
  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEpisodes();
    this.getAllSeasons();
    console.log(this.getEpisodes())
  }
  getEpisodes(){
    this._ActivatedRoute.params.pipe(map((params) => [params['id'],params['season_number']])).subscribe(([paramsId,paramsSeasonNumber])=>{
      this.idTv = paramsId
      this._ApiService.getEpisodes(paramsId,paramsSeasonNumber).subscribe({
        next:(res:any)=>{
          this.episodes = res.episodes
        },
        error:(err:any)=>{
          this.errorMessage = err
        }
      })
    })
  }
  getAllSeasons(){
      this._ActivatedRoute.params.pipe(map((params) => params['id'])).subscribe((param)=>{
        this._ApiService.getDetails('tv',param).subscribe({
          next:(res:any)=>{
            this.allSeason = res.seasons
          }
        })
      })
  }
}
