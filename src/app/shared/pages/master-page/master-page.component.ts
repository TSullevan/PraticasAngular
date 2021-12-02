import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../components/card/card.model';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

@Input() myFavoriteTest: string = "Corbanezi is a good guy";

  constructor() {
   }

  ngOnInit(): void {
  }

  public myFavoriteAlert(text: string = this.myFavoriteTest): void {
    alert(text+ ' Aew \\0/');
  }


}
