import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TodohomeComponent } from './components/todohome/todohome.component';
import { ListtodoComponent } from './components/listtodo/listtodo.component';
import { TododetailComponent } from './components/tododetail/tododetail.component';

const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'todo',component:TodohomeComponent},
  {path:'mytodos',component:ListtodoComponent},
  {path:'tododetail/:id',component:TododetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
