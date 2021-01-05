import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Hopital } from 'src/app/modals/Hopital';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {
//YNS CODE
constructor(private http: HttpClient) { }

getHopitaux(): Observable<any[]>{

  return this.http.get<Hopital[]>(API_URLS.HOPITAL_API);
}

getHopital(id: number): Observable<any> {

  return this.http.get<Hopital>(API_URLS.HOPITAL_API + `/${id}`);
}

createHopital(Hopital: Hopital): Observable<any> {

  return this.http.post<Hopital>(API_URLS.HOPITAL_API, Hopital);
}

updateHopital(Hopital: Hopital): Observable<any> {

  return this.http.put(API_URLS.HOPITAL_API, Hopital);
}

deleteHopital(id: number): Observable<any> {

  return this.http.delete(API_URLS.HOPITAL_API + `/${id}`);
}
 
}
