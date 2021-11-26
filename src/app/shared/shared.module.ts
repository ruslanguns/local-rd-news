import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './componentes/news-card/news-card.component';
import { ArticleFilterPipe } from './article-filter.pipe';

@NgModule({
  declarations: [NewsCardComponent, ArticleFilterPipe],
  imports: [CommonModule],
  exports: [NewsCardComponent],
})
export class SharedModule {}
