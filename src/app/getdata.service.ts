import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private finaldata = [];
  private apiurl = "https://coronavirus-19-api.herokuapp.com/countries";
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.apiurl);
  }
}
