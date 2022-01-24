import Dictionary from "../../classes/dictionary.class";
import { CallbackKeyType } from "../enums/callback-key-type.enum";

export class PluginTooltipCallbacksModel {
    callbacks: Dictionary<Function> = new Dictionary<Function>();

    constructor() {
        this.callbacks.add(CallbackKeyType.LABEL_TEXT_COLOR, this.labelTextColor);
    }

    public labelTextColor(color: string): string {
        return color;
      }
}