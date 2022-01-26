import { DataPluginPositionConfig } from "./configs/data-plugin-position.config";
import { GenericChartType } from "./enums/generic-chart-type.enum";
import { PluginAlignType } from "./enums/plugin-align-type.enum";
import { PluginAnchorType } from "./enums/plugin-anchor-type.enum";
import { LayoutModel } from "./models/layout-model";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { Plugin } from 'chart.js';
import { ExactDataPluginPositionModel } from "./models/exact-data-plugin-position.model";

export class GenericChartConfig {
    public static GenericChartType = GenericChartType;
    public static ExactDataPlugin = DataPluginPositionConfig;
    public static PluginAlignType = PluginAlignType;
    public static PluginAnchorType = PluginAnchorType;

    public type: any;
    public layout: LayoutModel = { padding: undefined };
    public title: string = '';
    public responsive: boolean = false;
    public enableExactDataPlugin: boolean = false;
    public plugins: {
        datalabels: { anchor: any, align: any },
        tooltip: {
            usePointStyle: boolean,
            callbacks: {
                label: any,
                labelColor: any,
                labelTextColor: any,
                labelPointStyle: {
                    pointStyle: any, 
                    rotation: any
                }
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
                    labelPointStyle: {
                        pointStyle: '',
                        rotation: null 
                    }
                }
            }
        };
    public scales: 
            { 
              x: { min?: number, max?: number }, 
              y: { min?: number, max?: number } 
        } = { 
              x: { min: undefined, max: undefined }, 
              y: { min: undefined, max: undefined } 
            };    


    public getChartPlugins(): Array<Plugin> {

        if (this.enableExactDataPlugin) {
            return [DataLabelsPlugin];
        }
        return new Array();
    }    

    public setPadding(padding: number): GenericChartConfig {
        this.layout.padding = padding;
        return this;
    }

    public setTitle(title: string): GenericChartConfig {
        this.title = title;
        return this;
    }

    public setResponsive(responsive: boolean): GenericChartConfig {
        this.responsive = responsive;
        return this;
    }

    public isResponsive(): GenericChartConfig {
        this.setResponsive(true);
        return this;
    }

    public setCallbacksLabel(callbacksLabel: string): GenericChartConfig {
        this.plugins.tooltip.callbacks.label = callbacksLabel;
        return this;
    }

    public showCallbacksLabel(callbacksLabel: string): GenericChartConfig {
        this.setCallbacksLabel(callbacksLabel);
        return this;
    }

    public setLabelTextColor(labelTextColor: string): GenericChartConfig {
        this.plugins.tooltip.callbacks.labelTextColor = labelTextColor;
        return this;
    }

    public showLabelTextColor(labelTextColor: string): GenericChartConfig {
        this.setLabelTextColor(labelTextColor);
        return this;
    }

    public showExactDataPlugin(exactDataPluginPositionModel: ExactDataPluginPositionModel): GenericChartConfig {
        this.setDataPluginPosition(exactDataPluginPositionModel.anchor, exactDataPluginPositionModel.align);
        this.enableExactDataPlugin = true;
        return this;
    }

    private setDataPluginPosition(anchor: string, align: string): GenericChartConfig {
        this.setAnchor(anchor);
        this.setAlign(align);
        return this;
    }

    public setAnchor(anchor: any): GenericChartConfig {
        this.plugins.datalabels.anchor = anchor;
        return this;
    }

    public setAlign(align: any): GenericChartConfig {
        this.plugins.datalabels.align = align;
        return this;
    }

    private setScaleAxeY(min?: number, max?: number): GenericChartConfig {
        this.scales.y.min = min;
        this.scales.y.max = max;
        return this;
    }

    public setScaleOptionsY(min?: number, max?: number): GenericChartConfig {
        this.setScaleAxeY(min, max);
        return this;
    }

    public setLabelPointStyle(pointStyle: string, rotation: number): GenericChartConfig {
        this.plugins.tooltip.callbacks.labelPointStyle.pointStyle = pointStyle;
        this.plugins.tooltip.callbacks.labelPointStyle.rotation = rotation;
        return this;
    }
    public showLabelPointStyle(pointStyle: string, rotation: number): GenericChartConfig {
        this.plugins.tooltip.usePointStyle = true;
        this.setLabelPointStyle(pointStyle, rotation)
        return this;
    }

    constructor(type: any) {
        this.type = type;
    }
}