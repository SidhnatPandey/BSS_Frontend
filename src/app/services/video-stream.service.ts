import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VideoStreamService {

  apiUrl = 'http://127.0.0.1:1000/api/';

  constructor(private http: HttpClient) { }
  getVideoFeed(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/video_feed`);
  }
  getMetaData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/metadata`);
  }
}
