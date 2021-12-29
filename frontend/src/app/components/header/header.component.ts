import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logOut(){
    console.log(this.userLogged);
    this.authService.logout();
    console.log("logging out");
  }

}
