import { ChartConfiguration, ChartData, ChartOptions, ChartTypeRegistry, FontSpec, Plugin } from "chart.js";
import { LayoutModel } from "./models/layout-model";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ExactDataPluginPositionModel } from "./models/exact-data-plugin-position.model";
import { GenericChartConfig } from "./generic-chart.config";
import { GenericChartType } from "./enums/generic-chart-type.enum";

export class GenericChartModel {
    genericChartData: GenericChartData = new GenericChartData();
    genericChartOptions: GenericChartOptions = new GenericChartOptions();

    enableExactDataPlugin: boolean = false;

    // chartOptions: string = '';
    chartLegend: boolean = true;
    title: string = '';
    chartType: any;
    // chartPlugins: string = '';

    constructor(chartConfig: GenericChartConfig) { 
        debugger
        this.setLayout(chartConfig.layout.padding);
        this.chartType = chartConfig.type;
        this.setTitle(chartConfig.title);
        this.isResponsive();
        this.setCallbacksLabel(chartConfig.plugins.tooltip.callbacks.label);
        this.setLabelTextColor(chartConfig.plugins.tooltip.callbacks.labelTextColor);
        this.showExactDataPlugin(chartConfig.plugins.datalabels);
        this.setScaleOptionsY(chartConfig.scales.y.min, chartConfig.scales.y.max)
        // this.setLabelColor();
    }

    public setLabelTextColor(cssColor: string): GenericChartModel {
        this.genericChartOptions.setLabelTextColor(cssColor);
        return this;
    }

    public setCallbacksLabel(callbacksLabel: string): GenericChartModel {
        this.genericChartOptions.setCallbacksLabel(callbacksLabel);
        return this;
    }

    public showExactDataPlugin(exactDataPluginPositionModel: ExactDataPluginPositionModel): GenericChartModel {
        this.setDataPluginPosition(exactDataPluginPositionModel.anchor, exactDataPluginPositionModel.align);
        this.enableExactDataPlugin = true;
        return this;
    }

    public getChartPlugins(): Array<Plugin> {

        if (this.enableExactDataPlugin) {
            return [DataLabelsPlugin];
        }
        return new Array();
    }

    public setLabelColor(backgroundColor: string, borderColor:string): GenericChartModel {
        this.genericChartOptions.setLabelColor(backgroundColor, borderColor)
        return this;
    }

    public showLabelPointStyle(pointStyle: string, rotation: number) {
        this.genericChartOptions.plugins.tooltip.usePointStyle = true;
        this.genericChartOptions.setLabelPointStyle(pointStyle, rotation)
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

    private setLayout(padding?: number): GenericChartModel {
        this.genericChartOptions.setPadding(padding);
        return this;
    }

    private setDataPluginPosition(anchor: string, align: string): GenericChartModel {
        this.genericChartOptions.setAnchor(anchor);
        this.genericChartOptions.setAlign(align);
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
    plugins: {
        datalabels: { anchor: any, align: any },
        tooltip: {
            usePointStyle: boolean,
            callbacks: {
                label: any,
                labelColor: any,
                labelTextColor: any,
                labelPointStyle: any
            }
        }
    } = {
            datalabels: { anchor: '', align: '' },
            tooltip: {
                usePointStyle: false,
                callbacks: {
                    label: undefined,
                    labelColor: undefined,
                    labelTextColor: undefined,
                    labelPointStyle: undefined
                }
            }
        };

    layout: LayoutModel = { padding: undefined };
    scales: { x: { min?: number, max?: number }, y: { min?: number, max?: number } } = { x: { min: undefined, max: undefined }, y: { min: undefined, max: undefined } };

    public setLabelTextColor(labelTextColor: string): GenericChartOptions {
        this.plugins.tooltip.callbacks.labelTextColor = function() { return labelTextColor };
        return this;
    }

    public setCallbacksLabel(callbacksLabel: string) {
        this.plugins.tooltip.callbacks.label = function() {return callbacksLabel};
        return this;
    }

    public setLabelColor(backgroundColor: string, borderColor: string): GenericChartOptions {
        this.plugins.tooltip.callbacks.labelColor = function () {
            return {
            borderColor: borderColor,
            backgroundColor: backgroundColor
            }
        };
        return this;
    }

    public setLabelPointStyle(pointStyle: string, rotation: number): GenericChartOptions {
        this.plugins.tooltip.callbacks.labelPointStyle = function() {
            return {
              pointStyle: pointStyle,
              rotation: rotation
            }
        };
        return this;
    }

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