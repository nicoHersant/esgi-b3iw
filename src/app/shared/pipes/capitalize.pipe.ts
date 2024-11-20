import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "capitalize"
})

export class Capitalize implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase()+ '👽';
  }
}