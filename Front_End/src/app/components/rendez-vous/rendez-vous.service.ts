import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Patient } from 'src/app/modals/Patient';
import { RendezVous } from 'src/app/modals/RendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  getRendezVouss(): Observable<any[]>{

    return this.http.get<RendezVous[]>(API_URLS.RD_API);
  }

  getRendezVous(id: number): Observable<any> {

    return this.http.get<RendezVous>(API_URLS.RD_API + `/${id}`);
  }

  createRendezVous(rendezVous: RendezVous): Observable<any> {

    return this.http.post<RendezVous>(API_URLS.RD_API, rendezVous);
  }

  updateRendezVous(rendezVous: RendezVous): Observable<any> {

    return this.http.put(API_URLS.RD_API, rendezVous);
  }

  deleteRendezVous(id: number): Observable<any> {

    return this.http.delete(API_URLS.RD_API + `/${id}`);
  }

  getRendezVousByPatient(patient: Patient): Observable<any> {

    return this.http.post<RendezVous>(API_URLS.RD_API + `/patient`, patient);
  }

  desactiveRendezVous(id: number): Observable<any> {

    return this.http.post(API_URLS.RD_API + `/${id}/desactive`, null);
  }
  
}
