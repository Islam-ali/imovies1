import { ResultVideo, Video } from 'src/app/Model/video';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  url = 'https://www.youtube.com/embed/';
  @Input() video:ResultVideo[]=[];
  constructor() { }

  ngOnInit(): void {

  }
}
