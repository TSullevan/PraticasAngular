import { ChartConfiguration, ChartData, ChartOptions, ChartTypeRegistry, FontSpec } from "chart.js";
import { DataLabelOptModel } from "./datalabelsopt.models";
import { LayoutModel } from "./layout-model";
import { PluginsModel } from "./plugins-model";

export class GenericChartModel {
    genericChartData: GenericChartData = new GenericChartData();
    genericChartOptions: GenericChartOptions = new GenericChartOptions();
    // chartOptions: string = '';
    chartLegend: boolean = true;
    type: any = ''
    title: string = '';
    // chartPlugins: string = '';

    constructor(type: string) {
        this.type = type;
    }

    public setScaleOptionsX(min?: number, max?: number): GenericChartModel {
        this.genericChartOptions.setScaleAxeX(min, max);
        return this;
    }

    public setScaleOptionsY(min?: number, max?: number): GenericChartModel {
        this.genericChartOptions.setScaleAxeY(min, max);
        return this;
    }

    public isResponsive(): GenericChartModel {
        this.genericChartOptions.setResponsive(true);
        return this;
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

    public setLayout(padding?: number): GenericChartModel {
        this.genericChartOptions.setPadding(padding);
        return this;
    }

    public setDataLabels(anchor: any, align: any): GenericChartModel {
        this.genericChartOptions.setAnchor(anchor);
        this.genericChartOptions.setAlign(align);
        return this;
    }

    public setPlugins(anchor: any, align: any): GenericChartModel {
        this.setDataLabels(anchor, align);
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
        return this;
    }
}

export class GenericChartOptions {
    responsive: boolean = false;
    plugins: {datalabels: {anchor: any, align: any} } = { datalabels: {anchor: '', align: ''} };
    layout: LayoutModel = {padding: undefined};
    scales: { x: { min?: number, max?: number }, y: { min?: number, max?: number } } = { x: { min: undefined, max: undefined }, y: { min: undefined, max: undefined } };

    public setResponsive(responsive: boolean): GenericChartOptions {
        this.responsive = responsive;
        return this;
    }

    public setAnchor(anchor: any): GenericChartOptions {
        this.plugins.datalabels.anchor = anchor;
        return this;
    }

    public setAlign(align: any): GenericChartOptions {
        this.plugins.datalabels.align = align;
        return this;
    }

    public setScaleAxeX(min?: number, max?: number): GenericChartOptions {
        this.scales.x.min = min;
        this.scales.x.max = max;
        return this;
    }

    public setScaleAxeY(min?: number, max?: number): GenericChartOptions {
        this.scales.y.min = min;
        this.scales.y.max = max;
        return this;
    }

    public getChartOptions(): ChartConfiguration['options'] {
        return this;
    }

    public setPadding(padding?: number): GenericChartOptions {
        this.layout.padding = padding;
        return this;
    }
}

export class DataSet {
    data: Array<number> = new Array<number>();
    label: string = '';
    backgroundColor: string = '';
}