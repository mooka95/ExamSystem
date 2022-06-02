import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth',loadChildren:()=>import('./Components/authntication/authntication.module').then(m=>m.AuthnticationModule)},
  {path: '',redirectTo: 'auth',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
