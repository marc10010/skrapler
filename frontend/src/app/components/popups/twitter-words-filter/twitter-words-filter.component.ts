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
    Word: "",
  };

  words: PopupBlacklistTwitter[] = [];
  wordAll: PopupBlacklistTwitter[] = [];


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
    this.wordAll = this.words;
    console.log(this.wordAll);
  }


  addBlacklistedWord(){
    console.log(this.words, this.words.indexOf(this.wordSelected.Word), this.word.length);
    //this.words.indexOf(this.wordSelected.Word)
    if(this.words.indexOf(this.wordSelected.Word) >=0){
      this.openDialog("Alerta", "La palabra "+this.wordSelected.Word+ " ya existe", false, "aviso", this.wordSelected.Word)
    }
    else{
      this.apiMongo.addBlacklistedWord(this.wordSelected.Word).subscribe(data=> {
        this.apiMongo.getBlackList().subscribe(data => {
          this.words = data;
        });
      });
    } 
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
    this.goTo();
    
  }
  test(){
    console.log("close");
    this.dialog.close({
      word_slider: this.word_slider, 
      hashtag_slider: this.hashtag_slider,
      tag_slider: this.tag_slider
      });
  }

  goTo(){ 
    console.log(this.wordSelected.Word);    
    this.words = this.wordAll.filter(word => word.Word.toLowerCase().includes(this.wordSelected.Word.toLowerCase() ));
     this.table.renderRows();
    //else this.words = this.wordAll;
  }


}
