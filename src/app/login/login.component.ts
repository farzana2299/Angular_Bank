import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy Banking With Us"
  pdata="Enter Your Password"
  serviceData:any

  acno:any
  psw:any

  constructor(private router:Router,private ds:DataService) { }
  ngOnInit(): void {
    
  }
  login()
  {
    
    var acno=this.acno
    var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
    }
    )
    
    
  }
    
  }

