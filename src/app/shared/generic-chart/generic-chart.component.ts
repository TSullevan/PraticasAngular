import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, Plugin } from 'chart.js';
import { GenericChartData, GenericChartModel } from './generic-chart.model';
import { GenericChartType } from './enums/generic-chart-type.enum';
import { GenericChartConfig } from './generic-chart.config';
import { HttpService } from '../services/http.service';
import { DataResponse } from './models/DataResponse.model';
@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {

  @Input() model: GenericChartModel = new GenericChartModel(new GenericChartConfig(GenericChartType.BAR));

  public genericChartType = GenericChartType;

  public chartData?: ChartData<'pie'>;

  public chartOptions?: ChartConfiguration['options'];

  public chartPlugins?: Array<Plugin>;

  constructor(
    public httpService: HttpService
    ) { }

  ngOnInit(): void {

    this.chartData = this.model.genericChartData.getChartData();
    
    this.chartOptions = this.model.genericChartOptions.getChartOptions();
    
    this.chartPlugins = this.model.getChartPlugins();
  }
}
