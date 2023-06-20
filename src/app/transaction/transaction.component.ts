import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  acno:any
  transaction:any
  date:any;
  searchString=""
constructor(private ds:DataService)
{

}
ngOnInit():void
{
if(localStorage.getItem('currentAcno'))
{
  this.acno=localStorage.getItem('currentAcno')
  this.ds.getTransaction(this.acno).subscribe((result:any)=>{
    this.transaction=result.message
  })
}
  this.date=new Date()
}
filterPipe(data:any)
{
  this.searchString=data
}
}
