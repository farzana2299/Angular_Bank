import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uname:any
  acno:any
  userData:any
  alertMessage:any=""
  alertColor:boolean=true 
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder,
    private datePipe:DatePipe)
  {

  }
  ngOnInit():void
  {
    //when logout user try to get using backbutton 
    if(!localStorage.getItem('currentAcno'))
    {
      alert('please login')
      this.router.navigateByUrl("")
    }
    if(localStorage.getItem('currentUser'))
    {
      this.uname=localStorage.getItem('currentUser')
    }

  }
  accessUser()
  {
    if(localStorage.getItem('currentUser'))
    {
      this.uname=localStorage.getItem('currentUser')
    }
    this.ds.getUser(this.acno).subscribe((result:any)=>{
      this.userData=result.message
    })
  }
  checkBalance()
  {
    if(localStorage.getItem('currentAcno'))
    {
      this.acno=localStorage.getItem('currentAcno')
    }
    this.ds.getBalance(this.acno).subscribe((result:any)=>{
      this.checkBalance=result.message
    })
  }
logout()
{
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentuname')
  this.router.navigateByUrl("")
}
// model form of transaction form 
transaction=this.fb.group({
  acno:[''],
  amt:[''],
  psw:['']
})
moneyTransfer()
{
  if(this.transaction.valid)
  {
    this.alertMessage=""
    var date=new Date()
    let latest_date=this.datePipe.transform(date, 'short');
    if(localStorage.getItem('currentAcno'))
    {
      this.acno=localStorage.getItem('currentAcno')
    }
    if(this.acno==this.transaction.value.acno)
    {
      this.alertMessage="Failed due to sending to same account"
      this.alertColor=false
    }
    else{
      this.ds.moneyTransfer(this.transaction.value.acno,
        this.acno,
        this.transaction.value.amt,
        this.transaction.value.psw,
        latest_date).subscribe((result:any)=>{
          this.alertMessage=result.message
          this.alertColor=true
        },
        result=>{
          this.alertMessage=result.error.message
          this.alertColor=false
        }
        )
    }
  }
  else{
    this.alertMessage='Invalid Form'
    this.alertColor=false 
  }
}
}
