import { Injectable } from '@angular/core';
import "../extensions/string.extension";

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  public cellPhoneMask(text: string): string {
    let numbers: string = text.replace(/\D/g,"");
    let telephone = '';
    if (numbers.length > 0){
      telephone = '(' + numbers;
    }
    if (numbers.length > 2){
      telephone = telephone.insertAt(')' , 3);
    }
    if (numbers.length > 2){
      telephone = telephone.insertAt(' ' , 4);  
    }
    if (numbers.length > 3){
      telephone = telephone.insertAt(' ' , 6);  
    }
    if (numbers.length > 7){
      telephone = telephone.insertAt('-' , 11);  
    }
    if (numbers.length > 11){
      telephone = telephone.slice(0, 16);  
    }
    return telephone;
  }

  constructor() { }
}
