import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fauna } from '../models/Fauna';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class FaunaService {
  private url=`${base_url}/faunas`
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Fauna[]>(this.url)
  }
}
