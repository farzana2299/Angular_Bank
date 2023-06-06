import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  acno:any
  uname:any
  psw:any
  cpsw:any
  constructor(private ds:DataService,private router:Router)
  {
  }
  ngOnInit(): void
{

}
signup()
{
  // console.log(this.acno);
  // console.log(this.uname);
  // console.log(this.psw);
  // console.log(this.cpsw);      to avoid .this we can use this method also
  var acno=this.acno
  var uname=this.uname
  var psw=this.psw
  var cpsw=this.cpsw
  console.log(acno);
  console.log(uname);
  console.log(psw);
  console.log(cpsw);
  
  if (psw==cpsw)
  {
    this.ds.register(acno,uname,psw).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl("")
    },
    result=>{
      alert(result.error.message)
      
    }
    )
  }
  else
  {
    alert("password doesn't match")
  }
  
  
  
  
  
  

}
}
