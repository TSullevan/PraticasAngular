import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/components/card/card.model';
import { GenericChartModel } from 'src/app/shared/generic-chart/generic-chart.model';
import { GenericChartType } from 'src/app/shared/generic-chart/enums/generic-chart-type.enum';
import { GenericChartConfig } from 'src/app/shared/generic-chart/generic-chart.config';
import { PointStyleKeyType } from 'src/app/shared/generic-chart/enums/plugin-point-style-type.enum';
import { DataResponse } from 'src/app/shared/generic-chart/models/DataResponse.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  public cards = new Array<CardModel>(new CardModel);
  public genericCharts: Array<GenericChartModel> = new Array<GenericChartModel>();
  
  public radarChart: GenericChartModel = new GenericChartModel(new GenericChartConfig(GenericChartType.RADAR));
  
  public pieChart: GenericChartModel = new GenericChartModel(new GenericChartConfig(GenericChartType.PIE));
  
  private dataApi: DataResponse = new DataResponse;

  constructor(private httpService: HttpService) {
  
    let config = new GenericChartConfig(GenericChartType.BAR)
      .setPadding(50)
      .setTitle('Everaldo')
      .isResponsive()
      .showCallbacksLabel('Chicote, Algema')
      .showLabelTextColor('rgb(31, 204, 77)')
      .showExactDataPlugin(GenericChartConfig.ExactDataPlugin.CENTER_CENTER)
      .setScaleOptionsY(0, 100)
      .showLabelPointStyle(PointStyleKeyType.RECTANGULAR, 0)
      .showLabelColor('orange', 'blue');

      let data = '';
    let label = '';


    let barChartConfig = new GenericChartConfig(GenericChartType.BAR)
    .setTitle('Valdevino Tatuí')
      .setPadding(10)
      .isResponsive()
      .showCallbacksLabel('Bom dia, ValTatuí!')
      .showLabelTextColor('pink')
      .showExactDataPlugin(GenericChartConfig.ExactDataPlugin.END_END)
      .setScaleOptionsY(0, 200)
      .showLabelPointStyle(PointStyleKeyType.TRIANGLE, 90)
      .showLabelColor('yellow', 'green');

    let pieChartConfig = new GenericChartConfig(GenericChartType.PIE)
      .setPadding(10)
      .setTitle('Pastelaria do Ramirez')
      .isResponsive()
      .showCallbacksLabel('1 Copo de Caju e um Pastelão')
      .showLabelTextColor('white')
      .showExactDataPlugin(GenericChartConfig.ExactDataPlugin.CENTER_CENTER)
      .setScaleOptionsY(0, 400)
      .showLabelPointStyle(PointStyleKeyType.DASH, 90)
      .showLabelColor('grey', 'black');

    let barChart = new GenericChartModel(barChartConfig)

    let pieChart = new GenericChartModel(pieChartConfig)
    

    let chart = new GenericChartModel(config);

    this.genericCharts.push(chart);

    this.genericCharts.push(pieChart);

    this.genericCharts.push(barChart)

    this.genericCharts.push(new GenericChartModel(new GenericChartConfig(GenericChartType.DOUGHNUT)));
    this.genericCharts.push(new GenericChartModel(new GenericChartConfig(GenericChartType.LINE)));
    this.genericCharts.push(new GenericChartModel(new GenericChartConfig(GenericChartType.POLAR)));
    this.genericCharts.push(new GenericChartModel(new GenericChartConfig(GenericChartType.BUBBLE)));
    this.genericCharts.push(new GenericChartModel(new GenericChartConfig(GenericChartType.SCATTER)));
   
    
    this.httpService.getDataFromApi('DataResponse').subscribe(data => {
      this.dataApi = data;
    })

    for (let chart of this.genericCharts) {
      chart
        // .setTitle(chart.chartType)
        .setData([
          { data: [this.dataApi.data], label: this.dataApi.label, backgroundColor: "rgba(53, 60, 189, 0.6)" },
          { data: [28, 48, 40, 19, 86, 27, 90], label: 'Guiça', backgroundColor: "rgba(186, 186, 52, 0.6)" },
        ])
        .setLabel(['2006', '2007', '2008', '2009', '2010', '2011', '2012'])

      
        
        // .setScaleOptionsY(0, 120)
        // .isResponsive()
        // .showExactDataPlugin(GenericChartConfig.ExactDataPlugin.END_END)
        // .setLabelTextColor('rgb(255, 187, 0)')
        // .setCallbacksLabel('Evecedo Maraldo')
        // .setLabelColor('red', 'green')
        // .showLabelPointStyle(PointStyleKeyType.CIRCLE, 0);
    }

    // this.radarChart = (
    //   this.radarChart.isResponsive(),
    //   this.radarChart.setData(
    //     [
    //       { data: [21, 31, 41, 51, 61, 71, 81], label: 'Suzanne Von Richtoften', backgroundColor: "rgba(255, 0, 179, 0.5)" },
    //       { data: [1, 66, 21, 89, 97, 12, 44], label: 'Celso', backgroundColor: "rgba(251, 255, 0, 0.7)" },
    //     ]
    //   ),
    //   this.radarChart.setLabel(
    //     ['1992', '1993', '1994', '1995', '2000', '2001', '2002']
    //   ),
    //   this.radarChart.setTitle(GenericChartType.RADAR)
    // );

    // this.pieChart = (
    //   this.pieChart.isResponsive(),
    //   this.pieChart.setData(
    //     [
    //       { data: [90, 80, 70, 60], backgroundColor: ["red", "yellow", "black", "orange"] },
    //     ]
    //   ),
    //   this.pieChart.setLabel(
    //     [['Xbox Series S'], ['Playstation 5'], ['Ninendo Switch'], ['PC']]
    //   ),
    //   this.pieChart.setTitle(GenericChartType.PIE)
    // )




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
