import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Utilisateur } from '../../modals/Utilisateur';
import { API_URLS } from 'src/app/config/api.url.config';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<any[]>{

    return this.http.get<Utilisateur[]>(API_URLS.UTILISATEUR_API);
  }

  getUtilisateur(id: number): Observable<any> {

    return this.http.get<Utilisateur>(API_URLS.UTILISATEUR_API + `/${id}`);
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<any> {

    return this.http.post<Utilisateur>(API_URLS.UTILISATEUR_API, utilisateur);
  }

  updateUtilisateur(utilisateur: Utilisateur): Observable<any> {

    return this.http.put(API_URLS.UTILISATEUR_API, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<any> {

    return this.http.delete(API_URLS.UTILISATEUR_API + `/${id}`);
  }


}
