import { ExactDataPluginPositionModel } from "../models/exact-data-plugin-position.model";

export class DataPluginPositionConfig {
    public static readonly START_START = new ExactDataPluginPositionModel('start','start');
    public static readonly START_CENTER = new ExactDataPluginPositionModel('start','center');
    public static readonly START_END = new ExactDataPluginPositionModel('start','end');
    public static readonly START_RIGHT = new ExactDataPluginPositionModel('start','right');
    public static readonly START_LEFT = new ExactDataPluginPositionModel('start','left');

    public static readonly CENTER_START = new ExactDataPluginPositionModel('center','start');
    public static readonly CENTER_CENTER = new ExactDataPluginPositionModel('center','center');
    public static readonly CENTER_END = new ExactDataPluginPositionModel('center','end');
    public static readonly CENTER_RIGHT = new ExactDataPluginPositionModel('center','right');
    public static readonly CENTER_LEFT = new ExactDataPluginPositionModel('center','left');

    public static readonly END_START = new ExactDataPluginPositionModel('end','start');
    public static readonly END_CENTER = new ExactDataPluginPositionModel('end','center');
    public static readonly END_END = new ExactDataPluginPositionModel('end','end');
    public static readonly END_RIGHT = new ExactDataPluginPositionModel('end','right');
    public static readonly END_LEFT = new ExactDataPluginPositionModel('end','left');
}