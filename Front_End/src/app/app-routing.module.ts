import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './master/test/test.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';

// Medecin
import { MedecinListComponent } from "./components/medecin/medecin-list/medecin-list.component";
// Nature Service
import { NatureServiceListComponent } from "./components/nature-service/nature-service-list/nature-service-list.component";

import { HopitalListComponent } from './components/hopital/hopital-list/hopital-list.component';
import { VilleListComponent } from './components/ville/ville-list/ville-list.component';
import { RegionListComponent } from './components/region/region-list/region-list.component';
import { CategorieDetailsComponent } from './components/categorie/categorie-details/categorie-details.component';
import { CategorieListComponent } from './components/categorie/categorie-list/categorie-list.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';
import { BoardAdminComponent } from './components/utilisateur/admin/board-admin/board-admin.component';
import { AuthGuardService } from './_helpers/auth.guard.service';
import { Role } from './modals/Role';


const routes: Routes = [
  {path: '',redirectTo : 'login',pathMatch : 'full'},

  // add your new path here
  {path: '',component : MasterComponent,children :[


    // MEDECINE
    {path: 'medecins', component : MedecinListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},

    // NATURE SERVICE
    {path: 'nature-services', component : NatureServiceListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},

    // YNS CODE
    {path: 'hopitaux', component : HopitalListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},
    {path: 'villes', component : VilleListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},
    {path: 'regions', component : RegionListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},
    {path: 'categories', component : CategorieListComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin] }},
    {path: 'adminboard', component : BoardAdminComponent, canActivate: [AuthGuardService],
    data: { roles: [Role.Admin]}},
  {path: 'test',component : TestComponent},
]},
 {path: 'welcome',component : WelcomeComponent},
{path: 'login',component : LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
