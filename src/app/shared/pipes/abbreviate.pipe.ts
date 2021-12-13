import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  transform(fullName: string): string {
      if(!fullName) {
        return fullName;
      }

      let splitName: string[] = fullName.trim().split(" ");
      let firstName: string = '';
      let middleName: string = '';
      let lastName: string = '';

      if (splitName.length > 0) {
        firstName = splitName[0];
      }
      if (splitName.length > 1) {
        lastName = ' ' + splitName[splitName.length - 1];
      }
      if (splitName.length > 2) {
        for (let i = 1; i < splitName.length - 1; i++) {
          if (splitName[i].length > 2) {
            middleName = ' ' + splitName[i][0] + '.';
          } else if (splitName[i].length > 0) {
            middleName += ' ' + splitName[i];
          }        
        }
      }

      return firstName + middleName + lastName;

  }

}



