import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GenericChartModel } from './generic-chart-model';
import { GenericChartType } from './generic-chart-type.enum';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {

  @Input() model: GenericChartModel = new GenericChartModel(GenericChartType.BAR);

  public genericChartType = GenericChartType;

  public chartData: ChartData<'pie'>;

  constructor() {
    this.chartData = this.model.genericChartData.getChartData();
  }

  ngOnInit(): void {
  }

}
