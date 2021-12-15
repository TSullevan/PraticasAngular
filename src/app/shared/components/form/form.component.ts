import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() form: FormModel = new FormModel();

  constructor() { }

  public sendButton(): void {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    let formData: object = this.form.getObject();

    this.form.send(formData, httpOptions).subscribe(
      () =>
      this.form.cleanFields(),
    );
  }

  ngOnInit(): void {
  }

}
