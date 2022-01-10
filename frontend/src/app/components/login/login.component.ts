import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: '',
  }

  ngOnInit() {
 
  }

  constructor(private authService: AuthService, private router: Router) { }

  Ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(user => {
      console.log("Welcome ", user);
      if(!user) {
        alert("Incorrect credentials, try again or create an account!");
        return;
      };
      this.router.navigate(['/twitter'])
    }).catch(err=>{
      console.log(err)
    })
  }

  getUserLogged() {
    this.authService.getUserLogged().subscribe(res=>{
      console.log(res?.email);
    })
  }
  logout() {
    this.authService.logout();
  }
}
