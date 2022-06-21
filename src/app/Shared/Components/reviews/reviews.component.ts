import { ResultReviews } from './../../../Model/reviews';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.reviews)
  }

}
