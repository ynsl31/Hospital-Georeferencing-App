import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Medecin } from '../../modals/Medecin';
import { API_URLS } from 'src/app/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  // IYO CODE
  constructor(private http: HttpClient) { }

  getMedecins(): Observable<any[]>{

    return this.http.get<Medecin[]>(API_URLS.MEDECIN_API);
  }

  getMedecinsByService(id: number): Observable<any[]>{

    return this.http.get<Medecin[]>(API_URLS.MEDECIN_API + `/service/${id}`);
  }

  getMedecin(id: number): Observable<any> {

    return this.http.get<Medecin>(API_URLS.MEDECIN_API + `/${id}`);
  }

  createMedecin(medecin: Medecin): Observable<any> {

    return this.http.post<Medecin>(API_URLS.MEDECIN_API, medecin);
  }

  updateMedecin(medecin: Medecin): Observable<any> {

    return this.http.put(API_URLS.MEDECIN_API, medecin);
  }

  deleteMedecin(id: number): Observable<any> {

    return this.http.delete(API_URLS.MEDECIN_API + `/${id}`);
  }

}
