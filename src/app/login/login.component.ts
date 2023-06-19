import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private router:Router,private fb:FormBuilder,private ds:DataService) { }
  ngOnInit(): void {
    
  }
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]],

  })
  login()
  {
    if(this.loginForm.valid)
    {
      var acno=this.acno
    var psw=this.psw
    this.ds.login(acno,psw).subscribe((result:any)=>{

      localStorage.setItem('currentUser',result.currentUser)
      localStorage.setItem('currentAcno',result.currentAcno)
      alert(result.message)
      this.router.navigateByUrl('home')
    },
    result=>{
      alert(result.error.message)
    }
    )
    }
  }
    
  }

