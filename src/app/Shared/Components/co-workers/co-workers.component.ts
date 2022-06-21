import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-workers',
  templateUrl: './co-workers.component.html',
  styleUrls: ['./co-workers.component.scss']
})
export class CoWorkersComponent implements OnInit {
  @Input() title:string = '';
  @Input() detailsEpisode:any;
  constructor() { }

  ngOnInit(): void {
  }

}
