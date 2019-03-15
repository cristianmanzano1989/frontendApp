import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: UserModel[];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  public edit(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createUserComponent']);
  }


  public delete(user: UserModel) {
    swal({
      title: '¿Esta seguro?',
      text: `¿Seguro desea eliminar el usuario ${user.nombre}?`,
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.userService.delete(user);
           swal(
             'Usuario Eliminado',
             'Usuario Eiliminado con exito',
             'success'
           );
      }
    });
  }

}
