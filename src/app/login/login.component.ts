import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

      titulo = 'Inicia Sesión';
      user: UserModel;
      constructor() {

      this.user = new UserModel();
      }

      ngOnInit() {
      }

      Login(): void {
        console.log(this.user);
        if (this.user.email == null  || this.user.contrasena == null) {
          Swal('Error login', 'Email o Contraseña vacios');

        }
      }

}
