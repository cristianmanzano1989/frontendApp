import { Injectable } from '@angular/core';
import { TareaModel } from './../model/Tarea.model';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../model/RestResponse.model';
import { Observable } from 'rxjs';
import { UserModel } from './../model/user.model';
import { ProjectModel } from './../model/Project.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTareaService {
  getProjectos(): any {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) { }

  public validate(tarea: TareaModel): boolean {
    let isValid = true;

    if (!tarea.nombre) {
      isValid = false;
    }
    if (!tarea.descripcion) {
      isValid = false;
    }
    if (!tarea.alias) {
      isValid = false;
    }
    if (!tarea.estado) {
      isValid = false;
    }
    if (!tarea.fecha_inicio) {
      isValid = false;
    }
    if (!tarea.fecha_fin) {
      isValid = false;
    }
    if (!tarea.usuario_asignado) {
      isValid = false;
    }
    if (!tarea.avance) {
      isValid = false;
    }
    if (!tarea.tiempo_tarea) {
      isValid = false;
    }
    if (!tarea.proyecto) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(tarea: TareaModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdateTareas', JSON.stringify(tarea));
  }

  public getUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8080/getUsers');
   }

   public getProyectos(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>('http://localhost:8080/getProjects');
   }
}
