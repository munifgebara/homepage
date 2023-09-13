import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { google, youtube_v3 } from 'googleapis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {

  private API_KEY = 'AIzaSyAszzqrePul6bA18H2B02QY5AUTPTMV68Q'; 

  private CHANNEL_ID = 'UC_tVoSnkjZbfjMgakCLXgew'; 

  
  constructor(private http: HttpClient) { }
  getVideos(): Observable<Videos> {
    return this.http.get<Videos>(`https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&channelId=${this.CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`);
  }


}
  export interface Videos {
    kind: string
    etag: string
    regionCode: string
    pageInfo: PageInfo
    items: Item[]
  }
  
  export interface PageInfo {
    totalResults: number
    resultsPerPage: number
  }
  
  export interface Item {
    kind: string
    etag: string
    id: Id
    snippet: Snippet
  }
  
  export interface Id {
    kind: string
    videoId?: string
    channelId?: string
  }
  
  export interface Snippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: Thumbnails
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
  }
  
  export interface Thumbnails {
    default: Default
    medium: Medium
    high: High
  }
  
  export interface Default {
    url: string
    width?: number
    height?: number
  }
  
  export interface Medium {
    url: string
    width?: number
    height?: number
  }
  
  export interface High {
    url: string
    width?: number
    height?: number
  }
  









