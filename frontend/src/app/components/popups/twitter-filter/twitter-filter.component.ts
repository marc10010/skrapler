import { Component, OnInit, Inject, Input } from '@angular/core';
import { PopupFilterTwitter }from 'src/app/types/global';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-twitter-filter',
  templateUrl: './twitter-filter.component.html',
  styleUrls: ['./twitter-filter.component.css']
})
export class TwitterFilterComponent implements OnInit {
  pickerValue: number = 1;
  
  constructor(
    public dialogRef: MatDialogRef<TwitterFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopupFilterTwitter
  ) { }
  minDate = new Date();
  maxDate = new Date();
  dateFrom = new Date();
  dateTo = new Date();


  ngOnInit(): void {
    console.log(this.data);
    this.pickerValue=this.data.picker; 
    this.minDate = new Date (this.data.fechaIni);
    this.maxDate = new Date (this.data.fechaFin);
    this.dateTo= new Date(this.maxDate);
    this.dateFrom = new Date(this.minDate);
    
  }
  applyFilters() {
    this.dialogRef.close({'DateFrom': this.dateFrom, 'DateTo': this.dateTo, 'picker': this.pickerValue });
  }
  
}
