import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/City';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url=`${base_url}/ciudades`
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<City[]>(this.url)
  }
}
