import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Ville } from 'src/app/modals/Ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {
//YNS CODE
constructor(private http: HttpClient) { }

getVilles(): Observable<Ville[]>{

  return this.http.get<Ville[]>(API_URLS.VILLE_API);
}

getVille(id: number): Observable<Ville> {

  return this.http.get<Ville>(API_URLS.VILLE_API + `/${id}`);
}

createVille(Ville: Ville): Observable<Ville> {

  return this.http.post<Ville>(API_URLS.VILLE_API, Ville);
}

updateVille(Ville: Ville): Observable<any> {

  return this.http.put(API_URLS.VILLE_API, Ville);
}

deleteVille(id: number): Observable<any> {

  return this.http.delete(API_URLS.VILLE_API + `/${id}`);
}
}
