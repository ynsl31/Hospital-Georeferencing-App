import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Patient } from '../../modals/Patient';
import { API_URLS } from 'src/app/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  // IYO CODE
  constructor(private http: HttpClient) { }

  getPatients(): Observable<any[]>{

    return this.http.get<Patient[]>(API_URLS.PATIENT_API);
  }

  getPatient(id: number): Observable<any> {

    return this.http.get<Patient>(API_URLS.PATIENT_API + `/${id}`);
  }

  createPatient(patient: Patient): Observable<any> {

    return this.http.post<Patient>(API_URLS.PATIENT_API, patient);
  }

  updatePatient(patient: Patient): Observable<any> {

    return this.http.put(API_URLS.PATIENT_API, patient);
  }

  deletePatient(id: number): Observable<any> {

    return this.http.delete(API_URLS.PATIENT_API + `/${id}`);
  }

}
