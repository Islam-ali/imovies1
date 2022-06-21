import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Discover } from 'src/app/Model/discover';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchData:Discover={};
  constructor(private _ApiService:ApiService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getSearch(1);
  }
  getSearch(pageNumber:number){
    this._ActivatedRoute.params.pipe(map((params)=>params['query'])).subscribe((query)=>{
      this._ApiService.getsearch(query,pageNumber).subscribe({
        next:(res:Discover)=>{this.searchData = res;},
        error:(err:Error)=>{}
      })
    })
  }
}
