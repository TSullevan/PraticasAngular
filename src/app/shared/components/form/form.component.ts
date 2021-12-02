import { Component, Input, OnInit } from '@angular/core';
import { FormModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() form: FormModel = new FormModel();

  constructor() { }

  ngOnInit(): void {
  }

}
