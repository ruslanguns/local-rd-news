import { Component, OnInit } from '@angular/core';
import { Articles } from './shared/interface/news.interface';
import { NewsService } from './shared/Services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'local-rd-news';
  articles: Articles[] = [];
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.loadNews('diarioLibre');
  }
  loadNews(mediaName: string) {
    this.newsService.getNews(mediaName).subscribe((res: any) => {
      console.log(res);
      this.articles = res.data;
    });
  }
}
