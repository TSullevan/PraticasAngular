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

  public cards = new Array<CardModel>(new CardModel);

  public genericCharts: Array<GenericChartModel> =
    [
      new GenericChartModel(GenericChartType.BAR),
      new GenericChartModel(GenericChartType.RADAR),
      new GenericChartModel(GenericChartType.PIE),
      new GenericChartModel(GenericChartType.DOUGHNUT),
      new GenericChartModel(GenericChartType.LINE),
      new GenericChartModel(GenericChartType.POLAR),
      new GenericChartModel(GenericChartType.BUBBLE),
      new GenericChartModel(GenericChartType.SCATTER)
    ];

  constructor() {

    this.genericCharts.forEach(
      chart => {
        chart.setTitle(chart.type)
      }
    );
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
