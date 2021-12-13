import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseFormPageModel } from '../models/base-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<unknown> {
  canDeactivate(
    formPageComponent: BaseFormPageModel,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let hasDirtyFields = formPageComponent.form.checkDirtyFields();
    if (hasDirtyFields){
      let dialogChoose: boolean = confirm('Há campos preenchidos veve, deseja mesmo seguir em frente?');
      return dialogChoose;
    }
    return true;
  }
  
}
