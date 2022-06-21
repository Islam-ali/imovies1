import { Result, Discover } from 'src/app/Model/discover';
import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  mediaCategory:Discover={};
  @Input() mediaType:string='';
  @Input() mediaCat:string='';
  errorMessage:string='';
  constructor(private _ApiService:ApiService) { }

  ngOnInit(): void {
    this._ApiService.getData(this.mediaType,this.mediaCat,1).subscribe({
      next:(res:Discover)=>{this.mediaCategory = res;},
      error:(err:any)=>{this.errorMessage = err ;}
    })
  }

}
