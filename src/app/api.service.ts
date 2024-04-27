import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamodel } from '../../model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  post(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/angular",data)
  }
  get(){
    return this.http.get<datamodel>("http://localhost:3000/angular");
  }
  delete(id:number){
    return this.http.delete<number>("http://localhost:3000/angular/"+id);
  }
}
