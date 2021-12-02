export class InputModel {
    value: string = '';
    title: string = '';
    style: string = '';
    placeHolder: string = '';
    maxLength: string = '20';
    required: boolean = false;
    mask: Function = function () {};
    blurValidation: Function = function () {};
  static asEmail: any;

    public asEmail(): InputModel {
        this.title = 'Email';
        this.placeHolder = 'Digite seu e-mail';
        return this;
    }

    public asTelephone(): InputModel {
        this.title = 'Telefone';
        this.placeHolder = 'Digite seu telefone';
        return this;
    }

    public asRequired(): InputModel {
        this.required = true;
        return this;
    }

    public asName(): InputModel {
        this.title = 'Nome';
        this.placeHolder = 'Digite seu nome...';
        return this;
    }
}