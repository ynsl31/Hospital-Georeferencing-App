import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { NatureService } from '../../modals/NatureService';
import { API_URLS } from 'src/app/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class NatureServiceService {

  // IYO CODE
  constructor(private http: HttpClient) { }

  getNatureServices(): Observable<any[]>{

    return this.http.get<NatureService[]>(API_URLS.NATURESERVICE_API);
  }

  getNatureService(id: number): Observable<any> {

    return this.http.get<NatureService>(API_URLS.NATURESERVICE_API + `/${id}`);
  }

  createNatureService(natureService: NatureService): Observable<any> {

    return this.http.post<NatureService>(API_URLS.NATURESERVICE_API, natureService);
  }

  updateNatureService(natureService: NatureService): Observable<any> {

    return this.http.put(API_URLS.NATURESERVICE_API, natureService);
  }

  deleteNatureService(id: number): Observable<any> {

    return this.http.delete(API_URLS.NATURESERVICE_API + `/${id}`);
  }
}
