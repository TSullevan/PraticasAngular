import { Component, Input, OnInit } from '@angular/core';
import { GenericChartModel } from './generic-chart.model';
import { GenericChartType } from './enums/generic-chart-type.enum';
import { GenericChartConfig } from './generic-chart.config';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {

  @Input() model: GenericChartModel = new GenericChartModel(new GenericChartConfig(GenericChartType.BAR));

  constructor(
    public httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
}
