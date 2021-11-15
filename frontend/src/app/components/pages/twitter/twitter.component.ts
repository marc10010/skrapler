import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiTwitter } from 'src/app/services/api.twitter';
import { Tweets } from 'src/app/types/api';
import { TwitterFilterComponent } from 'src/app/components/popups/twitter-filter/twitter-filter.component';

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
  tweets: any[]= [];
  tweetsOriginal: any[]=[];
  nombre: string= "";
  selector = 3;
  dateFrom: Date = new Date();
  dateTo: Date = new Date();


  constructor(
    private apiTwitter: ApiTwitter,
    public dialog: MatDialog,
  ) {   }

  ngOnInit(): void {
    this.selector = 3;
    
  }

  openLink(){
    window.open("https://twitter.com/"+ this.infoUser.username)
  }
  sayHi(tweet: Tweets){
    window.open("https://twitter.com/"+ this.infoUser.username + '/status/'+ tweet.id_str)  
  }
  buscar(){
    this.apiTwitter.infoUser(this.nombre).subscribe(data=> {
      this.infoUser.name= data[0].name;
      this.infoUser.username= data[0].screen_name;
      this.infoUser.description= data[0].description;
      this.infoUser.id = data[0].id;
      this.infoUser.location = data[0].location;
      this.infoUser.image = data[0].profile_image_url_https;
      this.infoUser.verified = data[0].verified;
      console.log(this.infoUser);
    });

   this.obtenerTweetsRetweets();   
  }

  obtenerTweetsSolo(){
    this.apiTwitter.obtenerTweetsSinRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data
    })
  }

  obtenerTweetsRetweets(){
    this.apiTwitter.obtenerTweetsRetweets(this.nombre).subscribe(data=> {
      this.tweets = data;
      this.tweetsOriginal = data
    });
  }

  obtenerTweetsComments(){
    this.apiTwitter.obtenerTweetsComentarios(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data
    })
  }
  
  obtenerAll(){
    this.apiTwitter.obtenerTweetsComentariosRetweets(this.nombre).subscribe(data => {
      this.tweets = data;
      this.tweetsOriginal = data
    })
  }


  openDialogFilter(){
    const previousPicker = this.selector;
    const dialogRef = this.dialog.open(TwitterFilterComponent, {
      width: '580px',
      height: '275px',
      
      data: {picker: this.selector.toString(), fechaFin: this.tweets[0].created_at, fechaIni:this.tweets[this.tweets.length-1].created_at }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if(result){
        this.selector = result.picker;
        this.dateFrom = result.DateFrom;
        this.dateTo = result.DateTo;
        if(this.selector != previousPicker){
          if(this.selector==1) this.obtenerAll();
          else if (this.selector==2) this.obtenerTweetsComments();
          else if(this.selector==3)  this.obtenerTweetsRetweets();
          else this.obtenerTweetsSolo();
        }
        this.tweets = this.tweetsOriginal.filter(tweet => (new Date(tweet.created_at) <= this.dateTo && new Date(tweet.created_at) >= this.dateFrom) );
        
        console.log("done", this.tweets);
      }
    });
  }

}
