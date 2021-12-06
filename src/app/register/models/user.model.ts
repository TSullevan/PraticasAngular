

export class UserModel {
    name: string = '';
    cpf: string = '';
    telephone1: string = '';
    telephone2: string = '';

    public asName(): UserModel {
        this.name = 'Nome';
        return this;
    }
}