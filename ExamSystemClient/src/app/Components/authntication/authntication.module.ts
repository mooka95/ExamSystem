import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
const routes:Routes=[
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: '',redirectTo:'login',pathMatch:'full'}
]



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthnticationModule { }
