import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})

export class YearPipe implements PipeTransform {
  transform(value: number): string {
    const titles = ['год', 'года', 'лет'];
    const cases = [2, 0, 1, 1, 1, 2];
    return value + ' ' + titles[ (value % 100 > 4 && value % 100 < 20) ? 2 : cases[(value % 10 < 5) ? value % 10 : 5] ];
  }
}
