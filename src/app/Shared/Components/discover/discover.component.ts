import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Result, Discover } from 'src/app/Model/discover';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements  OnChanges{
  toggleSize:boolean=false;
  @Input() title:string='';
  @Input() mediaType:string='';
  @Input() discoverData:Result[]=[];
  @Input() totalBage:any;
  @Input() errorMessage:string ='';
  @Input() idTv!:number;
  @Output()  page = new EventEmitter<number>();
  pageNumber:number = 1;
  constructor(private _Router:Router) {
  }
  ngOnChanges(): void {
    console.log(this.discoverData)
  }
  WidthHeight()
  {
    this.toggleSize = true
  }
  BigWidthHeight()
  {
    this.toggleSize = false
  }
  nextBage(pageNumber:number){
    if(pageNumber < this.totalBage){
      this.pageNumber = pageNumber + 1
      this.page.emit(this.pageNumber)
    }
  }
  prevBage(pageNumber:number){
    if(pageNumber > 1)
    {
    this.pageNumber = pageNumber - 1
    this.page.emit(this.pageNumber)
    }
  }
  checkRouterLink(id:number,media_type:string,season_number:number,episode_number:number){
    if(season_number != undefined && episode_number !=undefined){
      this._Router.navigate(['/home','tv',this.idTv,'season',season_number,'episode',episode_number])
    }
    if(season_number == undefined  && episode_number ==undefined){
      this._Router.navigate(['/home/',media_type || this.mediaType,id])
    }
    console.log(id,season_number,episode_number,this.idTv)
  }
}
