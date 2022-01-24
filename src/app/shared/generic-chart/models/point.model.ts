export class ScaleAxeModel {
    min?: number;
    max?: number;

    constructor(min?: number, max?: number) {
        this.min = min;
        this.max = max;
    }

    public setMin(min: number): ScaleAxeModel {
        this.min = min;
        return this;
    }

    public  setMax(max: number): ScaleAxeModel {
        this.max = max;
        return this;
    }
}