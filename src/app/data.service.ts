import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

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
  //api to login
  login(acno:any,psw:any)
  {
    const bodyData={
      acno:acno,
      psw:psw
    }
    return this.http.post('http://localhost:3000/login',bodyData)
  }
  //api to get single user data
  getUser(acno:any)
  {
    return this.http.get('http://localhost:3000/getUser/'+acno)
  }
  //api to getBalance
  getBalance(acno:any)
  {
    return this.http.get('http://localhost:3000/balance/'+acno)
  }

  //api to money transfer
  moneyTransfer(toAcno:any,fromAcno:any,amount:any,psw:any,date:any) {
    const body={
      toAcno,
      fromAcno,
      amount,
      psw,
      date
    }
    return this.http.post('http://localhost:3000/transfer',body)
  }
  //api for account statement
  getTransaction(acno:any)
  {
    return this.http.get('http://localhost:3000/history/'+acno)
  }
}


