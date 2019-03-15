import { Injectable } from '@angular/core';
import { TareaModel } from './../model/Tarea.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas: Array<TareaModel>;
  constructor(private http: HttpClient, private router: Router) { }

  public getTareas(): Observable<TareaModel[]> {
    return this.http.get<TareaModel[]>('http://localhost:8080/getTareas');
  }
  public delete(user: TareaModel): void {
    this.http.post('http://localhost:8080/deleteTarea', JSON.stringify(user)).subscribe();
    window.location.reload();
  }

}
