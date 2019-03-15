import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from './../model/Project.model';
import { RestResponse } from '../model/RestResponse.model';
import { Observable } from 'rxjs';
import { UserModel } from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private http: HttpClient) { }

  public validate(proyecto: ProjectModel): boolean {
    let isValid = true;

    if (!proyecto.nombre) {
      isValid = false;
    }
    if (!proyecto.descripcion) {
      isValid = false;
    }
    if (!proyecto.alias) {
      isValid = false;
    }
    if (!proyecto.estado) {
      isValid = false;
    }
    if (!proyecto.fecha_inicio) {
      isValid = false;
    }
    if (!proyecto.fecha_fin) {
      isValid = false;
    }
    if (!proyecto.responsable) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(proyecto: ProjectModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdatePro', JSON.stringify(proyecto));
  }

  public getUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8080/usuarios');
   }

}
