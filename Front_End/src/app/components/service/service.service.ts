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

  getServices(hopital: number): Observable<any[]>{

    return this.http.get<Service[]>(API_URLS.SERVICE_API  + `/${hopital}/services`);
  }

  getService(hopital: number, id: number): Observable<any> {

    return this.http.get<Service>(API_URLS.SERVICE_API   + `/${hopital}/services/${id}`);
  }

  createService(hopital: number, service: Service): Observable<any> {

    return this.http.post<Service>(API_URLS.SERVICE_API   + `/${hopital}/services`, service);
  }

  updateService(hopital: number, service: Service): Observable<any> {

    return this.http.put(API_URLS.SERVICE_API  + `/${hopital}/services`, service);
  }

  deleteService(hopital: number, id: number): Observable<any> {

    return this.http.delete(API_URLS.SERVICE_API + `/${hopital}/services/${id}`);
  }

}
