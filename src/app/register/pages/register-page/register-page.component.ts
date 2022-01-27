import { Component, Input, OnInit } from '@angular/core';
import { ColModel, FormModel, RowModel } from 'src/app/shared/components/form/form.model';
import { InputModel } from 'src/app/shared/components/input/input.model';
import { BaseFormPageModel } from 'src/app/shared/components/models/base-form.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent extends BaseFormPageModel {

  public registerNameInput: UserModel = new UserModel().asName();
  public registerForm: FormModel = new FormModel().asRegister();

  @Input() user: UserModel = new UserModel();

  constructor(private httpService: HttpService) { 

    super();
    this.form.setClass('')
      // .setSendMethod(this.httpService.post.bind(this.httpService)).setSendRoute('User')
      .addRow(new RowModel()
        .addCol(new ColModel().setCol(5).setInput(new InputModel().asName().asRequired()))
        .addCol(new ColModel().setCol(3).setInput(new InputModel().asTelephone())))
      .addRow(new RowModel()
        .addCol(new ColModel().setCol(5).setInput(new InputModel().asEmail().asRequired()))
        .addCol(new ColModel().setCol(3).setInput(new InputModel().asBirth().asRequired())));
  }

  ngOnInit(): void {
  }

  // public deleteMethod(): void {

  //   let id = 5;
  //   this.httpService.delete('user', id).subscribe();
  //   alert ('Deletado!!!');
  // }

  // public getMethod(): void {
  //   let id = 5;
  //   this.httpService.get<UserModel>('user', id)
  //     .subscribe(
  //       (user: UserModel) => this.user = user
  //     );
  // }

  // public getAllMethod(): void {
  //   this.httpService.getall<UserModel>('user').subscribe(
  //     (user: UserModel) => this.user = user
  //   );
  // }

  public createMethod(): void {
    let user: UserModel = new UserModel();
    user.name = "Enzo";
    user.cpf = "12345678901";
    user.telephone1 = "19 9 9221 9832";
    user.telephone2 = "19 9 8773 3382"
    // this.httpService.post('user', user).subscribe();
  }

  // public updateMethod(): void {
  //   let user: UserModel = new UserModel();
  //   user.name = "Everaldo";
  //   user.cpf = "444666777221";
  //   user.telephone1 = "19 9 9221 9832";
  //   user.telephone2 = "19 9 8773 3382";
  //   this.httpService.update<UserModel>('user', user)
  //   .subscribe();
  // }

  public cleanMethod(): void {
    this.user = new UserModel();
  }
}
 