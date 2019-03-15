import { ParentEntity } from './parentEntity.model';
import { UserModel } from './user.model';
import { ProjectModel } from './Project.model';

export class TareaModel extends ParentEntity {

    public nombre: string;
    public descripcion: string;
    public alias: string;
    public estado: string;
    public fecha_inicio: Date;
    public fecha_fin: Date;
    public avance: string;
    public tiempo_tarea: string;
    public usuario_asignado: UserModel;
    public proyecto: ProjectModel;
}
