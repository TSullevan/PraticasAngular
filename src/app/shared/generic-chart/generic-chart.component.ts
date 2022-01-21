import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { GenericChartModel } from './generic-chart-model';
import { GenericChartType } from './generic-chart-type.enum';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {

  @Input() model: GenericChartModel = new GenericChartModel(GenericChartType.BAR);

  public genericChartType = GenericChartType;

  public chartData?: ChartData<'pie'>;

  public chartOptions?: ChartConfiguration['options'];

  public barChartPlugins = [
    DataLabelsPlugin,
  ];

  constructor() {
  }
  
  ngOnInit(): void {
    this.chartData = this.model.genericChartData.getChartData();

    this.chartOptions = this.model.genericChartOptions.getChartOptions();
  }

}
