import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartData: ChartData<'pie', number[], string[] | string[]> = {
    labels: [ ['Xbox Series S'], ['Playstation 5'], ['Ninendo Switch'], ['PC'] ],
    datasets: [ {
      data: [190, 240, 95, 450]
    }]
    
  };

  public pieChartType: ChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

}
