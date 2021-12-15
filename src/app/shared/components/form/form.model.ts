import { UserModel } from "src/app/register/models/user.model";
import { InputModel } from "../input/input.model";

export class FormModel{
    rows: Array<RowModel> = new Array<RowModel>(); 
    class: string = 'form'; 
    send: Function = this.sendMethodWithRoute;
    sendMethod: Function = function (element:object) { alert('sendMethod não implementado para envio de ' + element) };
    sendRoute: string = '';

    private sendMethodWithRoute(model: FormData) {
        return this.sendMethod(this.sendRoute, model);
    }

    public asContact(): FormModel {
        this
            .addRow(new RowModel()
                .addCol(new ColModel().asName().asRequired())
                .addCol(new ColModel().asTelephone().asRequired().setCol(3)))
            .addRow(new RowModel()
                .addCol(new ColModel().asEmail()))
        return this;
    }

    public asRegister(): FormModel {
        this
            .addRow(new RowModel()
                .addCol(new ColModel().asRegisterName().setCol(4)))
        return this;
    }

    public addRow(newRow:RowModel): FormModel{
        this.rows.push(newRow);
        return this;
    }

    public setClass(newClass: string): FormModel {
        this.class = newClass;
        return this;
    }

    public cleanFields(): void {
        this.rows.forEach(row =>
            row.cols.forEach(col => {
                col.input.value = '';
            })
        )
    }

    public checkDirtyFields(): boolean {
        let hasDirtyFields: boolean = false;
        this.rows.forEach(row =>
            row.cols.forEach(col => {
                let value: string | File = col.input.value;
                let dirtyField: boolean = value != null && value != undefined && value != '';
                if (dirtyField) {
                    hasDirtyFields = true;
                    return;    
                }
            })
        );
        return hasDirtyFields;
    }

    public setSendMethod(sendMethod: Function): FormModel {
        this.sendMethod = sendMethod;
        return this;
    }

    public setSendRoute(sendRoute: string): FormModel {
        this.sendRoute = sendRoute;
        return this;
    }

    public getObject(): object {
        let inputs: Array<ObjectModel> = new Array<ObjectModel>();

        this.rows.forEach(row =>
            row.cols.forEach(col =>
                inputs.push(new ObjectModel(col.input.propertyName, col.input.value || ''))
            )
        );
        let formData: object = this.arrayToObject(inputs);
        return formData;
    }

    private arrayToObject(models: Array<ObjectModel>): object {
        return models.reduce((acumulator: object, model: ObjectModel) => {
            const { propertyName, ...modelRest } = model;
            return { ...acumulator, [propertyName]: modelRest.propertyValue };
        }, {});
    }
}

export class RowModel{
    cols: Array<ColModel> = new Array<ColModel>();

    public addCol(newCol:ColModel) {
        this.cols.push(newCol);
        return this;
    }
}

export class ColModel{
    class: string = 'col';
    input: InputModel = new InputModel();
    register: UserModel = new UserModel();

    public setInput(input: InputModel): ColModel {
        this.input = input;
        return this;
    }

    public asName(): ColModel {
        this.input = this.input.asName();
        return this;
    }
        
    public asRegisterName(): ColModel {
        this.register = this.register.asName();
        return this;
    }

    public asTelephone(): ColModel {
        this.input = this.input.asTelephone();
        return this;
    }

    public asBirth(): ColModel {
        this.input = this.input.asBirth();
        return this;
    }

    public asEmail(): ColModel {
        this.input = this.input.asEmail();
        return this;
    }

    public asRequired(): ColModel {
        this.input = this.input.asRequired();
        return this;
    }

    public setCol(colSize: number): ColModel {
        this.class = 'col-' + colSize;
        return this;
    }
}

export class ObjectModel {
    
    propertyName: string = '';
    propertyValue: string |File = '';

    constructor(propertyName: string, propertyValue: string | File) {
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
    }
}
