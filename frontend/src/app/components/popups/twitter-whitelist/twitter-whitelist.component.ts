import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogPopUpComponent } from '../dialog-pop-up/dialog-pop-up.component';
import { MatTable } from '@angular/material/table';
import { PopupBlacklistTwitter, PopUpWordMapTwitter } from '../../../types/global';
import { ApiMongo } from '../../../services/api.mongo';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-twitter-whitelist',
  templateUrl: './twitter-whitelist.component.html',
  styleUrls: ['./twitter-whitelist.component.css']
})
export class TwitterWhitelistComponent implements OnInit {
  NewWhiteListShow: boolean = false; 
  whiteListName: string ="";
  WhiteListList: any[]= [];
  wordlist: any[] = [];
  



  displayedColumns: string[] = ['buttons', "word"];
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(
    private apiMongo: ApiMongo,
    public dialog: MatDialogRef<TwitterWhitelistComponent>,
    public dialogVerificar: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: PopUpWordMapTwitter
 
    ) {   }

  ngOnInit(): void {
    this.NewWhiteListShow  =false;
    this.whiteListName="";
    this.apiMongo.getWhiteList().subscribe(data => {
      this.WhiteListList = data;
      console.log(this.WhiteListList)
      this.wordlist = this.WhiteListList[0].wordlist
      console.log(this.wordlist)
    
    });
    
  }


  newWhiteListShow(){
    this.NewWhiteListShow = !this.NewWhiteListShow;
  }

  addwhiteListedWord(){
    
  }
  addwhiteListedName(){
    console.log(this.whiteListName);
    /*console.log(this.words, this.words.indexOf(this.wordSelected.Word), this.word.length);*/
    let trobat = false;
    this.WhiteListList.forEach(wordtuple => { if(wordtuple == this.whiteListName) trobat = true; })
    
    if(trobat){
      this.openDialog("Alerta", "La palabra "+this.whiteListName+ " ya existe", false, "aviso", this.whiteListName)
    }
    else{
      this.apiMongo.addWhitelistedWord(this.whiteListName).subscribe(data=> {
        this.apiMongo.getWhiteList().subscribe(data => {
          //this.words = data;
        });
      });
      this.apiMongo.addWhiteListedTypeWord("programador", "test").subscribe(data=>{

      });
      
    }
    
  }


  dialogEliminarUnCampo(event: any, word: any) {
    
   /* console.log(this.wordSelected)
    this.openDialog("ELIMINAR", "¿Quiere eliminar " + word.Word + "?", true, "eliminar", word.Word );
    event.stopPropagation();
    */
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
        //this.words = data;
      });
    }); 

  }


  resetItem() {
    this.goTo();
    
  }
  test(){
   
   /* console.log("close");
    this.dialog.close({
      word_slider: this.word_slider, 
      hashtag_slider: this.hashtag_slider,
      tag_slider: this.tag_slider
      });
      */
  }

  goTo(){ 
    /*
    console.log(this.wordSelected.Word);    
    this.words = this.wordAll.filter(word => word.Word.toLowerCase().includes(this.wordSelected.Word.toLowerCase() ));
     this.table.renderRows();
    //else this.words = this.wordAll;
    */
  }

}