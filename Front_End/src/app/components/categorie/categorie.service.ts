import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/config/api.url.config';
import { Categorie } from 'src/app/modals/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
//YNS CODE
constructor(private http: HttpClient) { }

getCategories(): Observable<Categorie[]>{

  return this.http.get<Categorie[]>(API_URLS.CATEGORIE_API);
}

getCategorie(id: number): Observable<Categorie> {

  return this.http.get<Categorie>(API_URLS.CATEGORIE_API+ `/${id}`);
}

createCategorie(Categorie: Categorie): Observable<Categorie> {

  return this.http.post<Categorie>(API_URLS.CATEGORIE_API, Categorie);
}

updateCategorie(Categorie: Categorie): Observable<any> {

  return this.http.put(API_URLS.CATEGORIE_API, Categorie);
}

deleteCategorie(id: number): Observable<any> {

  return this.http.delete(API_URLS.CATEGORIE_API+ `/${id}`);
}
 


  
}
