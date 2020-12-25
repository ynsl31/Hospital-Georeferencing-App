import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
