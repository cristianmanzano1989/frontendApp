import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { TareaModel } from './../model/Tarea.model';
import { TareasService } from './tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: TareaModel[];
  constructor(private tareasService: TareasService, private router: Router) { }

  ngOnInit() {
    this.loadTareas();
  }

  /**
   * Cargar los
   */
  private loadTareas(): void {
    this.tareasService.getTareas().subscribe( res => {
      this.tareas  = res;
    });
  }
  /**
   * Editar un proyecto
  */
  public edit(tarea: TareaModel): void {
    sessionStorage.setItem('tarea', JSON.stringify(tarea));
    this.router.navigate(['/createTareaComponent']);
  }

  /**
   *Eliminar una tarea
   *  tarea
   */
  public delete(tarea: TareaModel) {
    swal({
      title: '¿Esta seguro?',
      text: `¿Seguro desea eliminar el proyecto ${tarea.nombre}?`,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.tareasService.delete(tarea);
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
