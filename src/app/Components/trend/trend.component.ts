import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Discover } from 'src/app/Model/discover';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  data:Discover={};
  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTrend(1);
  }
  getTrend(numberPage:number){
    this._ActivatedRoute.params.pipe(map((params)=>[params['type'],params['time']])).subscribe(([type,time])=>{
      this._ApiService.getTrending(type,time,numberPage).subscribe({
        next:(res:Discover)=>{this.data = res},
        error:(err:Error)=>{}
      })
    })
  }
}
