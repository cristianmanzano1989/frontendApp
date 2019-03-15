import { Component, OnInit } from '@angular/core';

import { ProjectModel } from '../model/Project.model';
import { ProjectsService } from './projects.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectModel[];
  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.projectService.getProjects().subscribe(res => {
      this.projects  = res;
    });
  }
  /**
   * Editar un proyecto
  */
  public edit(project: ProjectModel): void {
    sessionStorage.setItem('project', JSON.stringify(project));
    this.router.navigate(['/CreateProjectComponent']);
  }


  public delete(project: ProjectModel) {
    swal({
      title: '¿Esta seguro?',
      text: `¿Seguro desea eliminar el proyecto ${project.nombre}?`,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.projectService.delete(project);
           swal(
             'Proyecto Eliminado',
             'Proyecto Eiliminado con exito'
           );
      }
    }).catch((Error) => {
      console.log(Error);
    });
  }
}
