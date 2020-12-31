import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Departement } from '../../modals/Departement';
import { API_URLS } from 'src/app/config/api.url.config';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  // IYO CODE
  constructor(private http: HttpClient) { }

  getDepartements(): Observable<any[]>{

    return this.http.get<Departement[]>(API_URLS.DEPARTEMENT_API);
  }

  getDepartement(id: number): Observable<any> {

    return this.http.get<Departement>(API_URLS.DEPARTEMENT_API + `/${id}`);
  }

  createDepartement(departement: Departement): Observable<any> {

    return this.http.post<Departement>(API_URLS.DEPARTEMENT_API, departement);
  }

  updateDepartement(departement: Departement): Observable<any> {

    return this.http.put(API_URLS.DEPARTEMENT_API, departement);
  }

  deleteDepartement(id: number): Observable<any> {

    return this.http.delete(API_URLS.DEPARTEMENT_API + `/${id}`);
  }

}
