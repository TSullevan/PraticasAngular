import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  transform(text: string): string {
      var splitText =  text.trim().split(" ");
        if (splitText.length >= 1 && (splitText.length < 2)) {
          return (splitText[0] + " " + splitText[1].charAt(0) + ". " + splitText[2] + " " + splitText[3]);
        }if (splitText.length > 2){
          return (splitText[0] + " " + splitText[1].charAt(0) + ". " + splitText[2].charAt(0) + ". " + splitText[3] + " "  + splitText[4]);
        }
        return text;
    }
}
