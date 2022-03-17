import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): any {
    if (value && value !== 'NA') {
      value = parseFloat(value);
      let date = new Date('July 1, 1999');
      date.setSeconds(value);

      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    return 'NA';
  }

}
