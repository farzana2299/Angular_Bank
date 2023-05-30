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

  constructor(private router:Router,private ds:DataService) { }
  ngOnInit(): void {
    this.serviceData=this.ds.sdata
    console.log(this.serviceData);
    this.serviceData.smethod
    
  }
  login(a:any)
  {
    // console.log(a.value);
    
    // alert('button clicked')
    this.router.navigateByUrl('home')
  }
    
  }

