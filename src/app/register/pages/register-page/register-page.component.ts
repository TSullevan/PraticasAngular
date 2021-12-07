import { Component, Input, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { FormModel } from 'src/app/shared/components/form/form.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public registerNameInput: UserModel = new UserModel().asName();
  public registerForm: FormModel = new FormModel().asRegister();

  @Input() user: UserModel = new UserModel();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public deleteMethod(): void {

    let id = 5;
    this.httpService.delete('user', id).subscribe();
    alert ('Deletado!!!');
  }

  public getMethod(): void {
    let id = 5;
    this.httpService.get<UserModel>('user', id)
      .subscribe(
        (user: UserModel) => this.user = user
      );
  }

  public createMethod(): void {
    let user: UserModel = new UserModel();
    user.name = "Enzo";
    user.cpf = "12345678901";
    user.telephone1 = "19 9 9221 9832";
    user.telephone2 = "19 9 8773 3382"
    this.httpService.post<UserModel>('user', user).subscribe();
  }

  public updateMethod(): void {
    let user: UserModel = new UserModel();
    user.name = "Everaldo";
    user.cpf = "444666777221";
    user.telephone1 = "19 9 9221 9832";
    user.telephone2 = "19 9 8773 3382";
    this.httpService.update<UserModel>('user', user)
    .subscribe();
  }

  public clearMethod(): void {
    document.getElementById('main')?.querySelectorAll("p").forEach((e) => {
        e.innerHTML = "";
    }); 
  }
}
