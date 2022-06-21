import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover-details',
  templateUrl: './cover-details.component.html',
  styleUrls: ['./cover-details.component.scss']
})
export class CoverDetailsComponent implements OnInit {
@Input() Details:any;
@Input() errorMessage:string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
