import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS } from '../../config/api.url.config';
import { Utilisateur } from '../../modals/Utilisateur';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<any[]>{

    return this.http.get<Utilisateur[]>(API_URLS.Utilisateur_API);
  }

  getUtilisateur(id: number): Observable<any> {

    return this.http.get<Utilisateur>(API_URLS.Utilisateur_API + `/${id}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<any> {

    return this.http.post<Utilisateur>(API_URLS.Utilisateur_API, utilisateur);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<any> {

    return this.http.put(API_URLS.Utilisateur_API, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<any> {

    return this.http.delete(API_URLS.Utilisateur_API + `/${id}`);
  }


}
