import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Flora } from '../models/Flora';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class FloraService {
  private url=`${base_url}/floras`
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Flora[]>(this.url)
  }
}
