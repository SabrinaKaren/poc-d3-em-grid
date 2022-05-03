import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotToComma'
})
export class DotToCommaPipe implements PipeTransform {

  transform(value: string): string {
    if (value) return value.toString().replace('.', ',');
    else return value;
  }

}