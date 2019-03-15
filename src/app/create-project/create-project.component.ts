import { Component, OnInit } from '@angular/core';
import { ProjectModel } from './../model/Project.model';
import { CreateProjectService } from './create-project.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { UserModel } from './../model/user.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  proyecto: ProjectModel;
  isValid = true;
  message = '';
  usuarios: UserModel[];
  constructor(private createProjectService: CreateProjectService,
     private router: Router) {
    if (sessionStorage.getItem('project')) {
      this.proyecto = JSON.parse(sessionStorage.getItem('project'));
    } else {
      this.proyecto = new ProjectModel();
    }
  }

  ngOnInit() {
       // Se manda a llamar el metodo que carga los usuarios de la base de datos
       this.createProjectService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  public saveOrUpdatePro(): void {
    this.isValid = this.createProjectService.validate(this.proyecto);

    if (this.isValid) {
      this.createProjectService.saveOrUpdate(this.proyecto).subscribe(res => {
          swal(
            'Guardar',
            'Proyecto guardado con Exito!',
            'success'
          );
          this.router.navigate(['/projectsComponent']);

      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
    sessionStorage.clear();
  }

}
