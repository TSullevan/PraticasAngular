import { ScaleAxeModel } from "./point.model";

export class ScalesModel {
    x?: ScaleAxeModel = new ScaleAxeModel();
    y?: ScaleAxeModel = new ScaleAxeModel();

    constructor(x?: ScaleAxeModel, y?: ScaleAxeModel) {
        this.x = x;
        this.y = y;
    }

    public setX(x: ScaleAxeModel): ScalesModel {
        this.x = x;
        return this;
    }

    public setY(y: ScaleAxeModel): ScalesModel {
        this.y = y;
        return this;
    }
}