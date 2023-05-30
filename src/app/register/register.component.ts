import { Component } from '@angular/core';

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
  constructor()
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
  
  
  
  
  
  
  
  

}
}
