import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
  //api to register
  register(acno:any,uname:any,psw:any)
  {
    const bodyData={
      acno,
      uname,
      psw
    }
    return this.http.post('http://localhost:3000/register',bodyData)
  }
  login(acno:any,psw:any)
  {
    const bodyData={
      acno:acno,
      psw:psw
    }
    return this.http.post('http://localhost:3000/login',bodyData)
  }
}
//api to login
