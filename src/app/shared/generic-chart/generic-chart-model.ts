import { ChartData } from "chart.js";

export class GenericChartModel {
    genericChartData: GenericChartData;
    // chartOptions: string = '';
    chartLegend: boolean = true;
    type: any = ''
    title: string = '';
    // chartPlugins: string = '';

    constructor(type: string) {
        this.type = type;
        this.genericChartData = new GenericChartData();

        // this.genericChartData.labels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
        // this.genericChartData.datasets = [
        //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: "rgba(53, 60, 189, 0.6)" },
        //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: "rgba(186, 186, 52, 0.6)" },
        // ];
    }

    public setTitle(title: string): GenericChartModel {
        this.title = title;
        return this;
    }

    public setData(datasets: any): GenericChartModel {
        this.genericChartData.datasets = datasets;
        return this;
    }

    public setLabel(labels: any): GenericChartModel {
        this.genericChartData.labels = labels;
        return this;
    }

    public setChartData(datasets: any, labels: Array<any>): GenericChartModel {
        this.genericChartData.datasets = datasets;
        this.genericChartData.labels = labels;
        return this;
        
    }

    
}
export class GenericChartData {
    labels: Array<string> = new Array<string>();
    datasets: Array<DataSet> = new Array<DataSet>();

    public getChartData(): ChartData<'pie'> {
        return {
            labels: this.labels,
            datasets: this.datasets
        };
    }
}

export class DataSet {
    data: Array<number> = new Array<number>();
    label: string = '';
    backgroundColor: string = '';


}