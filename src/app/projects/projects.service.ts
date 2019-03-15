import { Injectable } from '@angular/core';
import { ProjectModel } from '../model/Project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private users: Array<ProjectModel>;
  constructor(private http: HttpClient, private router: Router) { }


  public  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>('http://localhost:8080/getProjects');
  }

  public delete(project: ProjectModel): void {
    this.http.post('http://localhost:8080/deleteProject', JSON.stringify(project)).subscribe();
    window.location.reload();
  }
}
