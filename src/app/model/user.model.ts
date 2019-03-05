import { ParentEntity } from './parentEntity.model';

export class UserModel extends ParentEntity {

    public cedula: string;
    public nombre: string;
    public email: string;
    public contrasena: string;
}
