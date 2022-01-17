export class ChartModel{
    chartOptions: Array<OptionsModel> = new Array<OptionsModel>();
    chartPlugin: string = '';
    chartType: string = '';
    chartLegend: boolean = true;
    chartData: Array<DataModel> = new Array<DataModel>();

    public asBar(): ChartModel{
        this.chartType = 'bar';
        this.chartData;
        this.chartLegend = true;
        this.chartOptions;
        return this;
    }
}

export class DataModel{
    labels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
    datasets = [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
        
}

export class OptionsModel{
    responsive = true;
    scales = {
      x: {},
      y: {
        min: 10
      }
    };
    plugins = {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
}