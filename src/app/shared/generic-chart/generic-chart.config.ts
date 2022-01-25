import { DataPluginPositionConfig } from "./configs/data-plugin-position.config";
import { GenericChartType } from "./enums/generic-chart-type.enum";
import { PluginAlignType } from "./enums/plugin-align-type.enum";
import { PluginAnchorType } from "./enums/plugin-anchor-type.enum";
import { LayoutModel } from "./models/layout-model";

export class GenericChartConfig {
    public static GenericChartType = GenericChartType;
    public static ExactDataPlugin = DataPluginPositionConfig;
    public static PluginAlignType = PluginAlignType;
    public static PluginAnchorType = PluginAnchorType;

    public type: any;
    public layout: LayoutModel = { padding: undefined };
    public title: string = '';

    public setPadding(padding: number): GenericChartConfig {
        this.layout.padding = padding;
        return this;
    }

    public setTitle(title: string): GenericChartConfig {
        this.title = title;
        return this;
    }

    constructor(type: any) {
        this.type = type;
    }
}