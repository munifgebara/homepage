import { Component } from '@angular/core';
import {GithubService, IRepository} from "../git-hub.service";
import {YouTubeService,Videos} from "../you-tube.service";

@Component({
  selector: 'app-you-tube',
  templateUrl: './you-tube.component.html',
  styleUrls: ['./you-tube.component.css']
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
      }
    });
  }

}
