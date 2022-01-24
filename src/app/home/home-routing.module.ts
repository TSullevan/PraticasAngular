import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../shared/components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../shared/components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from '../shared/components/pie-chart/pie-chart.component';
import { RadarChartComponent } from '../shared/components/radar-chart/radar-chart.component';

const routes: Routes = [
  {
    path: 'bar-chart',
    component: BarChartComponent
  },
  {
    path: 'doughnut-chart',
    component: DoughnutChartComponent
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgChartsModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
