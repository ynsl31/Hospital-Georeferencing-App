import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { UpdateUtilisateurComponent } from './components/utilisateur/update-utilisateur/update-utilisateur.component';
import { UtilisateurDetailsComponent } from './components/utilisateur/utilisateur-details/utilisateur-details.component';
import { UtilisateurListComponent } from './components/utilisateur/utilisateur-list/utilisateur-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUtilisateurComponent,
    UpdateUtilisateurComponent,
    UtilisateurDetailsComponent,
    UtilisateurListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
