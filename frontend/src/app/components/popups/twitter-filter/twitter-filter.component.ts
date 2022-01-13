import { Component, OnInit, Inject, Input } from '@angular/core';
import { PopupFilterTwitter }from 'src/app/types/global';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TwitterWhitelistComponent } from '../twitter-whitelist/twitter-whitelist.component';


@Component({
  selector: 'app-twitter-filter',
  templateUrl: './twitter-filter.component.html',
  styleUrls: ['./twitter-filter.component.css']
})
export class TwitterFilterComponent implements OnInit {
  pickerValue: number = 5;
  
  constructor(
    public dialogRef: MatDialogRef<TwitterFilterComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: PopupFilterTwitter
  ) { }
  minDate = new Date();
  maxDate = new Date();
  dateFrom = new Date();
  dateTo = new Date();
  today = new Date();
  word: string= "";



  ngOnInit(): void {
    console.log(this.data);
    this.pickerValue=this.data.picker; 
    this.minDate = new Date (this.data.fechaIni);
    this.maxDate = new Date (this.data.fechaFin);
    this.dateTo= new Date(this.maxDate);
    this.dateFrom = new Date(this.minDate);
    this.word = this.data.word;
    
  }
  applyFilters() {
    this.dialogRef.close({'DateFrom': this.dateFrom, 'DateTo': this.dateTo, 'picker': this.pickerValue, 'word': this.word });
  }
  minDateFunction(a: Date, b: Date){
    if(a < b) return a;
    return b;
  }
  


  openDialogWhitelist(){
    const dialogRef = this.dialog.open(TwitterWhitelistComponent, {
      width: '40%',
      height: '95%',
      disableClose: true,
     });
    /*dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
    });
    */
  }
  
}
