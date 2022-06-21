import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discover } from 'src/app/Model/discover';
import { map } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  mediaCategory:string[]=[];
  discoverData:Discover={};
  mediaType!:string;
  constructor(private _ActivatedRoute:ActivatedRoute,private _ApiService:ApiService) {

  }
  ngOnInit(): void {
    this.getDiscover(1);
  }
  getDiscover(page:number){
    this._ActivatedRoute.params.pipe(map((prams) => prams['media'])).subscribe((mediatype) =>{
      this._ApiService.getDiscover(mediatype,page).subscribe({
        next:(res:Discover)=>{this.discoverData = res;},
        error:(err:Error)=>{ err;}
      })
      if(mediatype == 'movie')
      {this.mediaCategory = ['now_playing','top_rated','upcoming','popular'];}
      if(mediatype == 'tv')
      {this.mediaCategory = ['airing_today','on_the_air','top_rated','popular'];}
      this.mediaType = mediatype;
    });
  }
}
