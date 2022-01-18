import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Tooltip } from 'chart.js';
import plugin from 'chartjs-plugin-datalabels';
import { HttpService } from 'src/app/shared/services/http.service';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { UserModel } from 'src/app/register/models/user.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() user: UserModel = new UserModel();

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      },
      tooltip: {
        callbacks: {
          label: function() {
            let label = "everaldo" + " em "  + this.title;

            return label;
        }
        },
      }
    },
    layout: {
      padding: 50
    },
  };

  

  public barChartPlugins = [
    DataLabelsPlugin,
  ];


  public barChartType:  ChartType = 'bar';
  public barChartLegend = true;

   celso: string = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ UserModel.name, '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: "rgba(53, 60, 189, 0.6)" },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: "rgba(186, 186, 52, 0.6)" },
    ],
    
  };

  public chartClicked(e: any): void{
    console.log(e);
    alert("teste");
  }

  public chartHovered(): void{
    alert("teste");
  }

  public getMethod(): any {
    let id = 5;
    this.httpService.get<UserModel>('user', id)
      .subscribe(
        (user: UserModel) => this.user = user
      )
      return this.user;
      
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
