import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiTwitter } from 'src/app/services/api.twitter';
import { Tweets } from 'src/app/types/api';
import { TwitterFilterComponent } from 'src/app/components/popups/twitter-filter/twitter-filter.component';
import { flush } from '@angular/core/testing';
import { DictWordFrequency } from 'src/app/types/global';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  infoUser = {
    id: "",
    username: "",
    name: "",
    description: "",
    location: "",
    image: "",
    verified: "",
  }

  dictWords: any = "" ;

  tweets: any[]= [];
  tweetsOriginal: any[]=[];
  nombre: string= "";
  selector = 3;
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  filterWord: string = "";


  constructor(
    private apiTwitter: ApiTwitter,
    public dialog: MatDialog,
  ) { 
    this.dictWords = new Map <string, number>([["", 0]]);
  }

  ngOnInit(): void {
    this.selector = 3;
    //this.dictWords = new Map<string, number>();
    
  }

  openTwitter(){
    window.open("https://twitter.com/"+ this.infoUser.username)
  }
  openTweet(tweet: Tweets){
    window.open("https://twitter.com/"+ this.infoUser.username + '/status/'+ tweet.id_str)  
  }
  buscar(){

    this.flush();
    
    this.apiTwitter.infoUser(this.nombre).subscribe(data=> {
      if(data.length>0){
        this.infoUser.name= data[0].name;
        this.infoUser.username= data[0].screen_name;
        this.infoUser.description= data[0].description;
        this.infoUser.id = data[0].id;
        this.infoUser.location = data[0].location;
        this.infoUser.image = data[0].profile_image_url_https;
        this.infoUser.verified = data[0].verified;
        console.log(this.infoUser);

        this.obtenerTweetsRetweets();
      }
    }); 
  }

  flush () {
    //Reset values before subscribe
    this.infoUser = { 
      id: "",
      username: "",
      name: "",
      description: "",
      location: "",
      image: "",
      verified: "",
    }
    this.tweets = [];
    this.tweetsOriginal = [];
    this.selector = 3;
    this.dateFrom =new Date();
    this.dateTo = new Date();
    this.filterWord = "";
    this.dictWords = [];
  }
  
  obtenerTweetsSolo(){
    this.apiTwitter.obtenerTweetsSinRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
    })
  }

  obtenerTweetsRetweets(){
    this.apiTwitter.obtenerTweetsRetweets(this.nombre).subscribe(data=> {
      this.tweets = data;
      this.tweetsOriginal = data;
      this.frequencyWords();
    });
  }

  obtenerTweetsComments(){
    this.apiTwitter.obtenerTweetsComentarios(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
    })
  }
  
  obtenerAll(){
    this.apiTwitter.obtenerTweetsComentariosRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
    })
  }


  openDialogFilter(){
    const previousPicker = this.selector;
    const dialogRef = this.dialog.open(TwitterFilterComponent, {
      width: '580px',
      height: '375px',
      
      data: {picker: this.selector.toString(), fechaFin: this.tweetsOriginal[0].created_at, fechaIni:this.tweetsOriginal[this.tweetsOriginal.length-1].created_at, word: this.filterWord }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if(result){
        this.selector = result.picker;
        this.dateFrom = result.DateFrom;
        this.dateTo = result.DateTo;
        this.filterWord = result.word;
        if(this.selector != previousPicker){
          if(this.selector==1) this.obtenerAll();
          else if (this.selector==2) this.obtenerTweetsComments();
          else if(this.selector==3)  this.obtenerTweetsRetweets();
          else this.obtenerTweetsSolo();
        }
        console.log("test", this.tweetsOriginal[1].retweeted_status, this.tweetsOriginal[1].retweeted_status==undefined)
        this.tweets = this.tweetsOriginal.filter(tweet => (new Date(tweet.created_at) <= this.dateTo && new Date(tweet.created_at) >= this.dateFrom) && ((tweet.retweeted_status==undefined && tweet.full_text.toLowerCase().includes(this.filterWord.toLowerCase())) ||(tweet.retweeted_status!=undefined && tweet.retweeted_status.full_text.toLowerCase().includes(this.filterWord.toLowerCase()) ) ) );
        
        this.frequencyWords();

        console.log("done", this.tweets);
      }
    });
  }

  frequencyWords(){
    console.log("hi");
    let i = 0;
    this.dictWords= new Map<string, number>();
    if(this.tweets.length>0){
      this.tweets.forEach(tweet => {
        let word = "";
        if(tweet.retweeted_status) word = tweet.retweeted_status.full_text.split(' ').slice(0,-1);
        else word = tweet.full_text.split(' ').slice(0,-1);
        for(let i=0 ; i< word.length; ++i){
          if( this.dictWords.has(word[i]) ){
            this.dictWords.set(word[i], (this.dictWords.get(word[i]) + 1) );
          }
          else this.dictWords.set(word[i], 1);
          
        }
          
      });
      this.dictWords = new Map([...this.dictWords.entries()].sort((a, b) => b[1] - a[1]));
      console.log(this.dictWords);
    }
  }

}
