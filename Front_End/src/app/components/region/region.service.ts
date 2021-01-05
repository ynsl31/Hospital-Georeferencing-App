import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Region } from 'src/app/modals/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
//YNS CODE
constructor(private http: HttpClient) { }

getRegions(): Observable<Region[]>{

  return this.http.get<Region[]>(API_URLS.REGION_API);
}

getRegion(id: number): Observable<Region> {

  return this.http.get<Region>(API_URLS.REGION_API+ `/${id}`);
}

createRegion(Region: Region): Observable<Region> {

  return this.http.post<Region>(API_URLS.REGION_API, Region);
}

updateRegion(Region: Region): Observable<any> {

  return this.http.put(API_URLS.REGION_API, Region);
}

deleteRegion(id: number): Observable<any> {

  return this.http.delete(API_URLS.REGION_API+ `/${id}`);
}
  
}
