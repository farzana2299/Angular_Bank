import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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
exportpdf()
{
  // create object for jsPDF
  const pdf=new jsPDF()
  //set row and col for pdf
  let col=['Type','Amount','Date']
  let row:any=[]
  // set style for pdf
  pdf.setFontSize(16)
  //text means heading and 15,10 is coordinated which indicate the position of heading
  pdf.text('Mini Statement',15,10)
  //content style
  pdf.setTextColor(99)
  pdf.setFontSize(12)
  // convert array of object into array of array
  var allitem=this.transaction
  for(let i of allitem)
  {
    let rowData=[i.type,i.amount,i.date]
    row.push(rowData)
  }

  //convert nested array into pdf
  (pdf as any).autoTable(col,row,{startY:15})

  //open converted pdf in new tab
  pdf.output('dataurlnewwindow')

  //to aoto dopwnload and save
  pdf.save('AccountStatement.pdf')

}
}
