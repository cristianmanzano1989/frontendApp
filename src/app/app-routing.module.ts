import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
    {path:'',redirectTo:'/userComponent',pathMatch:'full'},
    {path:'appComponent',component:AppComponent},
    {path:'userComponent',component:UserComponent},
    {path:'createUserComponent',component:CreateUserComponent},
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
