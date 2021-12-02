import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/components/card/card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public cards = new  Array<CardModel>(new CardModel);

  constructor() {

  let glassesCard = new CardModel(); 

  glassesCard.title = 'Óculos de Sol'
  glassesCard.source = 'assets/images/sun glasses.jpg'
  glassesCard.price = '299,99'

  this.cards.push(glassesCard);

  let vodkaCard = new CardModel(); 

  vodkaCard.title = 'Óculos de Sol'
  vodkaCard.source = 'assets/images/vodka.jpg'
  vodkaCard.price = '299,99'

  this.cards.push(vodkaCard);

  } 

  ngOnInit(): void {
  }

}
