import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generic-canvas',
  templateUrl: './generic-canvas.component.html',
  styleUrls: ['./generic-canvas.component.css']
})
export class GenericCanvasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  private sub!: Subscription;

  public chartData: ChartDataset[] = [
    { data: [], label: 'Data 1' },
    { data: [], label: 'Data 2' }
  ];

  public labels: string[] = ['Janana', 'Frebaraba', 'Marcarca', 'Apipril'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.sub = this.httpClient.get('https://api.coingecko.com/api/v3/exchange_rates')
      .subscribe((data: any) => {
        debugger
        this.chartData[0].data = [data.rates.aed.value, data.rates.brl.value, data.rates.cny.value, data.rates.dkk.value];
        this.chartData[1].data = [data.rates.hkd.value, data.rates.ils.value, data.rates.myr.value, data.rates.nok.value];
        this.chart.update();
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
