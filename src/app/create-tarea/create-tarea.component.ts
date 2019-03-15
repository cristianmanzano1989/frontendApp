import { Component, OnInit } from '@angular/core';
import { TareaModel } from './../model/Tarea.model';
import { CreateTareaService } from './create-tarea.service';
import { Router } from '@angular/router';
import { ProjectModel } from './../model/Project.model';
import { UserModel } from './../model/user.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-tarea',
  templateUrl: './create-tarea.component.html',
  styleUrls: ['./create-tarea.component.css']
})
export class CreateTareaComponent implements OnInit {

  tarea: TareaModel;
  isValid = true;
  message = '';
  usuarios: UserModel[];
  proyectos: ProjectModel[];
  constructor(private createTareaService: CreateTareaService,
     private router: Router) {
    if (sessionStorage.getItem('tarea')) {
      this.tarea = JSON.parse(sessionStorage.getItem('tarea'));
    } else {
      this.tarea = new TareaModel();
    }
  }

  ngOnInit() {
       // Se manda a llamar el metodo que carga los usuarios de la base de datos
       this.createTareaService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
       this.createTareaService.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
  }

  public saveOrUpdateTareas(): void {
    this.isValid = this.createTareaService.validate(this.tarea);

    if (this.isValid) {
      this.createTareaService.saveOrUpdate(this.tarea).subscribe(res => {
          swal(
            'Guardar',
            'Tarea guardada con Exito!',
            'success'
          );
          this.router.navigate(['/tareasComponent']);

      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
    sessionStorage.clear();
  }

}
