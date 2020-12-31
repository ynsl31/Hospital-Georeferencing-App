import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Service } from '../../modals/Service';
import { API_URLS } from 'src/app/config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // IYO CODE
  constructor(private http: HttpClient) { }

  getServices(): Observable<any[]>{

    return this.http.get<Service[]>(API_URLS.SERVICE_API);
  }

  getService(id: number): Observable<any> {

    return this.http.get<Service>(API_URLS.SERVICE_API + `/${id}`);
  }

  createService(service: Service): Observable<any> {

    return this.http.post<Service>(API_URLS.SERVICE_API, service);
  }

  updateService(service: Service): Observable<any> {

    return this.http.put(API_URLS.SERVICE_API, service);
  }

  deleteService(id: number): Observable<any> {

    return this.http.delete(API_URLS.SERVICE_API + `/${id}`);
  }

}
