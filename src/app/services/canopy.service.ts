import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanopyService {

  API_URI = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URI}/canopy`)
  }

  /* getAll(){
  return this.http.get(`${this.API_URI}/weka`)
  } */

  getList(id: number) {
    return this.http.get(`${this.API_URI}/canopy/${id}`);
  }

}
