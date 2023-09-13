import { Component } from '@angular/core';
import { YouTubeService,Videos } from "../you-tube.service";
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html'

})
export class YouTubeComponent {
  protected  videos: Videos={
    "kind": "youtube#searchListResponse",
    "etag": "iBGMPXnhuhlDodA-VZ5eQyDPxCI",
    "regionCode": "BR",
    "pageInfo": {
      "totalResults": 8,
      "resultsPerPage": 8
    },
    "items": [
    ]
  }
  ;


  constructor(protected youtubeService:YouTubeService ){

  }

  ngOnInit(): void {
    this.youtubeService.getVideos().subscribe({
      next:(value:Videos)=>{
        this.videos=value;
        console.log(value);

      }
    });
  }

}
