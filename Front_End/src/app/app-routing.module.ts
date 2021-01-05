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
import { DepartementListComponent } from './components/departement/departement-list/departement-list.component';
import { CategorieDetailsComponent } from './components/categorie/categorie-details/categorie-details.component';
import { CategorieListComponent } from './components/categorie/categorie-list/categorie-list.component';



const routes: Routes = [
  {path: '',redirectTo : 'login',pathMatch : 'full'},

  // add your new path here
  {path: '',component : MasterComponent,children :[

    // MEDECINE
    {path: 'medecins', component : MedecinListComponent},

    // NATURE SERVICE
    {path: 'nature-services', component : NatureServiceListComponent},

    // YNS CODE
    {path: 'hopitaux', component : HopitalListComponent},
    {path: 'villes', component : VilleListComponent},
    {path: 'regions', component : RegionListComponent},
    {path: 'departements', component : DepartementListComponent},
    {path: 'categories', component : CategorieListComponent},


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
