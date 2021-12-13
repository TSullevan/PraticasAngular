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

  public birthMask(text: string): string {
    let numbers: string = text.replace(/\D/g,"");
    let date = '';

    if (numbers.length > 0) {
      date = '' + numbers;
    }
    if (numbers.length > 2) {
      date = date.insertAt('/', 2);
    }
    if (numbers.length > 4) {
      date = date.insertAt('/', 5);
    }
    if (numbers.length >= 9) {
      date = date.slice(0, 10);
    }
    

    return date;
  }

  constructor() { }
}
