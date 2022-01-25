import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/components/card/card.model';
import { GenericChartModel, GenericChartOptions } from 'src/app/shared/generic-chart/generic-chart.model';
import { GenericChartType } from 'src/app/shared/generic-chart/enums/generic-chart-type.enum';
import { GenericChartConfig } from 'src/app/shared/generic-chart/generic-chart.config';
import { PointStyleKeyType } from 'src/app/shared/generic-chart/enums/plugin-point-style-type.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public cards = new Array<CardModel>(new CardModel);

  public genericCharts: Array<GenericChartModel> = new Array<GenericChartModel>();

  public radarChart: GenericChartModel = new GenericChartModel(GenericChartType.RADAR);

  public pieChart: GenericChartModel = new GenericChartModel(GenericChartType.PIE);

  constructor() {

    this.genericCharts.push(new GenericChartModel(GenericChartType.BAR));
    this.genericCharts.push(new GenericChartModel(GenericChartType.DOUGHNUT));
    this.genericCharts.push(new GenericChartModel(GenericChartType.LINE));
    this.genericCharts.push(new GenericChartModel(GenericChartType.POLAR));
    this.genericCharts.push(new GenericChartModel(GenericChartType.BUBBLE));
    this.genericCharts.push(new GenericChartModel(GenericChartType.SCATTER));

    for (let chart of this.genericCharts) {
      chart.setTitle(chart.type).isResponsive()
        .setScaleOptionsY(10, 120)
        .setData([
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Everaldo Macedo', backgroundColor: "rgba(53, 60, 189, 0.6)" },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Guiça', backgroundColor: "rgba(186, 186, 52, 0.6)" },
        ])
        .setLabel(['2006', '2007', '2008', '2009', '2010', '2011', '2012'])
      .setLayout(50)
        .showExactDataPlugin(GenericChartConfig.ExactDataPlugin.END_END)
        .setLabelTextColor('rgb(255, 187, 0)')
        .setCallbacksLabel('Evecedo Maraldo')
        .setLabelColor('red', 'green')
        .showLabelPointStyle(PointStyleKeyType.DASH, 0);
    }

    this.radarChart = (
      this.radarChart.isResponsive(),
      this.radarChart.setData(
        [
          { data: [21, 31, 41, 51, 61, 71, 81], label: 'Suzanne Von Richtoften', backgroundColor: "rgba(255, 0, 179, 0.5)" },
          { data: [1, 66, 21, 89, 97, 12, 44], label: 'Celso', backgroundColor: "rgba(251, 255, 0, 0.7)" },
        ]
      ),
      this.radarChart.setLabel(
        ['1992', '1993', '1994', '1995', '2000', '2001', '2002']
      ),
      this.radarChart.setTitle(GenericChartType.RADAR)
    );

    this.pieChart = (
      this.pieChart.isResponsive(),
      this.pieChart.setData(
        [
          { data: [90, 80, 70, 60], backgroundColor: ["red", "yellow", "black", "orange"] },
        ]
      ),
      this.pieChart.setLabel(
        [['Xbox Series S'], ['Playstation 5'], ['Ninendo Switch'], ['PC']]
      ),
      this.pieChart.setTitle(GenericChartType.PIE)
    )




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
