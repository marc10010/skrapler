import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopUps } from 'src/app/types/global';


@Component({
  selector: 'app-dialog-pop-up',
  templateUrl: './dialog-pop-up.component.html',
  styleUrls: ['./dialog-pop-up.component.css']
})
export class DialogPopUpComponent {


  constructor( public dialogRef: MatDialogRef<DialogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PopUps) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
