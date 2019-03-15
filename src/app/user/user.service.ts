import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: Array<UserModel>;
  constructor(private http: HttpClient, private router: Router) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('http://localhost:8080/getUsers');
  }
  public delete(user: UserModel): void {
    this.http.post('http://localhost:8080/deleteUser', JSON.stringify(user)).subscribe();
    window.location.reload();
  }
}
