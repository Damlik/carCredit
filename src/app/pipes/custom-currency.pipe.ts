import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, month?: boolean): string {
    if (month) {
      return Math.round(value).toLocaleString('ru') + ' ₽/мес';
    }
    return Math.round(value).toLocaleString('ru') + ' ₽';
  }
}
