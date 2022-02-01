import { ChartConfiguration, ChartType, Plugin } from "chart.js";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { GenericChartType } from "../../enums/generic-chart-type.enum";
import { GenericChartOptions } from "../../generic-chart.model";
import { ExactDataPluginPositionModel } from "../../models/exact-data-plugin-position.model";

export class GenericCanvasModel {
    fetchRoute: string = '';
    genericChartOptions: GenericChartOptions = new GenericChartOptions();
    chartPlugins?: Array<Plugin>;
    chartType: ChartType = GenericChartType.BAR;

    private enableExactDataPlugin: boolean = false;

    constructor() {
    }

    public setChartType(chartType: ChartType): GenericCanvasModel {
        this.chartType = chartType;
        return this;
    }

    public getChartOptions(): ChartConfiguration['options'] {
        return this.genericChartOptions;
    }

    private setDataPluginPosition(anchor: string, align: string): GenericCanvasModel {
        this.genericChartOptions.setAnchor(anchor);
        this.genericChartOptions.setAlign(align);
        return this;
    }

    public showExactDataPlugin(exactDataPluginPositionModel: ExactDataPluginPositionModel): GenericCanvasModel {
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

    public setFetchRoute(fetchRoute: string): GenericCanvasModel {
        this.fetchRoute = fetchRoute;
        return this;
    }

    public setChartOptions(genericChartOptions: GenericChartOptions): GenericCanvasModel {
        this.genericChartOptions = genericChartOptions;
        return this;
    }
}