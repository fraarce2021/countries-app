import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.eu/rest/v2";

  get httpParams():HttpParams{
    return new HttpParams()
    .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  searchCountry(dataSearched:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${dataSearched}`
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  searchCapital(dataSearched:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${dataSearched}`
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }

  searchCountryByAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  searchRegion(region:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
}
