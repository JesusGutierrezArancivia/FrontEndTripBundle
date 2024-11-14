import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/Activity';
import { Subject } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url=`${base_url}/actividades`
  private listaCambio=new Subject<Activity[]>();
  
  constructor(private http:HttpClient) {}
  list(){
    return this.http.get<Activity[]>(this.url)
  }
  insert(a: Activity) {
    return this.http.post(this.url, a);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Activity[]) {
    this.listaCambio.next(listaNueva);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  listId(id: number) {
    return this.http.get<Activity>(`${this.url}/${id}`);
  }
  update(ac: Activity) {
    return this.http.put(this.url, ac);
  }
}
