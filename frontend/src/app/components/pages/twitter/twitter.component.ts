import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiTwitter } from 'src/app/services/api.twitter';
import { Tweets } from 'src/app/types/api';
import { TwitterFilterComponent } from 'src/app/components/popups/twitter-filter/twitter-filter.component';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';
import { flush } from '@angular/core/testing';
import { ArrayType } from '@angular/compiler';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  jsonObject_words = {};
  jsonObject_arrobas = {};
  jsonObject_hastags = {};

  chart = new Chart({
    chart: {     
      type: 'packedbubble',
      height: '80%'
    },
    title: {
      text: 'Frequent Words'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}</sub>'
    },
    plotOptions: {
        packedbubble: {
            draggable: false,
            allowPointSelect: true,
            minSize: '40%',
            maxSize: '100%',
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: "true",
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal',
                    fontSize: '18px'
                }
            },
        },
      },
    series: []
  });

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
  dictWordsArroba: any = "" ;
  dictWordsHashtag: any = "" ;
  
  tweets: any[]= [];
  tweetsOriginal: any[]=[];
  nombre: string= "";
  selector = 3;
  dateFrom: Date = new Date();
  dateTo: Date = new Date();
  filterWord: string = "";
  popUpOpened: number = 0;


  constructor(
    private apiTwitter: ApiTwitter,
    public dialog: MatDialog,
  ) { 
  }

  ngOnInit(): void {
    this.selector = 3;  
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
    console.log("chart",this.chart);
    this.chart.removeSeries(2);
    this.chart.removeSeries(1);
    this.chart.removeSeries(0);
    this.dictWords = [];
    this.dictWordsArroba = [];
    this.dictWordsHashtag = [];
  }
  
  obtenerTweetsSolo(){
    this.apiTwitter.obtenerTweetsSinRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
      this.filter();
    })
  }

  obtenerTweetsRetweets(){
    this.apiTwitter.obtenerTweetsRetweets(this.nombre).subscribe(data=> {
      this.tweets = data;
      this.tweetsOriginal = data;
      this.filter();
    });
  }

  obtenerTweetsComments(){
    this.apiTwitter.obtenerTweetsComentarios(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
      this.filter();
    })
  }
  
  obtenerAll(){
    this.apiTwitter.obtenerTweetsComentariosRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data;
      this.filter();
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
        this.popUpOpened = 1;
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
        this.filter();
      }
    });
  }

  filter(){
    if(this.popUpOpened == 1){
      this.tweets = this.tweetsOriginal.filter(tweet => (new Date(tweet.created_at) <= this.dateTo && new Date(tweet.created_at) >= this.dateFrom) && ((tweet.retweeted_status==undefined && tweet.full_text.toLowerCase().includes(this.filterWord.toLowerCase())) ||(tweet.retweeted_status!=undefined && tweet.retweeted_status.full_text.toLowerCase().includes(this.filterWord.toLowerCase()) ) ) );    
      this.popUpOpened = 0;
      console.log("done", this.tweets);
    }    
    console.log("freq")
    this.frequencyWords();
  }

  frequencyWords(){
    let bannedWords = ['the', 'for', 'a', 'at', 'is', 'in', "it's", 'of'];
    this.dictWords= new Map<string, number>();
    this.dictWordsArroba= new Map<string, number>();
    this.dictWordsHashtag= new Map<string, number>();
    if(this.tweets.length>0){
      this.tweets.forEach(tweet => {
        let word = "";
        if(tweet.retweeted_status) word = tweet.retweeted_status.full_text.split(' ').slice(0,-1);
        else word = tweet.full_text.split(' ').slice(0,-1);
        for(let i=0 ; i< word.length; ++i){
          //si la paraula no esta en la llista de paraules banegades
          if(! bannedWords.includes(word[i].toLowerCase())){
            //arrobas
            if(word[i].toLowerCase()[0]=="@"){
              if( this.dictWordsArroba.has(word[i].toLowerCase()) ){
                this.dictWordsArroba.set(word[i].toLowerCase(), (this.dictWordsArroba.get(word[i].toLowerCase()) + 1) );
              }
              else this.dictWordsArroba.set(word[i].toLowerCase(), 1);
            }
            //hastags
            else if(word[i].toLowerCase()[0]=="#"){

              if( this.dictWordsHashtag.has(word[i].toLowerCase()) ){
                this.dictWordsHashtag.set(word[i].toLowerCase(), (this.dictWordsHashtag.get(word[i].toLowerCase()) + 1) );
              }
              else this.dictWordsHashtag.set(word[i].toLowerCase(), 1);
            }
            else{
              
              if( this.dictWords.has(word[i].toLowerCase()) ){
                this.dictWords.set(word[i].toLowerCase(), (this.dictWords.get(word[i].toLowerCase()) + 1) );
              }
              else this.dictWords.set(word[i].toLowerCase(), 1);
            }
            
          }
        }
          
      });

      this.dictWords = new Map([...this.dictWords.entries()].sort((a, b) => b[1] - a[1]));
      this.dictWordsArroba = new Map([...this.dictWordsArroba.entries()].sort((a, b) => b[1] - a[1]));
      this.dictWordsHashtag = new Map([...this.dictWordsHashtag.entries()].sort((a, b) => b[1] - a[1]));
      
      
      let array = Array.from(this.dictWords, ([name, value]) => ({ name, value }));
      this.jsonObject_words  =array.slice(0,15);

      array = Array.from(this.dictWordsArroba, ([name, value]) => ({ name, value }));
      this.jsonObject_arrobas  =array.slice(0,15);
      array = Array.from(this.dictWordsHashtag, ([name, value]) => ({ name, value }));
      this.jsonObject_hastags  =array.slice(0,15);


        
      this.chart.addSeries({
        type: 'packedbubble',
        name: "Words",
        data: this.jsonObject_words,
        index: 0,
        colorIndex: 5
        }, true, true);

      this.chart.addSeries({
        type: 'packedbubble',
        name: "Arrobas",
        data: this.jsonObject_arrobas,
        index: 1,
        colorIndex: 7
        }, true, true);

      this.chart.addSeries({
        type: 'packedbubble',
        name: "Hastags",
        data: this.jsonObject_hastags,
        index: 2,
        colorIndex: 4
       }, true, true);
      
    }
  }


}

