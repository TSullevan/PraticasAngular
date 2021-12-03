import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(text: string): string {
    if (text == '' || text == null || text === undefined){
      return text;
    }
    return text[0];;
  }

}
