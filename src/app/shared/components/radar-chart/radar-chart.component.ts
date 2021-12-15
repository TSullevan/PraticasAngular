import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  radarChartOptions: ChartConfiguration[ 'options'] = {
    responsive: true,
  };

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData: ChartData<'radar'> = { 
    labels: this.radarChartLabels,
    datasets: [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [145, 169, 210, 95], label: '2018'}
  ]
  };

  public radarChartType: ChartType = 'radar'

  constructor() { }

  ngOnInit(): void {
  }

}
