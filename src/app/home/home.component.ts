import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  uname:any
  constructor()
  {

  }
  ngOnInit():void
  {
    if(localStorage.getItem('currentUser'))
    {
      this.uname=localStorage.getItem('currentUser')
    }
  }


}
