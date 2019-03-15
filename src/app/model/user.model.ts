import { ParentEntity } from './parentEntity.model';
import {Rol} from './Rol';

export class UserModel extends ParentEntity {

    public cedula: string;
    public nombre: string;
    public email: string;
    public contrasena: string;
    public rol: Rol;
}
