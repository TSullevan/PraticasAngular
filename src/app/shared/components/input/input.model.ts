import { MaskService } from "../../services/mask.service";
import { ValidationService } from "../../services/validation.service";

export class InputModel {
    value: string = '';
    title: string = '';
    propertyName: string = '';
    style: string = '';
    birth: string = '';
    placeHolder: string = '';
    maxLength: number = 20;
    required: boolean = false;
    mask: Function = this.maskMethodWithValue;
    blurValidation: Function = this.validationMethodWithValue;
    hasValidValue: boolean = true;
    validationMethod: Function = function (text:string) {return true;}

    private validationService: ValidationService = new ValidationService;
    private maskService: MaskService = new MaskService;
    private maskMethod: Function = function (text:string) {return text;}

    private maskMethodWithValue(): void {
        this.value = this.maskMethod(this.value);
    }

    private validationMethodWithValue(): void {
        let isValid: boolean = this.validationMethod(this.value);
        this.removeValidationBorder();
        this.hasValidValue = true;
        if(!isValid){
            this.putValidationBorder();
            this.hasValidValue = false;
        }
    }

    public removeValidationBorder(): void {
        this.style = '';
    }

    public putValidationBorder(): void {
        this.style = 'border-color: red';
    }

    public asEmail(): InputModel {
        this.title = 'Email';
        this.placeHolder = 'Digite seu e-mail';
        this.propertyName = 'Email'
        this.validationMethod = this.validationService.validateEmail.bind(this.validationService);
        return this;
    }

    public asTelephone(): InputModel {
        this.title = 'Telefone';
        this.placeHolder = 'Digite seu telefone';
        this.maskMethod = this.maskService.cellPhoneMask.bind(this.maskService)
        this.propertyName = 'Telephone';
        this.validationMethod = this.validationService.validateMaskedCellPhone.bind(this.validationService);
        this.maxLength = 16;
        return this;
    }

    public asBirth(): InputModel {
        this.title = 'Data de Nascimento';
        this.placeHolder = 'Digite seu Nascimento...';
        this.propertyName = 'Birth';
        this.maskMethod = this.maskService.birthMask.bind(this.maskService);
        return this;
    }

    public asRequired(): InputModel {
        this.required = true;
        return this;
    }

    public asName(): InputModel {
        this.title = 'Nome';
        this.propertyName = 'Name';
        this.placeHolder = 'Digite seu nome...';
        return this;
    }

    public setRequiredValidationBorder(): boolean {
        this.removeValidationBorder();
        if (this.isRequired()) {
            this.putValidationBorder();
            return true;
        }
        return false;
    }

    public isRequired(): boolean {
        if (this.required && (this.value === undefined || this.value == null || this.value == '')){
            return true;
        }
        return false;
    }
}