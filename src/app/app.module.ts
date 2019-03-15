import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TareasComponent } from './tareas/tareas.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';

const  routes: Routes = [

  {path: '', component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    CreateProjectComponent,
    ProjectsComponent,
    TareasComponent,
    CreateTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
