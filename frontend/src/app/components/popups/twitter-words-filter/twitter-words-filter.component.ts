import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPopUpComponent } from '../dialog-pop-up/dialog-pop-up.component';
import { MatTable } from '@angular/material/table';
import { PopupBlacklistTwitter, PopUpWordMapTwitter } from 'src/app/types/global';
import { ApiMongo } from 'src/app/services/api.mongo';


@Component({
  selector: 'app-twitter-words-filter',
  templateUrl: './twitter-words-filter.component.html',
  styleUrls: ['./twitter-words-filter.component.css']
})
export class TwitterWordsFilterComponent implements OnInit {


  word_slider = 0;
  hashtag_slider = 0;
  tag_slider = 0;

  word(value: number) {
    return value;
  }
  hashtag(value: number) {
    return value;
  }
  tag(value: number) {
    return value;
  }
  
  bldeletew: string= "";
  wordSelected: any = {
    id: null,
    word: "",
  };

  words: PopupBlacklistTwitter[] = [];


  displayedColumns: string[] = ['buttons', "word"];
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(
    private apiMongo: ApiMongo,
    public dialog: MatDialogRef<TwitterWordsFilterComponent>,
    public dialogVerificar: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: PopUpWordMapTwitter
 
    ) {   }

  ngOnInit(): void {

    this.words = this.data.data;
    this.word_slider= this.data.word_slider;
    this.tag_slider = this.data.tag_slider;
    this.hashtag_slider = this.data.hashtag_slider;  
    console.log(this.data ,this.words 
      ,this.word_slider
      ,this.tag_slider 
      ,this.hashtag_slider )
  }


  addBlacklistedWord(){
    
    this.apiMongo.addBlacklistedWord(this.wordSelected.Word).subscribe(data=> {
      this.apiMongo.getBlackList().subscribe(data => {
        this.words = data;
      });
    }); 
  }


  dialogEliminarUnCampo(event: any, word: any) {
    
    console.log(this.wordSelected)
    this.openDialog("ELIMINAR", "¿Quiere eliminar " + word.Word + "?", true, "eliminar", word.Word );
    event.stopPropagation();
  }
  openDialog(title: string, msg: string, cancelBtn: boolean, tipo: any, word:string) {
    const dialogRef = this.dialogVerificar.open(DialogPopUpComponent, {
      data: { title: title, msg: msg, cancelBtn: cancelBtn },
      disableClose: true
      
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if (result && tipo == "eliminar") this.deleteBlacklistedWord(word);
    });
  }

  
  deleteBlacklistedWord(word: string){
    this.apiMongo.deleteBlacklistedWord(word).subscribe(data=> {
      this.apiMongo.getBlackList().subscribe(data => {
        this.words = data;
      });
    }); 

  }


  resetItem() {
    this.wordSelected.id = null;
    this.wordSelected.Word = "";
    
  }
  test(){
    console.log("close");
    this.dialog.close({
      word_slider: this.word_slider, 
      hashtag_slider: this.hashtag_slider,
      tag_slider: this.tag_slider
      });
  }


}
