import { Result } from 'src/app/Model/discover';
import { Component, Input,  OnChanges } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-media-category',
  templateUrl: './media-category.component.html',
  styleUrls: ['./media-category.component.scss']
})
export class MediaCategoryComponent implements OnChanges {
  @Input() mediaCategory:Result[]=[];
  @Input() mediaType:string='';
  @Input() mediaCat:string='';
  @Input() errorMessage:string='';

  constructor() { }

  ngOnChanges(): void {
  }


}
