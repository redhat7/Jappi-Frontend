import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatphone' })
export class FormatPhonePipe implements PipeTransform {
  transform(value: string): string {
    const numberValue = parseInt(value, 10);
    if (numberValue >= 1000000000) {
      return numberValue.toLocaleString('es-ES').replace(/,/g, ' ');
    } else if (numberValue >= 1000000) {
      return numberValue.toString().replace(/^(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3');
    } else if (numberValue >= 100000) {
      return numberValue.toString().replace(/^(\d{3})(\d{4})$/, '$1 $2');
    } else {
      return numberValue.toString();
    }
  }
}