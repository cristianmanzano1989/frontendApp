import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserModel } from '../model/user.model';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpstatus';


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
  constructor(private createUserService: CreateUserService, private router: Router) {
    this.user = new UserModel();
   }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
    this.isValid = this.createUserService.validate(this.user);

    if (this.isValid) {
      this.createUserService.saveOrUpdate(this.user).subscribe(res => {
        if (res.getresponseCode() === OK) {
          this.router.navigate(['/userComponent']);
        } else {
          this.message = res.getmessage();
          this.isValid = false;
        }
      });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
  }

}
