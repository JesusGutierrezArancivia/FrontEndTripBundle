import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Reserve } from '../models/Reserve';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  private url = `${base_url}/reservas`;
  private listaCambio = new Subject<Reserve[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Reserve[]>(this.url);
  }
  insert(r: Reserve) {
    return this.http.post(this.url, r);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Reserve[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Reserve>(`${this.url}/${id}`);
  }
  update(ri: Reserve) {
    return this.http.put(this.url, ri);
  }
}
