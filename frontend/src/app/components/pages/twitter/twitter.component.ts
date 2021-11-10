import { Component, OnInit } from '@angular/core';
import { ApiTwitter } from 'src/app/services/api.twitter';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(
    private apiTwitter: ApiTwitter,
  ) {   }

  ngOnInit(): void {
    this.apiTwitter.llamadaDePrueba().subscribe(data=> {
      console.log(data);
    });
  }

}
