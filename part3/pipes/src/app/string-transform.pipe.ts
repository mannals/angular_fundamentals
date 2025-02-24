import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class StringTransformPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    value = value.split('').reverse().join('');
    value = value.replace(/[^[A-Za-z]/g, '');
    return value;
  }

}
