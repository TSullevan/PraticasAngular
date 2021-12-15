import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['vendas Q1', 'Vendas Q2', 'Vendas Q3', 'vendas Q4'];
  public doughnutChartData: ChartData<'doughnut'> ={
    labels: this.doughnutChartLabels,
    datasets: [
     { data: [120, 150, 180, 90]},
     { data: [75, 99, 230, 60]},
     { data: [320, 221, 55, 12]}
    ]   
    }
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
