import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public isEmptyNullOrUndefined(str: string): boolean {
    return str === undefined || str == null || str == '';
  }

  public validateMaskedCellPhone(cellphone:string): boolean {
    if (this.isEmptyNullOrUndefined(cellphone)) {
      return true;
    }
    return cellphone.length == 16;
  }

  public validateEmail(email: string): boolean{
    if (this.isEmptyNullOrUndefined(email)) {
      return true;
    }
    let regex: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    return regex.test(email);
  }
}
