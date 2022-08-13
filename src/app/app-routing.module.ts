import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'Register', component:RegisterComponent},
  { path: 'userHome', component:UserHomeComponent},
  { path: 'adminHome', component:AdminHomeComponent},
  { path: 'addAccount', component:AddAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
