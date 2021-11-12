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
  tweets: Tweets[]=[];
  tweetsOriginal: any[]=[];
  nombre: string= "";
  selector= 1;


  constructor(
    private apiTwitter: ApiTwitter,
    public dialog: MatDialog,
  ) {   }

  ngOnInit(): void {
    this.selector = 1;
    
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

    this.apiTwitter.obtenerTweets(this.nombre).subscribe(data=> {
      this.tweets= data.map(((tweet: { created_at: any; id: any; full_text: any; id_str: string; retweet_count: any; favorite_count: any}) => ({
        created : tweet.created_at,
        id : tweet.id,
        full_text : tweet.full_text,
        id_str : tweet.id_str,
        retweet_count : tweet.retweet_count,
        favorite_count : tweet.favorite_count,
      })));
      this.tweetsOriginal = data;
      
    });
  }

  openDialogFilter(){
    const dialogRef = this.dialog.open(TwitterFilterComponent, {
      
      data: {picker: this.selector.toString(), fechaFin: this.tweets[0].created, fechaIni:this.tweets[this.tweets.length-1].created }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
      if(result){
        this.selector = result.picker;
        
      }
    });
  }

}
