import { DataPluginPositionConfig } from "./configs/data-plugin-position.config";
import { GenericChartType } from "./enums/generic-chart-type.enum";
import { PluginAlignType } from "./enums/plugin-align-type.enum";
import { PluginAnchorType } from "./enums/plugin-anchor-type.enum";

export class GenericChartConfig {
    public static GenericChartType = GenericChartType;
    public static ExactDataPlugin = DataPluginPositionConfig;
    public static PluginAlignType = PluginAlignType;
    public static PluginAnchorType = PluginAnchorType;

    public type: any;

    constructor(type: any) {
        this.type = type;
    }
}