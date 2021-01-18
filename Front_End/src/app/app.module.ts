import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from"@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/utilisateur/update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './components/utilisateur/utilisateur-details/utilisateur-details.component';
import { UtilisateurListComponent } from './components/utilisateur/utilisateur-list/utilisateur-list.component';
import { FooterComponent } from './master/footer/footer.component';
import { ContentComponent } from './master/content/content.component';
import { HeaderContentComponent } from './master/header-content/header-content.component';
import { LoginComponent } from './master/login/login.component';
import { MasterComponent } from './master/master/master.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { TestComponent } from './master/test/test.component';
import { AddMedecinComponent } from './components/medecin/add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './components/medecin/update-medecin/update-medecin.component';
import { MedecinDetailsComponent } from './components/medecin/medecin-details/medecin-details.component';
import { MedecinListComponent } from './components/medecin/medecin-list/medecin-list.component';
import { AddPatientComponent } from './components/patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { AddNatureServiceComponent } from './components/nature-service/add-nature-service/add-nature-service.component';
import { UpdateNatureServiceComponent } from './components/nature-service/update-nature-service/update-nature-service.component';
import { NatureServiceDetailsComponent } from './components/nature-service/nature-service-details/nature-service-details.component';
import { NatureServiceListComponent } from './components/nature-service/nature-service-list/nature-service-list.component';
import { ServiceDetailsComponent } from './components/service/service-details/service-details.component';
import { ServiceListComponent } from './components/service/service-list/service-list.component';
import { UpdateServiceComponent } from './components/service/update-service/update-service.component';
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { AddVilleComponent } from './components/ville/add-ville/add-ville.component';
import { VilleDetailsComponent } from './components/ville/ville-details/ville-details.component';
import { VilleListComponent } from './components/ville/ville-list/ville-list.component';
import { UpdateVilleComponent } from './components/ville/update-ville/update-ville.component';
import { UpdateCategorieComponent } from './components/categorie/update-categorie/update-categorie.component';
import { AddCategorieComponent } from './components/categorie/add-categorie/add-categorie.component';
import { CategorieListComponent } from './components/categorie/categorie-list/categorie-list.component';
import { CategorieDetailsComponent } from './components/categorie/categorie-details/categorie-details.component';
import { AddHopitalComponent } from './components/hopital/add-hopital/add-hopital.component';
import { UpdateHopitalComponent } from './components/hopital/update-hopital/update-hopital.component';
import { RegionListComponent } from './components/region/region-list/region-list.component';
import { RegionDetailsComponent } from './components/region/region-details/region-details.component';
import { AddRegionComponent } from './components/region/add-region/add-region.component';
import { UpdateRegionComponent } from './components/region/update-region/update-region.component';
import { HopitalListComponent } from './components/hopital/hopital-list/hopital-list.component';
import { HopitalDetailsComponent } from './components/hopital/hopital-details/hopital-details.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderContentComponent,
    ContentComponent,
    TestComponent,
    LoginComponent,
    MasterComponent,
    AddUtilisateurComponent,
    UpdateUtilisateurComponent,
    UtilisateurDetailsComponent,
    UtilisateurListComponent,
    AddMedecinComponent,
    UpdateMedecinComponent,
    MedecinDetailsComponent,
    MedecinListComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
    PatientListComponent,
    AddNatureServiceComponent,
    UpdateNatureServiceComponent,
    NatureServiceDetailsComponent,
    NatureServiceListComponent,
    ServiceDetailsComponent,
    ServiceListComponent,
    UpdateServiceComponent,
    AddServiceComponent,
    AddVilleComponent,
    VilleDetailsComponent,
    VilleListComponent,
    UpdateVilleComponent,
    UpdateCategorieComponent,
    AddCategorieComponent,
    CategorieListComponent,
    CategorieDetailsComponent,
    AddHopitalComponent,
    HopitalListComponent,
    UpdateHopitalComponent,
    HopitalDetailsComponent,
    RegionListComponent,
    RegionDetailsComponent,
    AddRegionComponent,
    UpdateRegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7sg-bGrHiYIbNBdQaHp5SHVFXo-0D_NA'
    }),

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
