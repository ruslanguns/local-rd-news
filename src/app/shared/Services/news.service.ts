import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { catchError, map } from 'rxjs/operators';
import { Articles } from '../interface/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getNews(mediaName: string) {
    return this.http.get<Articles>(`${this.apiUrl}${mediaName}`).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }
}
