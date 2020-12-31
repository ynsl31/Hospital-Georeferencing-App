import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';

// Medecin
import { MedecinListComponent } from "./components/medecin/medecin-list/medecin-list.component";


const routes: Routes = [
  {path: '',redirectTo : 'login',pathMatch : 'full'},

  // add your new path here
  {path: '',component : MasterComponent,children :[

    // IYO CODE
    {path: 'medecins', component : MedecinListComponent},




  {path: 'test',component : TestComponent},

]},
{path: 'test',component : TestComponent},
{path: 'login',component : LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
