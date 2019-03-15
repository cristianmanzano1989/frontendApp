import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../model/user.model';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpstatus';
import { Rol } from '../model/Rol';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  user: UserModel;
  isValid = true;
  message = '';
  roles: Rol[];
  constructor(private createUserService: CreateUserService, private router: Router) {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      this.user = new UserModel();
    }

   }

  ngOnInit() {
    // Se manda a llamar el metodo que carga los roloes de la base de datos
    this.createUserService.getRoles().subscribe(roles => this.roles = roles);
  }

  public saveOrUpdate(): void {
    this.isValid = this.createUserService.validate(this.user);

    if (this.isValid) {
      this.createUserService.saveOrUpdate(this.user).subscribe(res => {
          swal(
            'Guardar',
            'Usuario guardado con Exito!',
            'success'
          );
          this.router.navigate(['/userComponent']);

      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
    sessionStorage.clear();
  }

}
