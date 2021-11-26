import { Component } from '@angular/core';
import { Articles } from './shared/interface/news.interface';
import { NewsService } from './shared/Services/news.service';
import { of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

type AvailableDiaries =
  | 'listin'
  | 'diarioLibre'
  | 'nacional'
  | 'nuevoDiario'
  | 'remolacha';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'local-rd-news';
  selectedDiary = 'listin'; // cual es la de por defecto?

  // necesitamos un observable q se accione o a lo mejor no! te
  // muestro lo más facil. pero no se actualizará de momento! luego lo hacemos
  //  dinamico.
  // articles$ = this.loadNews('listin');

  /**
   * Ok ahora vamos a consumirlo y pensar cómo filtrarlo.
   */
  articlesVm$ = combineLatest([
    this.newsService.getNews('listin'),
    this.newsService.getNews('diarioLibre'),
    this.newsService.getNews('nacional'),
    this.newsService.getNews('nuevoDiario'),
    this.newsService.getNews('remolacha'),
  ]).pipe(
    map(([listin, diarioLibre, nacional, nuevoDiario, remolacha]) => ({
      listin,
      diarioLibre,
      nacional,
      nuevoDiario,
      remolacha,
    }))
  );

  // articles$ = of([]);
  // articles: Articles[] = [];
  // isLoading = false;
  // hasData = false;
  constructor(private newsService: NewsService) {}

  setSelectedDiary(mediaName: AvailableDiaries) {
    this.selectedDiary = mediaName;
  }
}
