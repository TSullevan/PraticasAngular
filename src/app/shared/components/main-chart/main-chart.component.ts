import { Component, Input, OnInit } from '@angular/core';
import { ChartModel } from './chart.model';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css']
})
export class MainChartComponent implements OnInit {

  public barChart: ChartModel = new ChartModel().asBar();

  constructor() { }

  ngOnInit(): void {
  }

}
