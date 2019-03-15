import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { CreateTareaComponent } from './create-tarea/create-tarea.component';


const routes: Routes = [
    {path: '', redirectTo: '/userComponent', pathMatch: 'full'},
    {path: 'appComponent', component: AppComponent},
    {path: 'userComponent', component: UserComponent},
    {path: 'createUserComponent', component: CreateUserComponent},
    {path: 'projectsComponent', component: ProjectsComponent},
    {path: 'CreateProjectComponent', component: CreateProjectComponent},
    {path: 'tareasComponent', component: TareasComponent},
    {path: 'login', component: LoginComponent},
    {path: 'createTareaComponent', component: CreateTareaComponent}
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
