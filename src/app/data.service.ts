import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
  const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http:HttpClient) { }
  getHeader()
  {
    //create header
    let headers=new HttpHeaders
    //add token using append()
    let token=JSON.parse(localStorage.getItem("token")||"")
    //store the header in option object as header keys value to achieve overloading
    options.headers=headers.append("access_token",token)

    //return
    return options
  }
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
    return this.http.get('http://localhost:3000/getUser/'+acno,this.getHeader())
  }
  //api to getBalance
  getBalance(acno:any)
  {
    return this.http.get('http://localhost:3000/balance/'+acno,this.getHeader())
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
    return this.http.post('http://localhost:3000/transfer',body,this.getHeader())
  }
  //api for account statement
  getTransaction(acno:any)
  {
    return this.http.get('http://localhost:3000/history/'+acno,this.getHeader())
  }
  //api for deleteAC
  deleteAc(acno:any)
  {
    return this.http.delete('http://localhost:3000/deleteac/'+acno,this.getHeader())
  }
}


