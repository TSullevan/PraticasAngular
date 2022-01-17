import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/components/card/card.model';
import { FormModel } from 'src/app/shared/components/form/form.model';
import { InputModel } from 'src/app/shared/components/input/input.model';
import { ChartModel } from 'src/app/shared/components/main-chart/chart.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public nameInput: InputModel = new InputModel().asName();
  public emailInput: InputModel = new InputModel().asEmail().asRequired();
  public telephoneInput: InputModel = new InputModel().asTelephone().asRequired();

  public contactForm: FormModel = new FormModel().asContact();

  public barChart: ChartModel = new ChartModel().asBar();

  constructor() {
   }

  ngOnInit(): void {
  }

}
