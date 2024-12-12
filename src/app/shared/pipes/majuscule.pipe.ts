import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'majuscule',
standalone: true,
})

export class MajusculePipe implements PipeTransform {
transform(value: string): string {
    return value.toUpperCase()+ '!!!!'+ '🤬';
}
}