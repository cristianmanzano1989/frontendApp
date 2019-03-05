import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestResponse } from '../model/RestResponse.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   *
   */
  public validate(user: UserModel): boolean {
    let isValid = true;

    if (!user.cedula) {
      isValid = false;
    }
    if (!user.nombre) {
      isValid = false;
    }
    if (!user.email) {
      isValid = false;
    }
    if (!user.contrasena) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(user));
  }
}
