import { ParentEntity } from './parentEntity.model';
import { UserModel } from './user.model';

export class ProjectModel extends ParentEntity {

    public nombre: string;
    public descripcion: string;
    public alias: string;
    public estado: string;
    public fecha_inicio: Date;
    public fecha_fin: Date;
    public responsable: UserModel;
}
