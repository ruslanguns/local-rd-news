import { Component, Input } from '@angular/core';
import { Articles } from '../../interface/news.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css', '../../../app.component.css'],
})
export class NewsCardComponent {
  /**
   * Esto haciendo que input sea un objeto de lo que sea el key pero string y
   * cada prop tenga un arreglo de articles.
   */
  @Input() articles!: { [key: string]: Articles[] };
  @Input() selectedDiary: string = 'listin';
}
