import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAge'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: number, exponent?: number): number {

    if (!value)
      return;

    let dateEmployee = new Date(value),
        currentDate = new Date();
    
    return currentDate.getFullYear() - dateEmployee.getFullYear()
  }

}
