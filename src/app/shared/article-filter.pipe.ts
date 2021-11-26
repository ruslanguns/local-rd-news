import { Pipe, PipeTransform } from '@angular/core';
import { Articles } from './interface/news.interface';

@Pipe({
  name: 'articleFilter',
})
export class ArticleFilterPipe implements PipeTransform {
  // importa la interfaz por fi
  transform(
    value: { [key: string]: Articles[] },
    ...args: string[]
  ): Articles[] {
    const [selectedDiary] = args;
    const filteredData = value[selectedDiary];
    return filteredData || [];
  }
}
