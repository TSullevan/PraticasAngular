import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { GenericCanvasModel } from './generic-canvas.model';

@Component({
  selector: 'app-generic-canvas',
  templateUrl: './generic-canvas.component.html',
  styleUrls: ['./generic-canvas.component.css']
})
export class GenericCanvasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  @Input() model: GenericCanvasModel = new GenericCanvasModel();

  private sub!: Subscription;

  public chartData: ChartDataset[] = [
    { data: [], label: 'Data 1' },
    { data: [], label: 'Data 2' }
  ];

  public chartOptions: ChartConfiguration['options'];

  public labels: string[] = [];

  constructor(private httpService: HttpService) { 
  }
  
  ngOnInit(): void {
    this.sub = this.httpService.get(this.model.fetchRoute)
    .subscribe((data: any) => {
      this.chartData[0].data = [data.rates.aed.value, data.rates.brl.value, data.rates.cny.value, data.rates.dkk.value];
      this.chartData[1].data = [data.rates.hkd.value, data.rates.ils.value, data.rates.myr.value, data.rates.nok.value];
      this.labels = ['Janana', 'Frebaraba', 'Marcarca', 'Apipril'];
      this.chartOptions = this.model.getChartOptions();
      this.chart.update();
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
