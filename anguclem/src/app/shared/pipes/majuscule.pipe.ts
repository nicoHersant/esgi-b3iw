import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
