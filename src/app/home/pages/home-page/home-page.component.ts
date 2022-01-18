import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/components/card/card.model';
import { GenericChartModel } from 'src/app/shared/generic-chart/generic-chart-model';
import { GenericChartType } from 'src/app/shared/generic-chart/generic-chart-type.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public cards = new  Array<CardModel>(new CardModel);

  public barChart: GenericChartModel = new GenericChartModel(GenericChartType.BAR);
  public radarChart: GenericChartModel = new GenericChartModel(GenericChartType.RADAR);
  public pieChart: GenericChartModel = new GenericChartModel(GenericChartType.PIE);
  public doughnutChart: GenericChartModel = new GenericChartModel(GenericChartType.DOUGHNUT);
  public lineChart: GenericChartModel = new GenericChartModel(GenericChartType.LINE);
  public polarAreaChart: GenericChartModel = new GenericChartModel(GenericChartType.POLAR);
  public bubbleChart: GenericChartModel = new GenericChartModel(GenericChartType.BUBBLE);
  public scatterChart: GenericChartModel = new GenericChartModel(GenericChartType.SCATTER);

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
